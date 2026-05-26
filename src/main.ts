import { toggleLanguage } from './i18n';
import { routeTo } from './router';
import { selectTeamNode } from './team';
import { handleContractSubmission, dismissFormNotification } from './form';
import { playHardwareTone, toggleMainboardAudio } from './audio';
import { selectProduct, updateDatasheet } from './datasheet';
import { selectHoloModel, toggleHoloOrbit, resizeHologramCanvas, renderHologramFrame, initHologramEvents } from './hologram';
import { layoutPCBSubstrate, animateMainboardPCB } from './pcb';
import { triggerStartupSequence } from './startup';

// Bind to window for inline HTML onclick handlers
window.toggleLanguage = toggleLanguage;
window.routeTo = routeTo;
window.selectTeamNode = selectTeamNode;
window.handleContractSubmission = handleContractSubmission;
window.dismissFormNotification = dismissFormNotification;
window.playHardwareTone = playHardwareTone;
window.toggleMainboardAudio = toggleMainboardAudio;
window.selectProduct = selectProduct;
window.selectHoloModel = selectHoloModel;
window.toggleHoloOrbit = toggleHoloOrbit;

document.addEventListener('DOMContentLoaded', () => {
  layoutPCBSubstrate();
  resizeHologramCanvas();
  renderHologramFrame();
  initHologramEvents();
  updateDatasheet();
  triggerStartupSequence();
  animateMainboardPCB();

  // telemetry freq mock cycle
  const telemetryFreq = document.getElementById('firmwareFreq');
  if (telemetryFreq) {
    setInterval(() => {
      const freq = (16.000 + Math.random() * 0.005).toFixed(4);
      telemetryFreq.innerText = `${freq} MHz`;
    }, 1200);
  }
});

window.addEventListener('resize', () => {
  layoutPCBSubstrate();
  resizeHologramCanvas();
});
