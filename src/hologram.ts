import { playHardwareTone } from './audio';
import { holoModels } from './hologram-models';
import { 
  activeHoloKey, setActiveHoloKey,
  isHoloOrbiting, setIsHoloOrbiting,
  hYaw, setHYaw,
  hPitch, setHPitch,
  scaleFactor,
  isDragging, setIsDragging,
  previousMouseX, setPreviousMouseX,
  previousMouseY, setPreviousMouseY
} from './state';
import { HoloVertex } from './types';

export function toggleHoloOrbit() {
  setIsHoloOrbiting(!isHoloOrbiting);
  const btn = document.getElementById('holoOrbitBtn');
  if (btn) btn.innerText = isHoloOrbiting ? 'AUTO_ROT: ON' : 'AUTO_ROT: OFF';
  playHardwareTone(659.25, 0.05);
}

export function selectHoloModel(key: string) {
  playHardwareTone(784, 0.06);
  setActiveHoloKey(key as 'blue-pill' | 'esp32' | 'triac' | 'transistor' | 'diode');
  
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
}

export function resizeHologramCanvas() {
  const holoCanvas = document.getElementById('hologramViewer3D') as HTMLCanvasElement;
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

export function renderHologramFrame() {
  const holoCanvas = document.getElementById('hologramViewer3D') as HTMLCanvasElement;
  const holoCtx = holoCanvas ? holoCanvas.getContext('2d') as CanvasRenderingContext2D : null;
  if (!holoCanvas || !holoCtx) return;

  holoCtx.clearRect(0, 0, holoCanvas.width, holoCanvas.height);
  const w = holoCanvas.width;
  const h = holoCanvas.height;

  if (isHoloOrbiting) {
    setHYaw(hYaw + 0.008);
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

export function initHologramEvents() {
  const holoCanvas = document.getElementById('hologramViewer3D') as HTMLCanvasElement;
  if (!holoCanvas) return;

  holoCanvas.addEventListener('mousedown', (e: MouseEvent) => {
    setIsDragging(true);
    setIsHoloOrbiting(false);
    setPreviousMouseX(e.clientX);
    setPreviousMouseY(e.clientY);
  });

  window.addEventListener('mouseup', () => {
    setIsDragging(false);
  });

  holoCanvas.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouseX;
    const deltaY = e.clientY - previousMouseY;
    setHYaw(hYaw + deltaX * 0.01);
    
    let newPitch = hPitch + deltaY * 0.01;
    newPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, newPitch));
    setHPitch(newPitch);
    
    setPreviousMouseX(e.clientX);
    setPreviousMouseY(e.clientY);

    const yawEl = document.getElementById('holoYaw');
    const pitchEl = document.getElementById('holoPitch');
    if (yawEl) yawEl.innerText = hYaw.toFixed(2);
    if (pitchEl) pitchEl.innerText = hPitch.toFixed(2);
  });

  holoCanvas.addEventListener('touchstart', (e: TouchEvent) => {
    if (e.touches.length === 0) return;
    setIsDragging(true);
    setIsHoloOrbiting(false);
    setPreviousMouseX(e.touches[0].clientX);
    setPreviousMouseY(e.touches[0].clientY);
  });

  holoCanvas.addEventListener('touchend', () => {
    setIsDragging(false);
  });

  holoCanvas.addEventListener('touchmove', (e: TouchEvent) => {
    if (!isDragging || e.touches.length === 0) return;
    const t = e.touches[0];
    const deltaX = t.clientX - previousMouseX;
    const deltaY = t.clientY - previousMouseY;
    setHYaw(hYaw + deltaX * 0.015);
    
    let newPitch = hPitch + deltaY * 0.015;
    newPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, newPitch));
    setHPitch(newPitch);

    setPreviousMouseX(t.clientX);
    setPreviousMouseY(t.clientY);
  });
}
