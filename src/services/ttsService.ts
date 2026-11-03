/**
 * TTS (Text-to-Speech) 서비스 레이어
 *
 * 개발 원칙 준수:
 * 1. 이번 단계에서는 실제 외부 AI 음성 API를 연결하지 않음.
 * 2. 브라우저 내장 Web Speech API를 활용해 음성 재생을 시연할 수 있으나,
 *    UI 상에서 '외부 고품질 TTS API 미연동 / 브라우저 데모 음성'임을 투명하게 명시함.
 * 3. 향후 Google Cloud Text-to-Speech 또는 ElevenLabs API 연동을 위한 계약(Interface) 구성.
 */

export interface TTSVoiceConfig {
  provider: 'browser-web-speech' | 'google-cloud-tts' | 'elevenlabs';
  voiceId?: string;
  speed: number;
  pitch: number;
  isReady: boolean;
}

export interface TTSServiceContract {
  speakPreview(text: string, onEnd?: () => void): void;
  stop(): void;
  pause(): void;
  resume(): void;
  getConfig(): TTSVoiceConfig;
}

class TTSService implements TTSServiceContract {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  speakPreview(text: string, onEnd?: () => void): void {
    if (!this.synth) {
      console.warn('SpeechSynthesis is not supported in this browser environment.');
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 1.05; // 듣기 편한 브리핑 속도
    utterance.pitch = 1.0;

    // 한국어 음성 탐색
    const voices = this.synth.getVoices();
    const koreanVoice = voices.find(v => v.lang.includes('ko') || v.lang.includes('KR'));
    if (koreanVoice) {
      utterance.voice = koreanVoice;
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
    this.currentUtterance = null;
  }

  pause(): void {
    if (this.synth && this.synth.speaking) {
      this.synth.pause();
    }
  }

  resume(): void {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  getConfig(): TTSVoiceConfig {
    return {
      provider: 'browser-web-speech',
      speed: 1.0,
      pitch: 1.0,
      isReady: false // 외부 프로덕션 TTS 엔진은 아직 연결되지 않음
    };
  }
}

export const ttsService = new TTSService();
