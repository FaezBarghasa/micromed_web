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

export function compilePCBLayout() {
  const pcbCanvas = document.getElementById('pcbBackgroundCanvas') as HTMLCanvasElement;
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

export function layoutPCBSubstrate() {
  const pcbCanvas = document.getElementById('pcbBackgroundCanvas') as HTMLCanvasElement;
  if (pcbCanvas) {
    pcbCanvas.width = window.innerWidth;
    pcbCanvas.height = window.innerHeight;
    compilePCBLayout();
  }
}

export function animateMainboardPCB() {
  const pcbCanvas = document.getElementById('pcbBackgroundCanvas') as HTMLCanvasElement;
  const pcbCtx = pcbCanvas ? pcbCanvas.getContext('2d') as CanvasRenderingContext2D : null;
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
