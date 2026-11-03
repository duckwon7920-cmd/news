/**
 * Firebase 연동 대비 구조화 레이어
 *
 * 개발 원칙 준수:
 * 1. 이번 단계에서는 실제 Firebase를 호출하지 않으며, API 키를 브라우저에 하드코딩하지 않습니다.
 * 2. 향후 Firestore DB(오디오 보관함, 관심 기업, 청취 기록, 사용자 설정) 및 Firebase Auth 연동 시
 *    필요한 데이터 모델 인터페이스 및 확장 슬롯을 정의합니다.
 */

export interface FirebaseConfigStatus {
  isConfigured: boolean;
  authEnabled: boolean;
  firestoreEnabled: boolean;
  currentUserId: string | null;
  message: string;
}

export interface UserPreferencesSchema {
  userId: string;
  morningCommuteTime: string; // e.g. "07:30"
  eveningCommuteTime: string; // e.g. "18:30"
  targetDurationMinutes: number; // 기본 30분
  selectedIndustries: string[];
  playbackSpeed: number;
  autoDownloadOffline: boolean;
}

export interface UserListeningRecord {
  briefingId: string;
  playedSeconds: number;
  totalDurationSeconds: number;
  completed: boolean;
  lastListenedAt: string;
}

class FirebaseService {
  /**
   * Firebase 설정 상태 검사
   * 실제 백엔드 연동 전까지 안전한 상태 플래그를 반환합니다.
   */
  getStatus(): FirebaseConfigStatus {
    return {
      isConfigured: false,
      authEnabled: false,
      firestoreEnabled: false,
      currentUserId: 'local_guest_user',
      message: 'Firebase 연동 준비 단계 (추후 백엔드 설정 시 자동 활성화)'
    };
  }

  /**
   * 관심 기업 북마크 동기화 (향후 Firestore doc update)
   */
  async syncBookmark(companyId: string, isBookmarked: boolean): Promise<boolean> {
    console.info(`[Firebase Adapter] Bookmark state queued for company ${companyId}: ${isBookmarked}`);
    return Promise.resolve(true);
  }

  /**
   * 청취 기록 저장 (향후 Firestore listening_history collection)
   */
  async saveListeningProgress(record: UserListeningRecord): Promise<boolean> {
    console.info(`[Firebase Adapter] Progress saved for briefing ${record.briefingId}: ${record.playedSeconds}s`);
    return Promise.resolve(true);
  }
}

export const firebaseService = new FirebaseService();
