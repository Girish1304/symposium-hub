import { useCallback, useRef } from 'react';

const JARVIS_LINES = [
  "Systems initializing",
  "Power core activated",
  "Running diagnostics",
  "Arc reactor online",
  "All systems online, sir",
];

export const useJarvisVoice = () => {
  const audioQueueRef = useRef<string[]>([]);
  const isPlayingRef = useRef(false);

  const playAudio = useCallback(async (base64Audio: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      try {
        const audioUrl = `data:audio/mpeg;base64,${base64Audio}`;
        const audio = new Audio(audioUrl);
        audio.onended = () => resolve();
        audio.onerror = () => reject(new Error("Audio playback failed"));
        audio.play().catch(reject);
      } catch (error) {
        reject(error);
      }
    });
  }, []);

  const speakLine = useCallback(async (text: string): Promise<void> => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/jarvis-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text }),
        }
      );

      if (!response.ok) {
        console.error("TTS request failed:", response.status);
        return;
      }

      const data = await response.json();
      if (data.audioContent) {
        await playAudio(data.audioContent);
      }
    } catch (error) {
      console.error("Error speaking line:", error);
    }
  }, [playAudio]);

  const getLineForClick = useCallback((clickNumber: number): string => {
    // clickNumber is 1-5
    if (clickNumber >= 1 && clickNumber <= 5) {
      return JARVIS_LINES[clickNumber - 1];
    }
    return "";
  }, []);

  return { speakLine, getLineForClick };
};
