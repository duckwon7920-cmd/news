import React from 'react';
import { Play, Pause, ChevronUp, FastForward, RotateCcw, Volume2 } from 'lucide-react';
import { BriefingItem } from '../types';

interface AudioMiniBarProps {
  briefing: BriefingItem;
  isPlaying: boolean;
  currentTimeSec: number;
  durationSec: number;
  onTogglePlay: () => void;
  onOpenFullPlayer: () => void;
  onSkip: (seconds: number) => void;
}

export const AudioMiniBar: React.FC<AudioMiniBarProps> = ({
  briefing,
  isPlaying,
  currentTimeSec,
  durationSec,
  onTogglePlay,
  onOpenFullPlayer,
  onSkip,
}) => {
  const progressPercent = durationSec > 0 ? Math.min(100, (currentTimeSec / durationSec) * 100) : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentChapter = briefing.chapters.find((ch, idx) => {
    let acc = 0;
    for (let i = 0; i < idx; i++) acc += briefing.chapters[i].durationSec;
    return currentTimeSec >= acc && currentTimeSec < acc + ch.durationSec;
  }) || briefing.chapters[0];

  return (
    <div className="fixed bottom-[58px] left-0 right-0 z-30 px-3 pb-1.5">
      <div className="max-w-md mx-auto bg-slate-900/95 backdrop-blur-xl border border-sky-500/30 rounded-2xl p-2.5 shadow-xl shadow-black/60">
        {/* Progress bar */}
        <div className="w-full bg-slate-800 h-1 rounded-full mb-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          {/* Information (Click to open full player) */}
          <div
            onClick={onOpenFullPlayer}
            className="flex-1 min-w-0 cursor-pointer flex items-center gap-2.5"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-600/30 border border-sky-500/40 flex items-center justify-center shrink-0 text-sky-400">
              <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse text-sky-300' : ''}`} />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-1.5 py-0.2 rounded border border-sky-800">
                  {briefing.type === 'morning' ? '출근 30분' : briefing.type === 'evening' ? '퇴근 30분' : '산업 브리핑'}
                </span>
                <span className="text-[11px] text-slate-400">
                  {formatTime(currentTimeSec)} / {formatTime(durationSec)}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white truncate mt-0.5">
                {currentChapter ? currentChapter.title : briefing.title}
              </h4>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => onSkip(-15)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              title="15초 뒤로"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onTogglePlay}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30 hover:scale-105 active:scale-95 transition"
              title={isPlaying ? '일시정지' : '재생'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
            </button>

            <button
              type="button"
              onClick={() => onSkip(15)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              title="15초 앞으로"
            >
              <FastForward className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenFullPlayer}
              className="p-1.5 text-slate-400 hover:text-sky-400 rounded-lg hover:bg-slate-800 transition"
              title="플레이어 확대"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
