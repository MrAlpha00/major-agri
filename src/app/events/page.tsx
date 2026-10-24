import { DemoBadge } from "@/components/ui/DemoBadge";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Events & Alerts</h1>
          <p className="text-sm text-slate-600">Alerts, motion events, irrigation history and command outcomes</p>
        </div>
        <DemoBadge />
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Events and alerts will be implemented in Phase 3.</p>
      </div>
    </div>
  );
}
