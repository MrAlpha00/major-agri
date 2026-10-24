import { Wifi, Clock, Camera } from "lucide-react";

export function SystemStatus() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Relay States</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Pump (GPIO18)</span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">OFF</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Farm LED (GPIO19)</span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">OFF</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Buzzer (GPIO21)</span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">OFF</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Spare (GPIO22)</span>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">OFF</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">System Mode</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Operation Mode</span>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-700">Manual (Demo)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-600">Safety</span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">Safe OFF on Reset</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-slate-900">Connectivity</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-2">
            <Wifi className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">ESP32: No data</span>
          </div>
          <div className="flex items-center gap-2">
            <Camera className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">ESP32-CAM: Not configured</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-600">Last seen: Never</span>
          </div>
        </div>
      </div>
    </div>
  );
}
