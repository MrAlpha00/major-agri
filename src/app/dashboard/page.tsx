import { DemoBadge } from "@/components/ui/DemoBadge";
import { OverviewCards } from "@/components/dashboard/OverviewCards";
import { SystemStatus } from "@/components/dashboard/SystemStatus";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-600">Real-time system status and sensor readings</p>
        </div>
        <DemoBadge />
      </div>
      <OverviewCards />
      <SystemStatus />
    </div>
  );
}
