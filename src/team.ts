import { playHardwareTone } from './audio';
import { currentLang } from './state';
import resources from '../resources.json';

const translations = resources.translations as Record<'en' | 'fa', Record<string, string>>;

export function selectTeamNode(nodeKey: string) {
  playHardwareTone(523.25, 0.06);
  setTimeout(() => playHardwareTone(659.25, 0.06), 60);

  const titleKey = `team-${nodeKey}-title`;
  const descKey = `team-${nodeKey}-desc`;

  const readout = document.getElementById('teamReadout');
  if (readout) {
    readout.innerHTML = `
      <span class="text-[#00ff66] block text-[9px] font-bold font-silkscreen">${translations[currentLang][titleKey]}</span>
      <p class="text-emerald-100/80 mt-1 leading-relaxed">${translations[currentLang][descKey]}</p>
    `;
  }
}
