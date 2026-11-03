import React, { useState } from 'react';
import { Search, Sparkles, Filter, ChevronRight, Layers, ArrowUpDown } from 'lucide-react';
import { IndustryCategory, IndustryCategoryId } from '../types';
import { CategoryIcon } from '../components/CategoryIcon';

interface ExploreViewProps {
  categories: IndustryCategory[];
  onSelectCategory: (id: IndustryCategoryId) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  categories,
  onSelectCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter categories
  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.focusKeywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag = selectedTag ? cat.focusKeywords.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  // Popular keywords for quick filtering
  const popularKeywords = [
    'HBM4',
    'SDV',
    'K-방산 수출',
    '수소환원제철',
    '전고체 배터리',
    '스마트팩토리',
    '품질관리',
    'Scope 3'
  ];

  return (
    <div className="space-y-4 px-4 pb-28 pt-2">
      {/* Title & Description */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">
            산업 탐색
          </h2>
          <span className="text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded-full">
            총 {categories.length}개 핵심 카테고리
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          취업 희망 산업을 선택하고 30분 오디오 브리핑과 직무 체크포인트를 확인하세요.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="산업명, 기술 키워드 (예: HBM, SDV, CBAM, 공정관리)"
          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
          >
            지우기
          </button>
        )}
      </div>

      {/* Popular Keyword Filter Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
        <button
          type="button"
          onClick={() => setSelectedTag(null)}
          className={`px-2.5 py-1 rounded-full whitespace-nowrap transition ${
            selectedTag === null
              ? 'bg-sky-500 text-slate-950 font-bold'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          전체 (15)
        </button>
        {popularKeywords.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`px-2.5 py-1 rounded-full whitespace-nowrap transition ${
              selectedTag === tag
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Category List */}
      <div className="space-y-2.5">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs bg-slate-900/40 rounded-2xl border border-slate-800 p-6">
            검색어와 일치하는 산업 카테고리가 없습니다.
          </div>
        ) : (
          filteredCategories.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 hover:border-sky-500/50 rounded-2xl p-4 cursor-pointer transition shadow-sm hover:shadow-sky-950/20 group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-sky-500/20 text-slate-300 group-hover:text-sky-400 flex items-center justify-center shrink-0 transition">
                    <CategoryIcon name={cat.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition">
                        {cat.name}
                      </h3>
                    </div>
                    <p className="text-[10px] font-medium text-slate-400">
                      {cat.englishName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-sky-400 shrink-0">
                  <span className="text-[11px] font-medium">상세보기</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                </div>
              </div>

              <p className="text-xs text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                {cat.description}
              </p>

              {/* Keywords and Featured Companies */}
              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <div className="flex flex-wrap gap-1">
                  {cat.focusKeywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded-md border border-slate-800"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] text-sky-400 font-medium shrink-0">
                  이슈 {cat.recentIssuesCount}개
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
