import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const NoticeBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mx-4 mt-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 overflow-hidden shadow-sm">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-3.5 py-2.5 flex items-center justify-between cursor-pointer hover:bg-slate-800/50 transition"
      >
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-sky-400 shrink-0" />
          <span className="font-semibold text-slate-200">
            버전 2.0 프로토타입 개발 단계 안내
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <span className="text-[11px] text-sky-400 font-medium">
            {isExpanded ? '접기' : '자세히 보기'}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-3.5 pb-3 pt-1 border-t border-slate-800/80 bg-slate-950/40 text-slate-400 space-y-1.5 text-[11px] leading-relaxed">
          <div className="flex items-start gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">개발 원칙 준수:</strong> 화면과 기본 탐색 기능이 우선 구현되었으며, 실제 뉴스 API 및 외부 AI 음성 모델 연동은 다음 단계에서 연결되도록 프런트-서버 아키텍처가 분리 설계되었습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-800/60 font-mono text-[10px]">
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block font-sans">오디오 엔진</span>
              <span className="text-sky-400 font-semibold">Web Speech 미리듣기</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block font-sans">백엔드/Firebase</span>
              <span className="text-amber-400 font-semibold">어댑터 구조화 완료</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
