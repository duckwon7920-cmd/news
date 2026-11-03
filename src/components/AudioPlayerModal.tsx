import React, { useState } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Clock,
  Sparkles,
  Bookmark,
  Share2,
  CheckCircle,
  AlertCircle,
  Volume2
} from 'lucide-react';
import { BriefingItem } from '../types';

interface AudioPlayerModalProps {
  briefing: BriefingItem;
  isPlaying: boolean;
  currentTimeSec: number;
  durationSec: number;
  playbackSpeed: number;
  onClose: () => void;
  onTogglePlay: () => void;
  onSeek: (seconds: number) => void;
  onSkip: (seconds: number) => void;
  onChangeSpeed: (speed: number) => void;
}

export const AudioPlayerModal: React.FC<AudioPlayerModalProps> = ({
  briefing,
  isPlaying,
  currentTimeSec,
  durationSec,
  playbackSpeed,
  onClose,
  onTogglePlay,
  onSeek,
  onSkip,
  onChangeSpeed,
}) => {
  const [activeTab, setActiveTab] = useState<'chapters' | 'highlights' | 'tech-info'>('chapters');
  const [isSaved, setIsSaved] = useState(false);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentChapterIndex = briefing.chapters.findIndex((ch, idx) => {
    let acc = 0;
    for (let i = 0; i < idx; i++) acc += briefing.chapters[i].durationSec;
    return currentTimeSec >= acc && currentTimeSec < acc + ch.durationSec;
  });

  const resolvedChapterIndex = currentChapterIndex >= 0 ? currentChapterIndex : 0;
  const currentChapter = briefing.chapters[resolvedChapterIndex];

  const handleChapterClick = (chapterIndex: number) => {
    let targetTime = 0;
    for (let i = 0; i < chapterIndex; i++) {
      targetTime += briefing.chapters[i].durationSec;
    }
    onSeek(targetTime);
  };

  const speeds = [0.8, 1.0, 1.25, 1.5];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-end sm:justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md mx-auto bg-slate-950 border border-slate-800 rounded-t-3xl sm:rounded-3xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
              {briefing.type === 'morning' ? '출근 30분 오디오' : briefing.type === 'evening' ? '퇴근 30분 오디오' : '산업 오디오'}
            </span>
            <span className="text-xs text-slate-400">{briefing.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full transition ${
                isSaved ? 'text-amber-400 bg-amber-950/40' : 'text-slate-400 hover:text-white'
              }`}
              title="보관함 저장"
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-900 transition"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-5 space-y-5">
          {/* Cover & Title */}
          <div className="text-center space-y-2">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-purple-600 p-0.5 shadow-xl shadow-sky-950">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center text-sky-400">
                <Volume2 className="w-8 h-8" />
                <span className="text-[10px] font-black text-slate-300 mt-1">30 MIN</span>
              </div>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
              {briefing.title}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed px-4">
              {briefing.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
              <span>내레이터: {briefing.narratorName}</span>
              <span>•</span>
              <span className="text-sky-400 font-medium">{briefing.statusBadge}</span>
            </div>
          </div>

          {/* Player Progress Scrubber */}
          <div className="space-y-1.5 pt-2">
            <input
              type="range"
              min={0}
              max={durationSec}
              value={currentTimeSec}
              onChange={(e) => onSeek(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>{formatTime(currentTimeSec)}</span>
              <span>{formatTime(durationSec)}</span>
            </div>
          </div>

          {/* Main Controls */}
          <div className="flex items-center justify-center gap-6 py-1">
            <button
              type="button"
              onClick={() => onSkip(-15)}
              className="flex flex-col items-center text-slate-400 hover:text-white transition"
              title="15초 뒤로"
            >
              <RotateCcw className="w-5 h-5" />
              <span className="text-[10px] mt-0.5 font-mono">15s</span>
            </button>

            <button
              type="button"
              onClick={onTogglePlay}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/40 hover:scale-105 active:scale-95 transition"
              title={isPlaying ? '일시정지' : '재생'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-white" />
              ) : (
                <Play className="w-6 h-6 fill-white ml-1" />
              )}
            </button>

            <button
              type="button"
              onClick={() => onSkip(15)}
              className="flex flex-col items-center text-slate-400 hover:text-white transition"
              title="15초 앞으로"
            >
              <FastForward className="w-5 h-5" />
              <span className="text-[10px] mt-0.5 font-mono">15s</span>
            </button>
          </div>

          {/* Speed & Tags row */}
          <div className="flex items-center justify-between border-t border-b border-slate-900 py-2.5 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 text-[11px]">배속:</span>
              {speeds.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onChangeSpeed(s)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition ${
                    playbackSpeed === s
                      ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 overflow-x-auto">
              {briefing.categoryTags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-slate-900 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tabs: Chapters / Highlights / Architecture transparency */}
          <div className="space-y-3">
            <div className="flex border-b border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('chapters')}
                className={`flex-1 pb-2 font-medium transition relative ${
                  activeTab === 'chapters'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                챕터 구성 ({briefing.chapters.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('highlights')}
                className={`flex-1 pb-2 font-medium transition relative ${
                  activeTab === 'highlights'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                취준생 핵심 포인트
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tech-info')}
                className={`flex-1 pb-2 font-medium transition relative ${
                  activeTab === 'tech-info'
                    ? 'text-amber-400 border-b-2 border-amber-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                음성 엔진 안내
              </button>
            </div>

            {/* Tab: Chapters */}
            {activeTab === 'chapters' && (
              <div className="space-y-2">
                {briefing.chapters.map((chapter, idx) => {
                  const isCurrent = resolvedChapterIndex === idx;
                  return (
                    <div
                      key={chapter.id}
                      onClick={() => handleChapterClick(idx)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition ${
                        isCurrent
                          ? 'bg-sky-950/30 border-sky-500/50 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isCurrent
                                ? 'bg-sky-500 text-slate-950'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {idx + 1}
                          </span>
                          <span
                            className={`font-semibold ${
                              isCurrent ? 'text-sky-300' : 'text-slate-200'
                            }`}
                          >
                            {chapter.title}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {formatTime(chapter.durationSec)}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1.5 ml-7 leading-relaxed">
                        {chapter.summary}
                      </p>
                      {chapter.keyTerm && (
                        <div className="mt-1.5 ml-7 flex items-center gap-1.5">
                          <span className="text-[10px] text-sky-400 bg-sky-950 px-1.5 py-0.2 rounded border border-sky-900">
                            키워드: {chapter.keyTerm}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab: Highlights */}
            {activeTab === 'highlights' && (
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold">
                    <Sparkles className="w-4 h-4" />
                    <span>오늘 출근길 학습 목표</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-300 text-[11px] pl-1">
                    {briefing.highlightNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-sky-400 font-bold">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-900/50 text-xs space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                    면접관 관점 팁
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    단순히 뉴스를 암기하기보다 "왜 이 기술/규제가 지금 화두인가?"와 "내가 지원하는 직무(품질, 생산, R&D)에서 무엇을 준비해야 하는가?"로 연결하여 생각해보세요.
                  </p>
                </div>
              </div>
            )}

            {/* Tab: Tech info (Transparency principle) */}
            {activeTab === 'tech-info' && (
              <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>현재 음성 엔진 & 아키텍처 안내</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  개발 원칙에 따라 <strong>실제 기능이 연결되지 않은 상태를 숨기지 않습니다.</strong>
                </p>
                <div className="text-[11px] text-slate-400 space-y-1 pt-1 border-t border-slate-800">
                  <p>• <strong>현재:</strong> 재생 시 브라우저 내장 Web Speech API로 요약 스크립트를 실제 음성으로 낭독합니다.</p>
                  <p>• <strong>향후 예정:</strong> Google Cloud Text-to-Speech 또는 ElevenLabs 고품질 AI 성우 엔진을 서버 사이드에서 생성하여 무손실 스트리밍을 제공합니다.</p>
                  <p>• <strong>보안:</strong> 음성 API 키는 브라우저에 포함되지 않으며 <code>/server</code> 라우트를 통해서만 요청됩니다.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom footer button */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950 flex items-center justify-between text-xs">
          <span className="text-slate-400 text-[11px]">
            출근 브리핑 2.0 • 오디오 플레이어
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition"
          >
            플레이어 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
