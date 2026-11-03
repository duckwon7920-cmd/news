/**
 * 출근 브리핑 2.0 서버 엔드포인트 아키텍처
 *
 * 개발 원칙 준수:
 * 1. 프런트엔드와 서버 코드의 물리적/논리적 분리
 * 2. 모든 외부 API 호출(Gemini LLM, 외부 TTS, 뉴스 크롤러 등)과 API 키 관리는 서버에서만 수행
 * 3. 이번 단계에서는 프로토타입 상태이며, 엔드포인트 명세 및 모듈 구조를 준비함
 */

export interface BriefingApiResponse<T> {
  success: boolean;
  data: T | null;
  error?: string;
  source: 'database' | 'ai_synthesis' | 'preview_mock';
}

/**
 * 향후 Express 서버 구동 시 마운트될 핵심 라우터 명세
 */
export const SERVER_ROUTES_SPEC = {
  // 1. 브리핑 관리
  GET_MORNING_BRIEFING: '/api/briefings/morning',
  GET_EVENING_BRIEFING: '/api/briefings/evening',
  GET_INDUSTRY_BRIEFING: '/api/briefings/industry/:industryId',

  // 2. 외부 TTS 합성 (서버 전용 비밀 키 사용 - 브라우저 미노출)
  POST_TTS_SYNTHESIZE: '/api/audio/synthesize',

  // 3. 산업 및 기업 뉴스 집계
  GET_INDUSTRY_NEWS: '/api/news/industry/:industryId',
  GET_COMPANY_NEWS: '/api/news/company/:companyId',

  // 4. 시스템 상태 및 헬스체크
  GET_SYSTEM_HEALTH: '/api/system/health',
};

export const SERVER_ARCHITECTURE_METADATA = {
  version: '2.0.0-prototype',
  runtime: 'Node.js / Express (Separated backend layer)',
  security: 'All LLM & TTS API keys remain isolated in server environment variables (.env)',
  databaseReady: 'Firestore schema prepared for user sync & history',
};
