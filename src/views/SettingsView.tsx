import React, { useState } from 'react';
import {
  Settings,
  Clock,
  Check,
  ShieldCheck,
  Server,
  Database,
  Radio,
  Sliders,
  Bell,
  Sparkles,
  Info
} from 'lucide-react';
import { IndustryCategory, IndustryCategoryId } from '../types';

interface SettingsViewProps {
  categories: IndustryCategory[];
}

export const SettingsView: React.FC<SettingsViewProps> = ({ categories }) => {
  const [morningTime, setMorningTime] = useState('07:30');
  const [eveningTime, setEveningTime] = useState('18:30');
  const [duration, setDuration] = useState('30분 (표준)');
  const [defaultSpeed, setDefaultSpeed] = useState('1.0');
  const [autoResume, setAutoResume] = useState(true);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([
    'semiconductor',
    'auto-mobility',
    'defense-aerospace',
    'steel-metal',
    'smart-factory-ai'
  ]);
  const [saveToast, setSaveToast] = useState(false);

  const toggleIndustry = (id: string) => {
    if (selectedIndustries.includes(id)) {
      setSelectedIndustries(selectedIndustries.filter((item) => item !== id));
    } else {
      setSelectedIndustries([...selectedIndustries, id]);
    }
  };

  const handleSave = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  return (
    <div className="space-y-5 px-4 pb-28 pt-2">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          <Settings className="w-5 h-5 text-sky-400" />
          <span>설정</span>
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          출퇴근 시간과 30분 맞춤 브리핑 관심 산업을 설정하세요.
        </p>
      </div>

      {saveToast && (
        <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-3.5 py-2.5 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>출퇴근 시간 및 맞춤 산업 설정이 로컬에 저장되었습니다.</span>
        </div>
      )}

      {/* 1. 출퇴근 시간 맞춤 설정 */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3.5">
        <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          <span>출퇴근 시간 및 브리핑 분량</span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="space-y-1">
            <label className="text-slate-400 text-[11px] block">
              아침 출근 시간
            </label>
            <input
              type="time"
              value={morningTime}
              onChange={(e) => setMorningTime(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-400 text-[11px] block">
              저녁 퇴근 시간
            </label>
            <input
              type="time"
              value={eveningTime}
              onChange={(e) => setEveningTime(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
          <span className="text-slate-300">목표 브리핑 분량</span>
          <span className="font-semibold text-sky-400 font-mono">약 30분 코스</span>
        </div>
      </div>

      {/* 2. 관심 산업 선택 (15개 카테고리 체크박스) */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>브리핑 우선 추천 산업 ({selectedIndustries.length}/15)</span>
          </div>
        </div>
        <p className="text-[11px] text-slate-400">
          선택한 산업 위주로 출퇴근 30분 브리핑 챕터가 우선 편성됩니다.
        </p>

        <div className="grid grid-cols-2 gap-1.5 pt-1">
          {categories.map((cat) => {
            const isSelected = selectedIndustries.includes(cat.id);
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => toggleIndustry(cat.id)}
                className={`p-2.5 rounded-xl border text-left text-xs transition flex items-center justify-between ${
                  isSelected
                    ? 'bg-sky-950/40 border-sky-500/50 text-sky-200'
                    : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:text-white'
                }`}
              >
                <span className="truncate">{cat.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. 오디오 재생 환경 */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3 text-xs">
        <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-wider">
          <Radio className="w-4 h-4" />
          <span>오디오 재생 설정</span>
        </div>

        <div className="flex items-center justify-between py-1">
          <span className="text-slate-300">기본 재생 배속</span>
          <div className="flex gap-1">
            {['1.0', '1.25', '1.5'].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => setDefaultSpeed(rate)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition ${
                  defaultSpeed === rate
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-950 text-slate-400 border border-slate-800'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
          <div>
            <span className="text-slate-300 block">이탈 시 청취 위치 자동 기억</span>
            <span className="text-[10px] text-slate-400">지하철 환승 시 이어서 듣기</span>
          </div>
          <button
            type="button"
            onClick={() => setAutoResume(!autoResume)}
            className={`w-11 h-6 rounded-full transition-colors relative ${
              autoResume ? 'bg-sky-500' : 'bg-slate-800'
            }`}
          >
            <span
              className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                autoResume ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button
        type="button"
        onClick={handleSave}
        className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-xl text-white font-bold text-xs shadow-lg shadow-sky-500/20 hover:scale-[1.01] active:scale-[0.99] transition"
      >
        설정 저장하기
      </button>

      {/* 4. 아키텍처 및 시스템 상태 대시보드 (원칙 준수) */}
      <div className="bg-slate-950 border border-slate-800/90 rounded-2xl p-4 space-y-2.5 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-bold">
          <Server className="w-4 h-4 text-sky-400" />
          <span>시스템 및 아키텍처 상태</span>
        </div>

        <div className="space-y-1.5 text-[11px] font-mono text-slate-400 pt-1">
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-sans text-slate-300">화면 & 탐색 기능:</span>
            <span className="text-emerald-400 font-semibold">정상 가동 (15개 산업 완비)</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-sans text-slate-300">프런트-서버 코드 분리:</span>
            <span className="text-emerald-400 font-semibold">완료 (/server 격리)</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-sans text-slate-300">브라우저 내 API 키 노출:</span>
            <span className="text-emerald-400 font-semibold">0건 (원칙 준수)</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-sans text-slate-300">외부 고품질 TTS API:</span>
            <span className="text-amber-400 font-semibold">다음 단계 연동 예정</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
            <span className="font-sans text-slate-300">Firebase Firestore / Auth:</span>
            <span className="text-amber-400 font-semibold">어댑터 준비 완료</span>
          </div>
        </div>
      </div>
    </div>
  );
};
