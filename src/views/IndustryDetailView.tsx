import React, { useState } from 'react';
import {
  ArrowLeft,
  Play,
  Sparkles,
  Building2,
  Bookmark,
  Share2,
  CheckCircle2,
  Clock,
  Volume2,
  AlertCircle
} from 'lucide-react';
import { IndustryCategory, BriefingItem } from '../types';
import { CategoryIcon } from '../components/CategoryIcon';

interface IndustryDetailViewProps {
  category: IndustryCategory;
  onBack: () => void;
  onPlayBriefing: (briefing: BriefingItem) => void;
}

export const IndustryDetailView: React.FC<IndustryDetailViewProps> = ({
  category,
  onBack,
  onPlayBriefing,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // 산업별 맞춤 브리핑 아이템 동적 생성
  const industryBriefing: BriefingItem = {
    id: `briefing-industry-${category.id}`,
    type: 'industry_focus',
    title: `${category.name} 심층 30분 브리핑`,
    subtitle: `${category.englishName} 최신 동향 및 핵심 기술 트렌드 완벽 분석`,
    targetCommuteMinutes: 30,
    date: '2026년 11월 3일',
    scheduledTime: '수시 업데이트',
    narratorName: `${category.name} 전문 산업 큐레이터`,
    categoryTags: [category.name, ...category.focusKeywords.slice(0, 2)],
    totalDurationSec: 1800, // 30분
    isAvailable: true,
    statusBadge: '산업 심층 30분',
    highlightNotes: [
      `${category.name} 직무 면접에서 가장 빈출되는 3대 핵심 이슈 집중 분석`,
      `주요 대기업(${category.featuredCompanies.join(', ')}) 최신 투자 방향 및 공정 혁신`,
      '지원서류 및 직무 포트폴리오에 인용 가능한 데이터 수치 해설'
    ],
    chapters: [
      {
        id: `${category.id}-ch-1`,
        title: `${category.name} 산업 생태계 및 거시 환경 개관`,
        durationSec: 360,
        summary: '글로벌 공급망과 정책 규제가 해당 산업 전방 시장에 미치는 영향',
        keyTerm: category.focusKeywords[0] || '시장 트렌드'
      },
      ...category.keyIssues.map((issue, idx) => ({
        id: `${category.id}-ch-${idx + 2}`,
        title: issue.title,
        durationSec: 540,
        summary: issue.summary,
        keyTerm: issue.interviewCheckPoint.split(' ')[0] || '핵심 과제'
      })),
      {
        id: `${category.id}-ch-final`,
        title: '취준생 1분 면접 답변 템플릿 & 실전 가이드',
        durationSec: 360,
        summary: '면접관 질문에 대한 차별화된 직무 역량 어필 문장 정리',
        keyTerm: '합격 템플릿'
      }
    ]
  };

  return (
    <div className="space-y-5 px-4 pb-28 pt-2 animate-in fade-in duration-150">
      {/* Top navigation row */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>전체 산업 목록으로 돌아가기</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-1.5 rounded-lg border transition ${
              isBookmarked
                ? 'bg-amber-950/40 border-amber-500/50 text-amber-400'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title="관심 산업 저장"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Hero Category Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/50 rounded-2xl border border-sky-500/30 p-4 space-y-3 shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0">
              <CategoryIcon name={category.icon} className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400">
                {category.englishName}
              </span>
              <h2 className="text-xl font-black text-white tracking-tight">
                {category.name}
              </h2>
            </div>
          </div>

          <span className="text-xs font-semibold bg-sky-950 text-sky-300 border border-sky-800 px-2 py-0.5 rounded-full">
            이슈 {category.recentIssuesCount}건 분석
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          {category.description}
        </p>

        {/* Focus Keywords */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {category.focusKeywords.map((kw) => (
            <span
              key={kw}
              className="text-[11px] bg-slate-950 text-sky-300 border border-slate-800 px-2.5 py-0.5 rounded-full font-medium"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* 30-min Audio Listen Action Card */}
        <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-300">
              맞춤 오디오: <strong>약 30분 코스</strong>
            </span>
          </div>

          <button
            type="button"
            onClick={() => onPlayBriefing(industryBriefing)}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-sky-500/20 hover:scale-105 active:scale-95 transition"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>이 산업 30분 오디오 듣기</span>
          </button>
        </div>
      </div>

      {/* Section: Key Industry Issues & Job Seeker Checkpoints */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
            <span>핵심 이슈 & 면접 체크포인트</span>
            <span className="text-[10px] bg-sky-500/20 text-sky-400 px-1.5 py-0.2 rounded-full border border-sky-500/30">
              필독
            </span>
          </h3>
        </div>

        <div className="space-y-3">
          {category.keyIssues.map((issue, idx) => (
            <div
              key={issue.id}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-2.5"
            >
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-white leading-snug">
                  {issue.title}
                </h4>
              </div>

              <p className="text-xs text-slate-300 pl-7 leading-relaxed">
                {issue.summary}
              </p>

              {/* Job Seeker Interview Checkpoint Box */}
              <div className="ml-7 p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/50 space-y-1">
                <div className="flex items-center gap-1.5 text-sky-400 text-[11px] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>취준생 면접 대비 질문 & 전략</span>
                </div>
                <p className="text-[11px] text-sky-100 leading-relaxed">
                  {issue.interviewCheckPoint}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Featured Major Companies */}
      <div className="space-y-2.5">
        <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
          <Building2 className="w-4 h-4 text-slate-400" />
          <span>대표 기업 밸류체인</span>
        </h3>

        <div className="grid grid-cols-2 gap-2">
          {category.featuredCompanies.map((companyName) => (
            <div
              key={companyName}
              className="bg-slate-900 border border-slate-800 rounded-xl p-3 flex items-center justify-between"
            >
              <span className="text-xs font-bold text-white">
                {companyName}
              </span>
              <span className="text-[10px] text-sky-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                관심 등록 가능
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transparent Technical Notice */}
      <div className="p-3 bg-slate-900/40 border border-slate-800/80 rounded-xl text-[11px] text-slate-400 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
        <p>
          산업별 데이터와 브리핑은 <strong>화면과 기본 탐색 프로토타입 단계</strong>로 구성되어 있습니다. 다음 단계에서 실제 공공 데이터 및 금융·산업 뉴스 RSS 파이프라인이 서버 레이어에 연동됩니다.
        </p>
      </div>
    </div>
  );
};
