import { AlertCircle } from "lucide-react";

export function DemoBadge() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
      <AlertCircle className="h-3.5 w-3.5" />
      Demo Mode
    </div>
  );
}
