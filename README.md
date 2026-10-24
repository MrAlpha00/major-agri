# Smart Agriculture IoT Dashboard

Professional Smart Agriculture Monitoring and Automation Dashboard for ESP32 DevKit V1, sensors, HW-316 relay module, Telegram bot, and ESP32-CAM.

## Phase 1 Complete (Dashboard Shell)

This is the initial scaffolding phase. Current state:
- Next.js 15 App Router with TypeScript, Tailwind CSS
- Responsive sidebar/top navigation for all routes
- Dashboard overview with placeholder cards (demo mode until backend configured)
- All required routes created: `/dashboard`, `/sensors`, `/analytics`, `/control`, `/camera`, `/events`, `/settings`
- Demo badges shown where live hardware data is not available
- GPIO assignments documented in brief (not changed)

## Hardware (Fixed)
- ESP32 DevKit V1: Soil(GPIO34), DHT11(GPIO27), Water(GPIO35), LDR(GPIO32), PIR(GPIO26), Relays IN1-4(GPIO18,19,21,22)
- Relays active-low (to be verified), all outputs start OFF
- ESP32-CAM separate device

## Environment
Copy `.env.example` to `.env.local` and fill values as needed. Never commit secrets.

## Development
```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Next Steps
- Phase 2: Database schema migrations, API contracts, typed models
- Phase 3: Sensor cards/charts/alerts with demo data
- Phase 4: Safe command queue + ESP32 integration
- Phase 5: ESP32-CAM viewer/snapshots
- Phase 6: Telegram, auth, tests, deployment docs
