import React from 'react';
import { Home, Compass, Archive, Building2, Settings } from 'lucide-react';
import { NavTab } from '../types';

interface BottomNavProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  hasActivePlayer?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onTabChange,
  hasActivePlayer = false,
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode }[] = [
    {
      id: 'home',
      label: '홈',
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: 'explore',
      label: '산업 탐색',
      icon: <Compass className="w-5 h-5" />,
    },
    {
      id: 'library',
      label: '보관함',
      icon: <Archive className="w-5 h-5" />,
    },
    {
      id: 'companies',
      label: '관심 기업',
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      id: 'settings',
      label: '설정',
      icon: <Settings className="w-5 h-5" />,
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 transition-all ${
        hasActivePlayer ? 'pb-1' : 'pb-safe'
      }`}
    >
      <div className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl transition-all relative ${
                isActive
                  ? 'text-sky-400 font-semibold scale-105'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="relative">
                {item.icon}
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
