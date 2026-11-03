/**
 * 출근 브리핑 2.0 타입 정의
 * 취업 준비생을 위한 30분 맞춤형 산업 오디오 브리핑
 */

export type IndustryCategoryId =
  | 'steel-metal'
  | 'auto-mobility'
  | 'defense-aerospace'
  | 'semiconductor'
  | 'battery-energy'
  | 'smart-factory-ai'
  | 'shipbuilding-marine'
  | 'qa-qc'
  | 'production-process'
  | 'chemical-petro'
  | 'materials-supply-chain'
  | 'policy-economy'
  | 'earnings-investment'
  | 'hiring-trends'
  | 'esg-carbon';

export interface IndustryCategory {
  id: IndustryCategoryId;
  name: string; // 철강·금속, 반도체 등 요구사항 15종
  englishName: string;
  icon: string;
  description: string;
  focusKeywords: string[];
  recentIssuesCount: number;
  featuredCompanies: string[];
  keyIssues: {
    id: string;
    title: string;
    summary: string;
    interviewCheckPoint: string;
  }[];
  briefingSample: {
    title: string;
    duration: string;
    narrator: string;
  };
}

export interface BriefingChapter {
  id: string;
  title: string;
  durationSec: number;
  summary: string;
  keyTerm?: string;
}

export type BriefingType = 'morning' | 'evening' | 'industry_focus';

export interface BriefingItem {
  id: string;
  type: BriefingType;
  title: string;
  subtitle: string;
  targetCommuteMinutes: number; // 약 30분
  date: string;
  scheduledTime: string; // e.g. "07:30 AM" or "18:30 PM"
  narratorName: string;
  categoryTags: string[];
  chapters: BriefingChapter[];
  totalDurationSec: number;
  isAvailable: boolean;
  statusBadge: string; // e.g. "오늘 아침 완성", "저녁 6시 오픈 예정"
  highlightNotes: string[];
}

export interface IndustryNewsItem {
  id: string;
  categoryId: IndustryCategoryId;
  categoryName: string;
  title: string;
  companyName: string;
  publishedAt: string;
  readTime: string;
  summary: string;
  jobSeekerTakeaway: string; // 취준생 면접/서류 작성 시 활용 포인트
  sourceName: string;
  isHot?: boolean;
}

export interface TargetCompany {
  id: string;
  name: string;
  industryCategory: string;
  industryId: IndustryCategoryId;
  headquarters: string;
  hiringStatus: '채용중' | '상반기 공채 예정' | '수시채용' | '모니터링';
  recentNewsCount: number;
  keyPoints: string[];
  isBookmarked: boolean;
  latestNews: {
    title: string;
    date: string;
    topic: string;
  }[];
}

export interface AudioPlayState {
  currentBriefing: BriefingItem | null;
  isPlaying: boolean;
  currentTimeSec: number;
  durationSec: number;
  playbackSpeed: number;
  currentChapterIndex: number;
  isMinimized: boolean;
}

export type NavTab = 'home' | 'explore' | 'library' | 'companies' | 'settings';
