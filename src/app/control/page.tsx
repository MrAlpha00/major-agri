import { DemoBadge } from "@/components/ui/DemoBadge";

export default function ControlPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Control Panel</h1>
          <p className="text-sm text-slate-600">Pump, LED, buzzer and operating mode controls</p>
        </div>
        <DemoBadge />
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Safe command queue and controls will be implemented in Phase 4.</p>
      </div>
    </div>
  );
}
