export interface HoloVertex {
  x: number;
  y: number;
  z: number;
}

export interface HoloModel {
  vertices: HoloVertex[];
  lines: number[][];
}

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
