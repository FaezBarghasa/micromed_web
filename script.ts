import resources from './resources.json';
// Micromed Retro-Futuristic UI Controller Script

declare global {
  interface Window {
    toggleLanguage: () => void;
    routeTo: (targetId: string) => void;
    selectTeamNode: (nodeKey: string) => void;
    handleContractSubmission: (e: Event) => void;
    dismissFormNotification: () => void;
    playHardwareTone: (freq: number, dur: number) => void;
    toggleMainboardAudio: () => void;
    selectProduct: (prodKey: string) => void;
    selectHoloModel: (key: string) => void;
    toggleHoloOrbit: () => void;
  }
}


// ==================== STATE MANAGEMENT ====================
let currentLang: 'en' | 'fa' = 'en';
let soundEngineCtx: AudioContext | null = null;
let isMuted = true;
let activeHoloKey: 'blue-pill' | 'esp32' | 'triac' | 'transistor' | 'diode' = 'blue-pill';
let isHoloOrbiting = true;
let hYaw = 0.4;
let hPitch = -0.3;
const scaleFactor = 1.0;
let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;
let activeProductKey = 'MM-TC-01';

interface HoloVertex {
  x: number;
  y: number;
  z: number;
}

interface HoloModel {
  vertices: HoloVertex[];
  lines: number[][];
}


// ==================== TRANSLATED SCHEMATICS & DICTIONARIES ====================
const translations = resources.translations as Record<'en' | 'fa', Record<string, string>>;
const datasheetTemplates = resources.datasheetTemplates as Record<'en' | 'fa', Record<string, string>>;
const holoModels: { [key: string]: HoloModel } = {
  "blue-pill": {
    vertices: [
      { x: -50, y: -3, z: -100 }, { x: 50, y: -3, z: -100 }, { x: 50, y: -3, z: 100 }, { x: -50, y: -3, z: 100 },
      { x: -20, y: -8, z: -20 }, { x: 20, y: -8, z: -20 }, { x: 20, y: -8, z: 20 }, { x: -20, y: -8, z: 20 },
      { x: -15, y: -10, z: -105 }, { x: 15, y: -10, z: -105 }, { x: 15, y: -3, z: -95 }, { x: -15, y: -3, z: -95 },
      { x: -8, y: -6, z: 50 }, { x: 8, y: -6, z: 50 }, { x: 8, y: -3, z: 70 }, { x: -8, y: -3, z: 70 }
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [8, 9], [9, 10], [10, 11], [11, 8],
      [12, 13], [13, 14], [14, 15], [15, 12]
    ]
  },
  "esp32": {
    vertices: [
      { x: -60, y: -3, z: -90 }, { x: 60, y: -3, z: -90 }, { x: 60, y: -3, z: 90 }, { x: -60, y: -3, z: 90 },
      { x: -25, y: -8, z: -40 }, { x: 25, y: -8, z: -40 }, { x: 25, y: -8, z: 30 }, { x: -25, y: -8, z: 30 },
      { x: -18, y: -8, z: -95 }, { x: 18, y: -8, z: -95 }, { x: 18, y: -3, z: -85 }, { x: -18, y: -3, z: -85 },
      { x: -45, y: -6, z: -75 }, { x: -35, y: -6, z: -75 }, { x: -35, y: -3, z: -65 }, { x: -45, y: -3, z: -65 }
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [8, 9], [9, 10], [10, 11], [11, 8],
      [12, 13], [13, 14], [14, 15], [15, 12]
    ]
  },
  "triac": {
    vertices: [
      { x: -30, y: -45, z: -10 }, { x: 30, y: -45, z: -10 }, { x: 30, y: 15, z: -10 }, { x: -30, y: 15, z: -10 },
      { x: -30, y: -45, z: -25 }, { x: 30, y: -45, z: -25 }, { x: 30, y: 15, z: -25 }, { x: -30, y: 15, z: -25 },
      { x: -28, y: -45, z: -26 }, { x: 28, y: -45, z: -26 }, { x: 28, y: -75, z: -26 }, { x: -28, y: -75, z: -26 },
      { x: -20, y: 15, z: -17 }, { x: -20, y: 75, z: -17 },
      { x: 0, y: 15, z: -17 }, { x: 0, y: 75, z: -17 },
      { x: 20, y: 15, z: -17 }, { x: 20, y: 75, z: -17 }
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      [8, 9], [9, 10], [10, 11], [11, 8],
      [12, 13], [14, 15], [16, 17]
    ]
  },
  "transistor": {
    vertices: [
      { x: -20, y: -30, z: -10 }, { x: 20, y: -30, z: -10 }, { x: 20, y: 20, z: -10 }, { x: -20, y: 20, z: -10 },
      { x: -15, y: -30, z: -25 }, { x: 15, y: -30, z: -25 }, { x: 15, y: 20, z: -25 }, { x: -15, y: 20, z: -25 },
      { x: -15, y: 20, z: -15 }, { x: -15, y: 70, z: -15 },
      { x: 0, y: 20, z: -15 }, { x: 0, y: 70, z: -15 },
      { x: 15, y: 20, z: -15 }, { x: 15, y: 70, z: -15 }
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      [8, 9], [10, 11], [12, 13]
    ]
  },
  "diode": {
    vertices: [
      { x: -15, y: -15, z: -40 }, { x: 15, y: -15, z: -40 }, { x: 15, y: 15, z: -40 }, { x: -15, y: 15, z: -40 },
      { x: -15, y: -15, z: 40 }, { x: 15, y: -15, z: 40 }, { x: 15, y: 15, z: 40 }, { x: -15, y: 15, z: 40 },
      { x: -15, y: -15, z: -20 }, { x: 15, y: -15, z: -20 }, { x: 15, y: 15, z: -20 }, { x: -15, y: 15, z: -20 },
      { x: 0, y: 0, z: -40 }, { x: 0, y: 0, z: -95 },
      { x: 0, y: 0, z: 40 }, { x: 0, y: 0, z: 95 }
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      [8, 9], [9, 10], [10, 11], [11, 8],
      [12, 13], [14, 15]
    ]
  }
};

// ==================== SYSTEM BUS ROUTING SWITCHBOARD ====================
window.routeTo = function(targetId: string) {
  window.playHardwareTone(440, 0.06);
  setTimeout(() => window.playHardwareTone(880, 0.06), 60);

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
};

// ==================== LANGUAGE TOGGLE ====================
window.toggleLanguage = function() {
  initAudioEngine();
  currentLang = currentLang === 'en' ? 'fa' : 'en';

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

  window.playHardwareTone(880, 0.08);
  setTimeout(() => window.playHardwareTone(1100, 0.1), 100);

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
};

function updateUIStrings() {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-key');
    if (key && translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key];
    }
  });
}

// ==================== AUDIO SYNTH ENGINE ====================
function initAudioEngine() {
  if (!soundEngineCtx) {
    soundEngineCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
}

window.toggleMainboardAudio = function() {
  initAudioEngine();
  isMuted = !isMuted;
  const toggleBtn = document.getElementById('synthToggle');
  if (toggleBtn) {
    if (isMuted) {
      toggleBtn.innerText = '[🔈 AUDIO_MUTED]';
      toggleBtn.className = "text-[#00ff66] hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-emerald-950/60 bg-emerald-950/20 px-2 py-0.5";
    } else {
      toggleBtn.innerText = '[🔊 AUDIO_LIVE]';
      toggleBtn.className = "text-white hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-[#00ff66]/60 bg-[#00ff66]/10 px-2 py-0.5 glow-border";
      window.playHardwareTone(659.25, 0.08);
      setTimeout(() => window.playHardwareTone(987.77, 0.12), 80);
    }
  }
};

window.playHardwareTone = function(freq: number, dur: number) {
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
};

// ==================== DYNAMIC DATASHEETS ====================
function updateDatasheet() {
  const container = document.getElementById('datasheetContent');
  const designator = document.getElementById('datasheetDesignator');

  if (container) {
    container.innerHTML = datasheetTemplates[currentLang][activeProductKey] || '';
  }
  if (designator) {
    designator.innerText = `DATASHEET // ${activeProductKey}`;
  }
}

window.selectProduct = function(prodKey: string) {
  window.playHardwareTone(659.25, 0.05);
  activeProductKey = prodKey;

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
};

// ==================== ORGANIZATIONAL METASTATE BLUEPRINT ====================
window.selectTeamNode = function(nodeKey: string) {
  window.playHardwareTone(523.25, 0.06);
  setTimeout(() => window.playHardwareTone(659.25, 0.06), 60);

  const titleKey = `team-${nodeKey}-title`;
  const descKey = `team-${nodeKey}-desc`;

  const readout = document.getElementById('teamReadout');
  if (readout) {
    readout.innerHTML = `
      <span class="text-[#00ff66] block text-[9px] font-bold font-silkscreen">${translations[currentLang][titleKey]}</span>
      <p class="text-emerald-100/80 mt-1 leading-relaxed">${translations[currentLang][descKey]}</p>
    `;
  }
};

// ==================== SECURE UPLINK CONTRACT FORM ====================
window.handleContractSubmission = function(e: Event) {
  e.preventDefault();
  window.playHardwareTone(587.33, 0.1);
  setTimeout(() => window.playHardwareTone(880, 0.18), 120);

  const successMsg = document.getElementById('formSuccessMessage');
  if (successMsg) successMsg.classList.remove('hidden');
};

window.dismissFormNotification = function() {
  window.playHardwareTone(440, 0.06);
  const successMsg = document.getElementById('formSuccessMessage');
  if (successMsg) successMsg.classList.add('hidden');

  const contractForm = document.getElementById('pcbContractForm') as HTMLFormElement;
  if (contractForm) contractForm.reset();
};

// ==================== BACKGROUND PCB GENERATOR ====================
const pcbCanvas = document.getElementById('pcbBackgroundCanvas') as HTMLCanvasElement;
const pcbCtx = pcbCanvas ? pcbCanvas.getContext('2d') as CanvasRenderingContext2D : null;

interface PCBTraceSegment {
  angle: number;
  length: number;
}

interface PCBTrace {
  points: { x: number; y: number }[];
  color: string;
  width: number;
  pulseProgress: number;
}

let staticTraces: PCBTrace[] = [];

function compilePCBLayout() {
  if (!pcbCanvas) return;
  staticTraces = [];
  const w = pcbCanvas.width;
  const h = pcbCanvas.height;
  const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

  const adjustX = (xVal: number) => isRtl ? (w - xVal) : xVal;

  function addParallelBus(startX: number, startY: number, count: number, spacing: number, directions: PCBTraceSegment[]) {
    for (let i = 0; i < count; i++) {
      const pts: { x: number; y: number }[] = [];
      let curX = startX + i * spacing;
      let curY = startY;
      pts.push({ x: adjustX(curX), y: curY });

      for (const seg of directions) {
        let angle = seg.angle;
        if (isRtl) {
          angle = (180 - angle + 360) % 360;
        }
        const rad = (angle * Math.PI) / 180;
        curX += seg.length * Math.cos(rad);
        curY += seg.length * Math.sin(rad);
        pts.push({ x: adjustX(curX), y: curY });
      }

      staticTraces.push({
        points: pts,
        color: '#00ff66',
        width: 1.5,
        pulseProgress: Math.random()
      });
    }
  }

  // Procedural High-Density CAD Bus Definitions
  addParallelBus(w * 0.18, 0, 6, 14, [
    { angle: 90, length: h * 0.12 },
    { angle: 135, length: 60 },
    { angle: 90, length: h * 0.14 }
  ]);

  addParallelBus(w * 0.05, h * 0.35, 8, 10, [
    { angle: 0, length: w * 0.12 },
    { angle: 45, length: 80 },
    { angle: 0, length: w * 0.10 }
  ]);

  addParallelBus(w * 0.85, 0, 4, 16, [
    { angle: 90, length: h * 0.10 },
    { angle: 225, length: 70 },
    { angle: 180, length: w * 0.08 }
  ]);

  addParallelBus(w * 0.65, h * 0.20, 7, 12, [
    { angle: 180, length: w * 0.10 },
    { angle: 135, length: 90 },
    { angle: 180, length: w * 0.08 }
  ]);

  addParallelBus(w * 0.48, h, 4, 20, [
    { angle: 270, length: h * 0.16 },
    { angle: 315, length: 110 },
    { angle: 270, length: h * 0.10 }
  ]);

  addParallelBus(w * 0.12, h, 5, 12, [
    { angle: 270, length: h * 0.14 },
    { angle: 225, length: 80 },
    { angle: 270, length: h * 0.12 }
  ]);

  addParallelBus(w * 0.78, h, 9, 8, [
    { angle: 270, length: h * 0.18 },
    { angle: 225, length: 90 },
    { angle: 270, length: h * 0.08 }
  ]);

  const scatterPaths = [
    { x: w * 0.08, y: h * 0.15, d: [{ angle: 45, length: 50 }, { angle: 0, length: 70 }] },
    { x: w * 0.90, y: h * 0.50, d: [{ angle: 135, length: 60 }, { angle: 180, length: 80 }] },
    { x: w * 0.28, y: h * 0.82, d: [{ angle: 315, length: 70 }, { angle: 0, length: 60 }] },
    { x: w * 0.72, y: h * 0.32, d: [{ angle: 135, length: 50 }, { angle: 180, length: 50 }] },
    { x: w * 0.15, y: h * 0.65, d: [{ angle: 45, length: 80 }, { angle: 90, length: 40 }] }
  ];

  scatterPaths.forEach(path => {
    const pts: { x: number; y: number }[] = [];
    let curX = path.x;
    let curY = path.y;
    pts.push({ x: adjustX(curX), y: curY });

    for (const seg of path.d) {
      let angle = seg.angle;
      if (isRtl) {
        angle = (180 - angle + 360) % 360;
      }
      const rad = (angle * Math.PI) / 180;
      curX += seg.length * Math.cos(rad);
      curY += seg.length * Math.sin(rad);
      pts.push({ x: adjustX(curX), y: curY });
    }

    staticTraces.push({
      points: pts,
      color: '#00ff66',
      width: 1.6,
      pulseProgress: Math.random()
    });
  });
}

function layoutPCBSubstrate() {
  if (pcbCanvas) {
    pcbCanvas.width = window.innerWidth;
    pcbCanvas.height = window.innerHeight;
    compilePCBLayout();
  }
}

function animateMainboardPCB() {
  if (!pcbCanvas || !pcbCtx) return;
  pcbCtx.clearRect(0, 0, pcbCanvas.width, pcbCanvas.height);

  pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.02)';
  pcbCtx.lineWidth = 0.5;
  const step = 40;
  for (let x = 0; x < pcbCanvas.width; x += step) {
    pcbCtx.beginPath();
    pcbCtx.moveTo(x, 0);
    pcbCtx.lineTo(x, pcbCanvas.height);
    pcbCtx.stroke();
  }
  for (let y = 0; y < pcbCanvas.height; y += step) {
    pcbCtx.beginPath();
    pcbCtx.moveTo(0, y);
    pcbCtx.lineTo(pcbCanvas.width, y);
    pcbCtx.stroke();
  }

  staticTraces.forEach(trace => {
    if (trace.points.length === 0) return;

    pcbCtx.beginPath();
    pcbCtx.moveTo(trace.points[0].x, trace.points[0].y);
    for (let j = 1; j < trace.points.length; j++) {
      pcbCtx.lineTo(trace.points[j].x, trace.points[j].y);
    }
    pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.08)';
    pcbCtx.lineWidth = 5;
    pcbCtx.stroke();

    pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.35)';
    pcbCtx.lineWidth = trace.width;
    pcbCtx.stroke();

    const lastPoint = trace.points[trace.points.length - 1];
    pcbCtx.beginPath();
    pcbCtx.arc(lastPoint.x, lastPoint.y, 4.5, 0, Math.PI * 2);
    pcbCtx.fillStyle = '#0a0c0d';
    pcbCtx.strokeStyle = '#00ff66';
    pcbCtx.lineWidth = 1.5;
    pcbCtx.fill();
    pcbCtx.stroke();

    trace.pulseProgress += 0.003;
    if (trace.pulseProgress >= 1) {
      trace.pulseProgress = 0;
    }

    const segmentCount = trace.points.length - 1;
    const progressPerSegment = 1 / segmentCount;
    const currentSegment = Math.min(
      Math.floor(trace.pulseProgress / progressPerSegment),
      segmentCount - 1
    );
    const segmentProgress = (trace.pulseProgress % progressPerSegment) / progressPerSegment;

    const ptA = trace.points[currentSegment];
    const ptB = trace.points[currentSegment + 1];

    if (ptA && ptB) {
      const pulseX = ptA.x + (ptB.x - ptA.x) * segmentProgress;
      const pulseY = ptA.y + (ptB.y - ptA.y) * segmentProgress;

      pcbCtx.beginPath();
      pcbCtx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
      pcbCtx.fillStyle = '#00ff66';
      pcbCtx.shadowColor = '#00ff66';
      pcbCtx.shadowBlur = 8;
      pcbCtx.fill();
      pcbCtx.shadowBlur = 0;
    }
  });

  requestAnimationFrame(animateMainboardPCB);
}

// ==================== INTERACTIVE 3D HOLOGRAM EXPLORER ====================
const holoCanvas = document.getElementById('hologramViewer3D') as HTMLCanvasElement;
const holoCtx = holoCanvas ? holoCanvas.getContext('2d') as CanvasRenderingContext2D : null;

if (holoCanvas) {
  holoCanvas.addEventListener('mousedown', (e: MouseEvent) => {
    isDragging = true;
    isHoloOrbiting = false;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  holoCanvas.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouseX;
    const deltaY = e.clientY - previousMouseY;
    hYaw += deltaX * 0.01;
    hPitch += deltaY * 0.01;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;

    hPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, hPitch));

    const yawEl = document.getElementById('holoYaw');
    const pitchEl = document.getElementById('holoPitch');
    if (yawEl) yawEl.innerText = hYaw.toFixed(2);
    if (pitchEl) pitchEl.innerText = hPitch.toFixed(2);
  });

  holoCanvas.addEventListener('touchstart', (e: TouchEvent) => {
    if (e.touches.length === 0) return;
    isDragging = true;
    isHoloOrbiting = false;
    previousMouseX = e.touches[0].clientX;
    previousMouseY = e.touches[0].clientY;
  });

  holoCanvas.addEventListener('touchend', () => {
    isDragging = false;
  });

  holoCanvas.addEventListener('touchmove', (e: TouchEvent) => {
    if (!isDragging || e.touches.length === 0) return;
    const t = e.touches[0];
    const deltaX = t.clientX - previousMouseX;
    const deltaY = t.clientY - previousMouseY;
    hYaw += deltaX * 0.015;
    hPitch += deltaY * 0.015;
    previousMouseX = t.clientX;
    previousMouseY = t.clientY;
    hPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, hPitch));
  });
}

window.toggleHoloOrbit = function() {
  isHoloOrbiting = !isHoloOrbiting;
  const btn = document.getElementById('holoOrbitBtn');
  if (btn) btn.innerText = isHoloOrbiting ? 'AUTO_ROT: ON' : 'AUTO_ROT: OFF';
  window.playHardwareTone(659.25, 0.05);
};

window.selectHoloModel = function(key: string) {
  window.playHardwareTone(784, 0.06);
  activeHoloKey = key as 'blue-pill' | 'esp32' | 'triac' | 'transistor' | 'diode';
  const btnMap = ['blue-pill', 'esp32', 'triac', 'transistor', 'diode'];
  btnMap.forEach(k => {
    const btn = document.getElementById(`btn-holo-${k}`);
    if (btn) {
      btn.className = "py-1.5 px-2 text-[9px] font-mono border border-emerald-900 text-emerald-600 hover:border-cyan-500 hover:text-cyan-400";
    }
  });
  const activeBtn = document.getElementById(`btn-holo-${key}`);
  if (activeBtn) {
    activeBtn.className = "py-1.5 px-2 text-[9px] font-mono border border-cyan-500 bg-cyan-950/20 text-[#00f3ff] font-bold";
  }
  const modelNameEl = document.getElementById('holoModelName');
  if (modelNameEl) modelNameEl.innerText = `MM-${key.toUpperCase()}`;
};

function resizeHologramCanvas() {
  if (holoCanvas && holoCanvas.parentElement) {
    holoCanvas.width = holoCanvas.parentElement.clientWidth;
    holoCanvas.height = holoCanvas.parentElement.clientHeight || 240;
  }
}

function project3DHoloNode(x: number, y: number, z: number, w: number, h: number) {
  const cosY = Math.cos(hYaw);
  const sinY = Math.sin(hYaw);
  const x1 = x * cosY - z * sinY;
  const z1 = x * sinY + z * cosY;

  const cosP = Math.cos(hPitch);
  const sinP = Math.sin(hPitch);
  const y2 = y * cosP - z1 * sinP;
  const z2 = y * sinP + z1 * cosP;

  const dist = 320;
  const scale = dist / (dist + z2);

  return {
    x: (w / 2) + x1 * scale * scaleFactor,
    y: (h / 2) + y2 * scale * scaleFactor,
    scale: scale
  };
}

function renderHologramFrame() {
  if (!holoCanvas || !holoCtx) return;
  holoCtx.clearRect(0, 0, holoCanvas.width, holoCanvas.height);
  const w = holoCanvas.width;
  const h = holoCanvas.height;

  if (isHoloOrbiting) {
    hYaw += 0.008;
  }

  const activeModel = holoModels[activeHoloKey];
  if (activeModel) {
    holoCtx.strokeStyle = 'rgba(0, 243, 255, 0.02)';
    holoCtx.lineWidth = 1;
    for (let r = 50; r <= 200; r += 50) {
      holoCtx.beginPath();
      holoCtx.arc(w / 2, h / 2 + 20, r, 0, Math.PI * 2);
      holoCtx.stroke();
    }

    holoCtx.strokeStyle = '#00f3ff';
    holoCtx.lineWidth = 1.4;

    activeModel.lines.forEach((pair: number[]) => {
      const v1 = activeModel.vertices[pair[0]];
      const v2 = activeModel.vertices[pair[1]];

      if (v1 && v2) {
        const p1 = project3DHoloNode(v1.x, v1.y, v1.z, w, h);
        const p2 = project3DHoloNode(v2.x, v2.y, v2.z, w, h);

        holoCtx.beginPath();
        holoCtx.moveTo(p1.x, p1.y);
        holoCtx.lineTo(p2.x, p2.y);

        holoCtx.strokeStyle = `rgba(0, 243, 255, ${Math.min(1.0, 0.2 + p1.scale * 0.7)})`;
        holoCtx.stroke();
      }
    });

    activeModel.vertices.forEach((v: HoloVertex) => {
      const p = project3DHoloNode(v.x, v.y, v.z, w, h);
      holoCtx.fillStyle = '#00ff66';
      holoCtx.beginPath();
      holoCtx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
      holoCtx.fill();
    });
  }

  requestAnimationFrame(renderHologramFrame);
}

// ==================== APP LIFECYCLE LISTENERS ====================
window.addEventListener('resize', () => {
  layoutPCBSubstrate();
  resizeHologramCanvas();
});

// STARTUP ANIMATION TERMINAL LOADER
const logEntries = [
  "> Mapping spatial substrate trace configurations... SUCCESS",
  "> Aligning multi-layer copper impedance vectors... MATCHED [50 OHM]",
  "> Booting bare-metal real-time scheduler registers... ACTIVE",
  "> Loading medical device safety protocols (IEC 60601-1)... LOADED",
  "> Calibrating cold-junction temperature sensors... READY",
  "> Linking custom FOC motor velocity engines... BOUNDED",
  "> Launching 3D Hologram projection gateway..."
];

function triggerStartupSequence() {
  const startupLogEl = document.getElementById('startupLog');
  const startupScreenEl = document.getElementById('startupScreen');
  if (!startupLogEl || !startupScreenEl) return;

  const log = startupLogEl;
  const screen = startupScreenEl;

  let index = 0;
  function printNextLog() {
    if (index < logEntries.length) {
      const div = document.createElement('div');
      div.innerText = logEntries[index];
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
      index++;
      setTimeout(printNextLog, 200 + Math.random() * 200);
    } else {
      setTimeout(() => {
        screen.style.transition = 'opacity 0.5s ease-out';
        screen.style.opacity = '0';
        setTimeout(() => {
          screen.classList.add('hidden');
          // Start actual background audio links if unmuted on first action
        }, 500);
      }, 400);
    }
  }
  setTimeout(printNextLog, 400);
}

// Initialize HUD bindings & Run Hologram and Background loops
document.addEventListener('DOMContentLoaded', () => {
  layoutPCBSubstrate();
  resizeHologramCanvas();
  renderHologramFrame();
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

export {};

