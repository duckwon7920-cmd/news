import { BriefingItem, IndustryCategory, IndustryCategoryId, IndustryNewsItem } from '../types';
import {
  INDUSTRY_CATEGORIES,
  MORNING_COMMUTE_BRIEFING,
  EVENING_COMMUTE_BRIEFING,
  TODAY_INDUSTRY_NEWS
} from '../data/mockData';

/**
 * 브리핑 서비스 인터페이스
 * 현재 단계: 정적 데이터 및 프로토타입 상태 제공
 * 향후 단계: 서버(/api/briefings/*) 및 Firebase Firestore 연동 구조
 */
export interface BriefingServiceContract {
  getMorningBriefing(): Promise<BriefingItem>;
  getEveningBriefing(): Promise<BriefingItem>;
  getIndustryCategories(): Promise<IndustryCategory[]>;
  getIndustryCategoryById(id: IndustryCategoryId): Promise<IndustryCategory | undefined>;
  getTodayNews(): Promise<IndustryNewsItem[]>;
  getServiceStatus(): {
    apiConnected: boolean;
    backendUrl: string | null;
    ttsEngine: 'web-speech-preview' | 'external-tts-api';
    notice: string;
  };
}

class BriefingService implements BriefingServiceContract {
  async getMorningBriefing(): Promise<BriefingItem> {
    // 실제 서버 연동 시: return fetch('/api/briefings/morning').then(res => res.json());
    return Promise.resolve(MORNING_COMMUTE_BRIEFING);
  }

  async getEveningBriefing(): Promise<BriefingItem> {
    // 실제 서버 연동 시: return fetch('/api/briefings/evening').then(res => res.json());
    return Promise.resolve(EVENING_COMMUTE_BRIEFING);
  }

  async getIndustryCategories(): Promise<IndustryCategory[]> {
    return Promise.resolve(INDUSTRY_CATEGORIES);
  }

  async getIndustryCategoryById(id: IndustryCategoryId): Promise<IndustryCategory | undefined> {
    return Promise.resolve(INDUSTRY_CATEGORIES.find(c => c.id === id));
  }

  async getTodayNews(): Promise<IndustryNewsItem[]> {
    return Promise.resolve(TODAY_INDUSTRY_NEWS);
  }

  getServiceStatus() {
    return {
      apiConnected: false,
      backendUrl: null,
      ttsEngine: 'web-speech-preview' as const,
      notice: '현재 화면 및 탐색 기능 프로토타입 단계입니다. 실제 뉴스 API 및 외부 TTS 연결 전 상태입니다.'
    };
  }
}

export const briefingService = new BriefingService();
