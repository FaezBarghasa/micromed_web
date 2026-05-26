const logEntries = [
  "> Mapping spatial substrate trace configurations... SUCCESS",
  "> Aligning multi-layer copper impedance vectors... MATCHED [50 OHM]",
  "> Booting bare-metal real-time scheduler registers... ACTIVE",
  "> Loading medical device safety protocols (IEC 60601-1)... LOADED",
  "> Calibrating cold-junction temperature sensors... READY",
  "> Linking custom FOC motor velocity engines... BOUNDED",
  "> Launching 3D Hologram projection gateway..."
];

export function triggerStartupSequence() {
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
        }, 500);
      }, 400);
    }
  }
  setTimeout(printNextLog, 400);
}
