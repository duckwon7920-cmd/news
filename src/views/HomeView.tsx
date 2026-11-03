import React from 'react';
import {
  Play,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Building2,
  Bookmark,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Headphones
} from 'lucide-react';
import {
  BriefingItem,
  IndustryCategory,
  IndustryCategoryId,
  IndustryNewsItem,
  TargetCompany
} from '../types';
import { CategoryIcon } from '../components/CategoryIcon';

interface HomeViewProps {
  morningBriefing: BriefingItem;
  eveningBriefing: BriefingItem;
  industryCategories: IndustryCategory[];
  todayNews: IndustryNewsItem[];
  targetCompanies: TargetCompany[];
  recentHistory: {
    id: string;
    title: string;
    date: string;
    playedDuration: string;
    progressPercent: number;
    isCompleted: boolean;
    categoryTag: string;
  }[];
  onPlayBriefing: (briefing: BriefingItem) => void;
  onSelectCategory: (categoryId: IndustryCategoryId) => void;
  onNavigateToTab: (tab: 'explore' | 'library' | 'companies' | 'settings') => void;
  onToggleCompanyBookmark: (companyId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  morningBriefing,
  eveningBriefing,
  industryCategories,
  todayNews,
  targetCompanies,
  recentHistory,
  onPlayBriefing,
  onSelectCategory,
  onNavigateToTab,
  onToggleCompanyBookmark,
}) => {
  // Top 6 priority categories for quick access on home screen
  const quickAccessCategories = industryCategories.slice(0, 6);

  return (
    <div className="space-y-6 pb-24">
      {/* 1. 상단 안내 및 출퇴근 타겟팅 헤더 */}
      <section className="px-4 pt-1">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/60 p-4 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-800">
              취준생 맞춤 출퇴근 30분
            </span>
            <span className="text-[11px] text-slate-400 font-mono">목표 30분 청취</span>
          </div>
          <h2 className="text-base font-bold text-white leading-snug">
            출근길 30분으로 완성하는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
              오늘의 주요 산업 동향 브리핑
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            환율·반도체·모빌리티·방산 등 서류와 면접에 바로 쓰는 핵심 이슈를 라디오처럼 편하게 들으세요.
          </p>
        </div>
      </section>

      {/* 2. 출근 브리핑 카드 */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              출근 브리핑 (아침용)
            </h3>
          </div>
          <span className="text-[11px] text-amber-400 font-medium bg-amber-950/50 px-2 py-0.5 rounded-md border border-amber-900/40">
            {morningBriefing.statusBadge}
          </span>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900/30 rounded-2xl border border-sky-500/30 p-4 shadow-lg shadow-sky-950/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-3 relative z-10">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                Morning Briefing • 30 MIN
              </span>
              <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition">
                {morningBriefing.title}
              </h4>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {morningBriefing.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onPlayBriefing(morningBriefing)}
              className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-sky-500/30 hover:scale-105 active:scale-95 transition"
              title="출근 브리핑 재생"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>
          </div>

          {/* Chapters preview chips */}
          <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            {morningBriefing.chapters.map((ch, idx) => (
              <span
                key={ch.id}
                className="text-[11px] bg-slate-950/80 text-slate-300 border border-slate-800 px-2 py-1 rounded-lg flex items-center gap-1"
              >
                <span className="text-sky-400 font-mono text-[10px]">0{idx + 1}</span>
                <span className="truncate max-w-[140px]">{ch.title.split(':')[0]}</span>
              </span>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              약 {Math.round(morningBriefing.totalDurationSec / 60)}분 소요
            </span>
            <button
              type="button"
              onClick={() => onPlayBriefing(morningBriefing)}
              className="text-sky-400 hover:text-sky-300 font-medium flex items-center gap-0.5"
            >
              지금 듣기 <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. 퇴근 브리핑 카드 */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <h3 className="text-sm font-bold text-white tracking-tight">
              퇴근 브리핑 (저녁 결산)
            </h3>
          </div>
          <span className="text-[11px] text-indigo-400 font-medium bg-indigo-950/50 px-2 py-0.5 rounded-md border border-indigo-900/40">
            {eveningBriefing.statusBadge}
          </span>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 rounded-2xl border border-indigo-500/30 p-4 shadow-lg shadow-black/40 relative overflow-hidden group">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                Evening Wrap-up • 30 MIN
              </span>
              <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition">
                {eveningBriefing.title}
              </h4>
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {eveningBriefing.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onPlayBriefing(eveningBriefing)}
              className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 transition"
              title="퇴근 브리핑 재생"
            >
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </button>
          </div>

          <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              {eveningBriefing.categoryTags.slice(0, 3).map((tag) => (
                <span key={tag} className="bg-slate-950 px-2 py-0.5 rounded text-slate-300 border border-slate-800">
                  #{tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onPlayBriefing(eveningBriefing)}
              className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-0.5"
            >
              미리보기 듣기 <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. 오늘의 주요 산업 뉴스 */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>오늘의 주요 산업 뉴스</span>
              <span className="text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 px-1.5 py-0.2 rounded-full">
                실시간 큐레이션
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              취준생 자기소개서 및 면접에 활용할 수 있는 핵심 포인트 수록
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {todayNews.map((news) => (
            <div
              key={news.id}
              onClick={() => onSelectCategory(news.categoryId)}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-3.5 cursor-pointer transition"
            >
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="text-sky-400 font-medium">
                  {news.categoryName} • {news.companyName}
                </span>
                <span className="text-slate-400 font-mono text-[10px]">{news.publishedAt}</span>
              </div>

              <h4 className="text-xs font-bold text-white leading-snug hover:text-sky-300 transition">
                {news.title}
              </h4>

              <p className="text-[11px] text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                {news.summary}
              </p>

              {/* Job seeker takeaway highlight */}
              <div className="mt-2.5 p-2 rounded-lg bg-sky-950/40 border border-sky-800/40 flex items-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-sky-200 leading-snug">
                  <strong>면접 활용 포인트:</strong> {news.jobSeekerTakeaway}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 관심 산업 바로가기 (15개 카테고리 중 빠른 진입 6개 + 전체보기) */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              관심 산업 바로가기
            </h3>
            <p className="text-[11px] text-slate-400">
              15개 핵심 산업 카테고리 심층 분석
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToTab('explore')}
            className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-0.5"
          >
            전체 15개 보기 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {quickAccessCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className="bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-sky-500/50 rounded-xl p-3 flex flex-col items-center text-center transition group"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-sky-500/20 text-slate-300 group-hover:text-sky-400 flex items-center justify-center transition mb-1.5">
                <CategoryIcon name={cat.icon} className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white truncate w-full">
                {cat.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                이슈 {cat.recentIssuesCount}건
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 6. 관심 기업 최신 뉴스 */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              관심 기업 최신 뉴스
            </h3>
            <p className="text-[11px] text-slate-400">
              취준생이 주목하는 주요 제조·IT·모빌리티 대기업
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToTab('companies')}
            className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-0.5"
          >
            기업 관리 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2.5">
          {targetCompanies.slice(0, 3).map((comp) => (
            <div
              key={comp.id}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      {comp.name}
                      <span className="text-[10px] font-normal text-slate-400">
                        {comp.industryCategory}
                      </span>
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      comp.hiringStatus === '채용중'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : comp.hiringStatus === '수시채용'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {comp.hiringStatus}
                  </span>
                  <button
                    type="button"
                    onClick={() => onToggleCompanyBookmark(comp.id)}
                    className="text-slate-400 hover:text-amber-400 transition"
                    title="북마크"
                  >
                    <Bookmark className={`w-4 h-4 ${comp.isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Latest news list */}
              <div className="space-y-1 pt-1 border-t border-slate-800/60">
                {comp.latestNews.map((n, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="truncate max-w-[240px] text-slate-300 hover:text-sky-300 cursor-pointer">
                      • {n.title}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono shrink-0">{n.date}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. 최근 들은 오디오 */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              최근 들은 오디오
            </h3>
            <p className="text-[11px] text-slate-400">
              출퇴근 중 듣던 위치부터 이어듣기 지원
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToTab('library')}
            className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-0.5"
          >
            보관함 전체 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {recentHistory.map((item) => (
            <div
              key={item.id}
              onClick={() => onPlayBriefing(morningBriefing)}
              className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between gap-3 cursor-pointer transition"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Headphones className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-white truncate">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="text-sky-400 font-mono">{item.playedDuration}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="text-[10px] font-mono text-slate-400">
                  {item.progressPercent}%
                </span>
                <div className="w-7 h-7 rounded-full bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
