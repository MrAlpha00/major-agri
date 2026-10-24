import { Thermometer, Droplets, Gauge, Sun, Activity } from "lucide-react";

const cards = [
  {
    name: "Temperature",
    value: "-- °C",
    icon: Thermometer,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    name: "Humidity",
    value: "-- %",
    icon: Droplets,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Soil Moisture (Raw)",
    value: "--",
    icon: Gauge,
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  {
    name: "Water Level (Raw)",
    value: "--",
    icon: Droplets,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    name: "Light (Raw)",
    value: "--",
    icon: Sun,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    name: "PIR Motion",
    value: "--",
    icon: Activity,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => (
        <div
          key={card.name}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-600">{card.name}</p>
              <p className="mt-2 text-xl font-semibold text-slate-900">{card.value}</p>
            </div>
            <div className={`rounded-lg p-2 ${card.bg}`}>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">No live data</p>
        </div>
      ))}
    </div>
  );
}
