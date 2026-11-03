import React, { useState } from 'react';
import {
  Archive,
  Play,
  Clock,
  Bookmark,
  CheckCircle,
  Download,
  Filter,
  Sparkles,
  Headphones,
  RotateCcw
} from 'lucide-react';
import { BriefingItem } from '../types';

interface LibraryViewProps {
  onPlayBriefing: (briefing: BriefingItem) => void;
  morningBriefing: BriefingItem;
  eveningBriefing: BriefingItem;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  onPlayBriefing,
  morningBriefing,
  eveningBriefing,
}) => {
  const [filter, setFilter] = useState<'all' | 'saved' | 'completed'>('all');

  // 보관함 아이템 목록
  const libraryItems = [
    {
      id: 'lib-1',
      title: morningBriefing.title,
      type: '출근 브리핑 (아침)',
      date: '2026.11.03 (오늘)',
      duration: '29분 40초',
      isCompleted: false,
      isSaved: true,
      categoryTag: '반도체·모빌리티',
      briefingData: morningBriefing
    },
    {
      id: 'lib-2',
      title: eveningBriefing.title,
      type: '퇴근 브리핑 (저녁)',
      date: '2026.11.03 (오늘)',
      duration: '30분 20초',
      isCompleted: false,
      isSaved: true,
      categoryTag: '방산·배터리',
      briefingData: eveningBriefing
    },
    {
      id: 'lib-3',
      title: '어제 출근 30분 브리핑: 반도체 GAA 공정과 조선 수주',
      type: '출근 브리핑',
      date: '2026.11.02 (어제)',
      duration: '28분 10초',
      isCompleted: true,
      isSaved: true,
      categoryTag: '반도체·조선',
      briefingData: morningBriefing
    },
    {
      id: 'lib-4',
      title: '산업 스페셜: 2026 전고체 배터리와 리사이클링 밸류체인',
      type: '산업 스페셜',
      date: '2026.10.29',
      duration: '22분 15초',
      isCompleted: true,
      isSaved: true,
      categoryTag: '배터리·에너지',
      briefingData: morningBriefing
    }
  ];

  const filteredItems = libraryItems.filter((item) => {
    if (filter === 'saved') return item.isSaved;
    if (filter === 'completed') return item.isCompleted;
    return true;
  });

  return (
    <div className="space-y-4 px-4 pb-28 pt-2">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <Archive className="w-5 h-5 text-sky-400" />
            <span>오디오 보관함</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">
            총 {libraryItems.length}개 보관
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          출퇴근 시 청취한 브리핑과 저장해 둔 핵심 오디오를 다시 들을 수 있습니다.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-slate-800 text-xs">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`flex-1 pb-2 font-medium transition ${
            filter === 'all'
              ? 'text-sky-400 border-b-2 border-sky-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          전체 보기
        </button>
        <button
          type="button"
          onClick={() => setFilter('saved')}
          className={`flex-1 pb-2 font-medium transition ${
            filter === 'saved'
              ? 'text-sky-400 border-b-2 border-sky-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          북마크 보관
        </button>
        <button
          type="button"
          onClick={() => setFilter('completed')}
          className={`flex-1 pb-2 font-medium transition ${
            filter === 'completed'
              ? 'text-sky-400 border-b-2 border-sky-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          완청 완료
        </button>
      </div>

      {/* Audio List */}
      <div className="space-y-2.5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 rounded-xl p-3.5 space-y-2.5 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-900">
                    {item.type}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => onPlayBriefing(item.briefingData)}
                className="w-10 h-10 rounded-xl bg-sky-500/20 hover:bg-sky-500 hover:text-slate-950 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 transition"
                title="재생하기"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>

            <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {item.duration}
                </span>
                <span>•</span>
                <span className="text-slate-300">#{item.categoryTag}</span>
              </div>

              {item.isCompleted ? (
                <span className="flex items-center gap-1 text-emerald-400 font-medium text-[10px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  완청 기록됨
                </span>
              ) : (
                <span className="text-amber-400 text-[10px]">이어듣기 가능</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Offline Storage Notice */}
      <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-xl text-xs text-slate-400 flex items-start gap-2">
        <Download className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-slate-300">오프라인 다운로드 안내</p>
          <p className="text-[11px] mt-0.5 leading-relaxed">
            향후 Firebase Storage 및 PWA 캐시 기능이 연결되면 데이터 요금 없이 지하철 음영 지역에서도 30분 오디오를 바로 재생할 수 있도록 설계되어 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
