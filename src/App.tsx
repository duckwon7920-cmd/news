/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { NavTab, IndustryCategoryId, BriefingItem, TargetCompany } from './types';
import {
  INDUSTRY_CATEGORIES,
  MORNING_COMMUTE_BRIEFING,
  EVENING_COMMUTE_BRIEFING,
  TODAY_INDUSTRY_NEWS,
  TARGET_COMPANIES,
  RECENT_AUDIO_HISTORY,
} from './data/mockData';
import { ttsService } from './services/ttsService';

import { Header } from './components/Header';
import { NoticeBanner } from './components/NoticeBanner';
import { BottomNav } from './components/BottomNav';
import { AudioMiniBar } from './components/AudioMiniBar';
import { AudioPlayerModal } from './components/AudioPlayerModal';

import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { IndustryDetailView } from './views/IndustryDetailView';
import { LibraryView } from './views/LibraryView';
import { CompaniesView } from './views/CompaniesView';
import { SettingsView } from './views/SettingsView';

export default function App() {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<IndustryCategoryId | null>(null);

  // Data States
  const [targetCompanies, setTargetCompanies] = useState<TargetCompany[]>(TARGET_COMPANIES);

  // Audio Playback States
  const [activeBriefing, setActiveBriefing] = useState<BriefingItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0);
  const [durationSec, setDurationSec] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isFullPlayerOpen, setIsFullPlayerOpen] = useState<boolean>(false);

  // Playback timer ticker reference
  const timerRef = useRef<number | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      ttsService.stop();
    };
  }, []);

  // Timer loop for audio scrubbing simulation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= durationSec && durationSec > 0) {
            setIsPlaying(false);
            ttsService.stop();
            return durationSec;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, durationSec, playbackSpeed]);

  // Handle Play Briefing
  const handlePlayBriefing = (briefing: BriefingItem) => {
    setActiveBriefing(briefing);
    setDurationSec(briefing.totalDurationSec || 1800);
    setCurrentTimeSec(0);
    setIsPlaying(true);
    setIsFullPlayerOpen(true);

    // Speak introductory script preview via Web Speech API
    const speakText = `${briefing.title}. ${briefing.subtitle}. 챕터 1. ${briefing.chapters[0]?.title || ''}. ${briefing.chapters[0]?.summary || ''}`;
    ttsService.speakPreview(speakText, () => {
      // preview speech ended
    });
  };

  const handleTogglePlay = () => {
    if (!activeBriefing) {
      handlePlayBriefing(MORNING_COMMUTE_BRIEFING);
      return;
    }

    if (isPlaying) {
      setIsPlaying(false);
      ttsService.pause();
    } else {
      setIsPlaying(true);
      ttsService.resume();
    }
  };

  const handleSeek = (newTimeSec: number) => {
    const clamped = Math.max(0, Math.min(durationSec, newTimeSec));
    setCurrentTimeSec(clamped);
  };

  const handleSkip = (seconds: number) => {
    setCurrentTimeSec((prev) => Math.max(0, Math.min(durationSec, prev + seconds)));
  };

  const handleChangeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
  };

  // Select Industry Category to View Details
  const handleSelectCategory = (categoryId: IndustryCategoryId) => {
    setSelectedCategoryId(categoryId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back from Category Details
  const handleBackFromCategory = () => {
    setSelectedCategoryId(null);
  };

  // Tab switching
  const handleTabChange = (tab: NavTab) => {
    setSelectedCategoryId(null); // Clear category detail if open
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle company bookmark
  const handleToggleCompanyBookmark = (companyId: string) => {
    setTargetCompanies((prev) =>
      prev.map((c) => (c.id === companyId ? { ...c, isBookmarked: !c.isBookmarked } : c))
    );
  };

  // Selected Category Object
  const selectedCategoryObj = selectedCategoryId
    ? INDUSTRY_CATEGORIES.find((c) => c.id === selectedCategoryId)
    : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Mobile-First Frame container */}
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col min-h-screen bg-slate-950 relative border-x border-slate-900 shadow-2xl">
        {/* Fixed Top Header with Title and Today's Date */}
        <Header
          onOpenNotifications={() => {
            alert('출근 브리핑 알림: 오늘 아침 7시 15분에 반도체 및 모빌리티 브리핑이 업데이트되었습니다.');
          }}
        />

        {/* Development Transparency Banner */}
        <NoticeBanner />

        {/* Dynamic Views */}
        <main className="flex-1 mt-3">
          {selectedCategoryObj ? (
            // Category Detail View
            <IndustryDetailView
              category={selectedCategoryObj}
              onBack={handleBackFromCategory}
              onPlayBriefing={handlePlayBriefing}
            />
          ) : currentTab === 'home' ? (
            // 1. Home View (All 7 required sections)
            <HomeView
              morningBriefing={MORNING_COMMUTE_BRIEFING}
              eveningBriefing={EVENING_COMMUTE_BRIEFING}
              industryCategories={INDUSTRY_CATEGORIES}
              todayNews={TODAY_INDUSTRY_NEWS}
              targetCompanies={targetCompanies}
              recentHistory={RECENT_AUDIO_HISTORY}
              onPlayBriefing={handlePlayBriefing}
              onSelectCategory={handleSelectCategory}
              onNavigateToTab={handleTabChange}
              onToggleCompanyBookmark={handleToggleCompanyBookmark}
            />
          ) : currentTab === 'explore' ? (
            // 2. Explore View (All 15 industry categories)
            <ExploreView
              categories={INDUSTRY_CATEGORIES}
              onSelectCategory={handleSelectCategory}
            />
          ) : currentTab === 'library' ? (
            // 3. Audio Library View
            <LibraryView
              onPlayBriefing={handlePlayBriefing}
              morningBriefing={MORNING_COMMUTE_BRIEFING}
              eveningBriefing={EVENING_COMMUTE_BRIEFING}
            />
          ) : currentTab === 'companies' ? (
            // 4. Target Companies View
            <CompaniesView
              companies={targetCompanies}
              onToggleBookmark={handleToggleCompanyBookmark}
              onSelectIndustry={handleSelectCategory}
            />
          ) : currentTab === 'settings' ? (
            // 5. Settings View
            <SettingsView categories={INDUSTRY_CATEGORIES} />
          ) : null}
        </main>

        {/* Floating Mini Audio Bar (Visible when active briefing is selected) */}
        {activeBriefing && (
          <AudioMiniBar
            briefing={activeBriefing}
            isPlaying={isPlaying}
            currentTimeSec={currentTimeSec}
            durationSec={durationSec}
            onTogglePlay={handleTogglePlay}
            onOpenFullPlayer={() => setIsFullPlayerOpen(true)}
            onSkip={handleSkip}
          />
        )}

        {/* Expanded Fullscreen Audio Briefing Modal */}
        {activeBriefing && isFullPlayerOpen && (
          <AudioPlayerModal
            briefing={activeBriefing}
            isPlaying={isPlaying}
            currentTimeSec={currentTimeSec}
            durationSec={durationSec}
            playbackSpeed={playbackSpeed}
            onClose={() => setIsFullPlayerOpen(false)}
            onTogglePlay={handleTogglePlay}
            onSeek={handleSeek}
            onSkip={handleSkip}
            onChangeSpeed={handleChangeSpeed}
          />
        )}

        {/* Bottom Navigation (5 items: 홈, 산업 탐색, 오디오 보관함, 관심 기업, 설정) */}
        <BottomNav
          currentTab={currentTab}
          onTabChange={handleTabChange}
          hasActivePlayer={!!activeBriefing}
        />
      </div>
    </div>
  );
}
