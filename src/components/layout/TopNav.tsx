"use client";

import { Menu, Bell } from "lucide-react";

interface TopNavProps {
  onMenuClick: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-md hover:bg-slate-100"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex-1 lg:flex-none">
        <h2 className="text-lg font-semibold text-slate-900 lg:hidden">Smart Agriculture</h2>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-md hover:bg-slate-100">
          <Bell className="h-5 w-5 text-slate-600" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <div className="hidden sm:flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          <span className="text-xs text-slate-700">Offline</span>
        </div>
      </div>
    </header>
  );
}
