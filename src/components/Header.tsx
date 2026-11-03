import React from 'react';
import { Headphones, Sparkles, Bell } from 'lucide-react';

interface HeaderProps {
  onOpenNotifications?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNotifications }) => {
  // 오늘 날짜 계산 (한국어 포맷)
  const today = new Date();
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${days[today.getDay()]}`;

  return (
    <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-lg font-black tracking-tight text-white">
                출근 브리핑 <span className="text-sky-400">2.0</span>
              </h1>
              <span className="text-[10px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 px-1.5 py-0.5 rounded-full">
                취준생 맞춤
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-1 rounded-full">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>출퇴근 30분</span>
          </div>

          <button
            type="button"
            onClick={onOpenNotifications}
            className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition"
            title="알림"
            aria-label="알림"
          >
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
