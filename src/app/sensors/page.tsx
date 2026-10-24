import { DemoBadge } from "@/components/ui/DemoBadge";

export default function SensorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Sensors</h1>
          <p className="text-sm text-slate-600">Sensor readings and connection status</p>
        </div>
        <DemoBadge />
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">Sensor cards will be implemented in Phase 3 with demo data until backend is configured.</p>
      </div>
    </div>
  );
}
