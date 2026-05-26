import { playHardwareTone } from './audio';
import { resizeHologramCanvas } from './hologram';

export function routeTo(targetId: string) {
  playHardwareTone(440, 0.06);
  setTimeout(() => playHardwareTone(880, 0.06), 60);

  const views = ['addr-gateway', 'addr-identity', 'addr-directory', 'addr-uplink'];
  views.forEach(viewId => {
    const el = document.getElementById(viewId);
    if (el) el.classList.add('hidden');

    const btn = document.getElementById(`btn-${viewId}`);
    if (btn) {
      btn.classList.remove('border-emerald-500', 'bg-emerald-950/30', 'text-[#00ff66]');
      btn.classList.add('border-emerald-950', 'text-emerald-600');
    }
  });

  const activeView = document.getElementById(targetId);
  if (activeView) activeView.classList.remove('hidden');

  const activeBtn = document.getElementById(`btn-${targetId}`);
  if (activeBtn) {
    activeBtn.classList.add('border-emerald-500', 'bg-emerald-950/30', 'text-[#00ff66]');
    activeBtn.classList.remove('border-emerald-950', 'text-emerald-600');
  }

  // Volumetric projector redraw trigger
  if (targetId === 'addr-gateway') {
    setTimeout(resizeHologramCanvas, 50);
  }
}
