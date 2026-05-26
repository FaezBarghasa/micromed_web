import resources from '../resources.json';
import { currentLang, activeProductKey, setActiveProductKey } from './state';
import { playHardwareTone } from './audio';

const datasheetTemplates = resources.datasheetTemplates as Record<'en' | 'fa', Record<string, string>>;
const translations = resources.translations as Record<'en' | 'fa', Record<string, string>>;

export function updateDatasheet() {
  const container = document.getElementById('datasheetContent');
  const designator = document.getElementById('datasheetDesignator');

  if (container) {
    container.innerHTML = datasheetTemplates[currentLang][activeProductKey] || '';
  }
  if (designator) {
    designator.innerText = `DATASHEET // ${activeProductKey}`;
  }
}

export function selectProduct(prodKey: string) {
  playHardwareTone(659.25, 0.05);
  setActiveProductKey(prodKey);

  const productsList = ['MM-TC-01', 'MM-MC-04', 'MM-ISO-02'];

  productsList.forEach(key => {
    const btn = document.getElementById(`btn-prod-${key}`);
    if (btn) {
      btn.classList.remove('border-emerald-500', 'bg-emerald-950/20', 'text-[#00ff66]');
      btn.classList.add('border-emerald-950', 'text-emerald-600');

      const labelSpan = btn.querySelector('span:last-child') as HTMLSpanElement;
      if (labelSpan) {
        labelSpan.innerText = translations[currentLang]["dir-status-locked"];
        labelSpan.className = 'text-[9px] text-gray-500';
      }
    }
  });

  const activeBtn = document.getElementById(`btn-prod-${prodKey}`);
  if (activeBtn) {
    activeBtn.classList.add('border-emerald-500', 'bg-emerald-950/20', 'text-[#00ff66]');
    activeBtn.classList.remove('border-emerald-950', 'text-emerald-600');

    const labelSpan = activeBtn.querySelector('span:last-child') as HTMLSpanElement;
    if (labelSpan) {
      labelSpan.innerText = translations[currentLang]["dir-status-active"];
      labelSpan.className = 'text-[9px] text-[#00ff66] font-bold';
    }
  }

  updateDatasheet();
}
