import { currentLang, setCurrentLang } from './state';
import { initAudioEngine, playHardwareTone } from './audio';
import { updateDatasheet } from './datasheet';
import { compilePCBLayout } from './pcb';
import resources from '../resources.json';

const translations = resources.translations as Record<'en' | 'fa', Record<string, string>>;

export function updateUIStrings() {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (key && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}

export function toggleLanguage() {
  initAudioEngine();
  setCurrentLang(currentLang === 'en' ? 'fa' : 'en');

  const html = document.documentElement;
  const langToggleBtn = document.getElementById('langToggle');
  const startTitle = document.getElementById('start-title');
  const startTarget = document.getElementById('start-target');
  const startLoad = document.getElementById('start-load');

  if (currentLang === 'fa') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'fa');
    if (langToggleBtn) langToggleBtn.innerText = '[ JUMPER: FA ]';

    if (startTitle) startTitle.innerText = 'واحد مدیریت پروتکل‌های سخت‌افزاری میکرومد // آماده به کار';
    if (startTarget) startTarget.innerText = 'معماری مدارهای چاپی: سبک مینیمال و فرکانس بالا';
    if (startLoad) startLoad.innerText = 'درحال آماده‌سازی سیستم و بوردها...';
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    if (langToggleBtn) langToggleBtn.innerText = '[ JUMPER: EN ]';

    if (startTitle) startTitle.innerText = 'MICROMED MASTER CONTROL PROTOCOLS // READY';
    if (startTarget) startTarget.innerText = 'TARGET ARCHITECTURE: ULTRA-GLOW MINIMAL DESIGNATORS';
    if (startLoad) startLoad.innerText = 'BOOTSTRAPPING MAINBOARD REGISTERS [99%]';
  }

  playHardwareTone(880, 0.08);
  setTimeout(() => playHardwareTone(1100, 0.1), 100);

  updateUIStrings();
  updateDatasheet();

  const readout = document.getElementById('teamReadout');
  if (readout) {
    readout.innerHTML = `
      <span class="text-emerald-700 block text-[9px] font-bold">U1_CELL_READOUT</span>
      <p class="text-emerald-100/60 mt-1">${translations[currentLang]["team-readout-placeholder"]}</p>
    `;
  }

  compilePCBLayout();
}
