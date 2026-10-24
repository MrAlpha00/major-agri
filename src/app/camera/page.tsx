import { DemoBadge } from "@/components/ui/DemoBadge";

export default function CameraPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Camera</h1>
          <p className="text-sm text-slate-600">Live stream, snapshots and connection status</p>
        </div>
        <DemoBadge />
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-600">ESP32-CAM integration will be implemented in Phase 5. Configure CAMERA_STREAM_URL in .env.</p>
      </div>
    </div>
  );
}
