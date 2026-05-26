import { isMuted, setIsMuted } from './state';

let soundEngineCtx: AudioContext | null = null;

export function initAudioEngine() {
  if (!soundEngineCtx) {
    soundEngineCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
}

export function toggleMainboardAudio() {
  initAudioEngine();
  setIsMuted(!isMuted);
  const toggleBtn = document.getElementById('synthToggle');
  if (toggleBtn) {
    if (isMuted) {
      toggleBtn.innerText = '[🔈 AUDIO_MUTED]';
      toggleBtn.className = "text-[#00ff66] hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-emerald-950/60 bg-emerald-950/20 px-2 py-0.5";
    } else {
      toggleBtn.innerText = '[🔊 AUDIO_LIVE]';
      toggleBtn.className = "text-white hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-[#00ff66]/60 bg-[#00ff66]/10 px-2 py-0.5 glow-border";
      playHardwareTone(659.25, 0.08);
      setTimeout(() => playHardwareTone(987.77, 0.12), 80);
    }
  }
}

export function playHardwareTone(freq: number, dur: number) {
  if (isMuted) return;
  initAudioEngine();
  if (!soundEngineCtx) return;
  try {
    const osc = soundEngineCtx.createOscillator();
    const gain = soundEngineCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, soundEngineCtx.currentTime);

    gain.gain.setValueAtTime(0.04, soundEngineCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.00001, soundEngineCtx.currentTime + dur);

    osc.connect(gain);
    gain.connect(soundEngineCtx.destination);

    osc.start();
    osc.stop(soundEngineCtx.currentTime + dur);
  } catch (err) {
    console.log("Synthesizer error ignored for stability: ", err);
  }
}
