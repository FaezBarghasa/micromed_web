import { playHardwareTone } from './audio';

export function handleContractSubmission(e: Event) {
  e.preventDefault();
  playHardwareTone(587.33, 0.1);
  setTimeout(() => playHardwareTone(880, 0.18), 120);

  const successMsg = document.getElementById('formSuccessMessage');
  if (successMsg) successMsg.classList.remove('hidden');
}

export function dismissFormNotification() {
  playHardwareTone(440, 0.06);
  const successMsg = document.getElementById('formSuccessMessage');
  if (successMsg) successMsg.classList.add('hidden');

  const contractForm = document.getElementById('pcbContractForm') as HTMLFormElement;
  if (contractForm) contractForm.reset();
}
