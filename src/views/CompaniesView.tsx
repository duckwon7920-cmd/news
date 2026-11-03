import React, { useState } from 'react';
import {
  Building2,
  Search,
  Bookmark,
  ExternalLink,
  Sparkles,
  TrendingUp,
  MapPin,
  CheckCircle,
  Plus
} from 'lucide-react';
import { TargetCompany, IndustryCategoryId } from '../types';

interface CompaniesViewProps {
  companies: TargetCompany[];
  onToggleBookmark: (id: string) => void;
  onSelectIndustry: (id: IndustryCategoryId) => void;
}

export const CompaniesView: React.FC<CompaniesViewProps> = ({
  companies,
  onToggleBookmark,
  onSelectIndustry,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);

  const filteredCompanies = companies.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.industryCategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBookmark = showBookmarkedOnly ? c.isBookmarked : true;
    return matchesSearch && matchesBookmark;
  });

  return (
    <div className="space-y-4 px-4 pb-28 pt-2">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Building2 className="w-5 h-5 text-sky-400" />
            <span>관심 기업</span>
          </h2>
          <span className="text-xs font-semibold bg-sky-950 text-sky-300 border border-sky-800 px-2 py-0.5 rounded-full">
            주요 기업 모니터링
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          취업 목표 기업의 채용 현황과 산업 브리핑 연계 뉴스를 확인하세요.
        </p>
      </div>

      {/* Search and Bookmark Filter */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="기업명 검색 (현대차, SK하이닉스...)"
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
          />
        </div>

        <button
          type="button"
          onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
          className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition ${
            showBookmarkedOnly
              ? 'bg-amber-950/40 border-amber-500/50 text-amber-300'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${showBookmarkedOnly ? 'fill-amber-400' : ''}`} />
          <span>관심만</span>
        </button>
      </div>

      {/* Companies List */}
      <div className="space-y-3">
        {filteredCompanies.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs bg-slate-900/40 rounded-2xl border border-slate-800 p-6">
            조건에 맞는 기업이 없습니다.
          </div>
        ) : (
          filteredCompanies.map((comp) => (
            <div
              key={comp.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-sm hover:border-slate-700 transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-200 font-black text-sm">
                    {comp.name.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      {comp.name}
                      <span
                        onClick={() => onSelectIndustry(comp.industryId)}
                        className="text-[10px] font-normal text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-md border border-sky-900 cursor-pointer hover:underline"
                      >
                        {comp.industryCategory}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {comp.headquarters}
                      </span>
                      <span>•</span>
                      <span>뉴스 {comp.recentNewsCount}건</span>
                    </div>
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
                    onClick={() => onToggleBookmark(comp.id)}
                    className="p-1.5 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800 transition"
                    title="북마크 토글"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        comp.isBookmarked ? 'fill-amber-400 text-amber-400' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Key Preparation Points */}
              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                  취준생 핵심 모니터링 토픽
                </span>
                <ul className="text-[11px] text-slate-300 space-y-0.5">
                  {comp.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-sky-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest News Items */}
              <div className="space-y-1 pt-1 border-t border-slate-800/60">
                <span className="text-[10px] text-slate-400 font-medium">최신 뉴스 동향</span>
                {comp.latestNews.map((news, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs py-1 text-slate-300 hover:text-sky-300 cursor-pointer"
                  >
                    <span className="truncate max-w-[250px] text-[11px]">
                      • {news.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0">
                      {news.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
