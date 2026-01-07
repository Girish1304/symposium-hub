import { useCallback, useState } from 'react';

const JARVIS_LINES = [
  "Systems initializing",
  "Power core activated",
  "All systems online, sir",
];

export const useJarvisVoice = () => {
  const [isPreloading] = useState(false);

  // TTS disabled - just return immediately without audio
  const preloadAll = useCallback(async () => {
    // No-op: TTS functionality disabled
    return Promise.resolve();
  }, []);

  const speakLine = useCallback(async (_clickNumber: number): Promise<void> => {
    // No-op: TTS functionality disabled
    return Promise.resolve();
  }, []);

  const getLineForClick = useCallback((clickNumber: number): string => {
    if (clickNumber >= 1 && clickNumber <= 3) {
      return JARVIS_LINES[clickNumber - 1];
    }
    return "";
  }, []);

  return { speakLine, getLineForClick, preloadAll, isPreloading };
};
