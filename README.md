# HR Talent Operations Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIHROperationsCopilot`
- `AIEmployeeEngagement`
- `AIPerformanceReviewAssistant`
- `AIBenefitsGuide`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/hr-talent-operations-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4550`

Seeded users:
- `admin@hr-talent.local / admin123`
- `manager@hr-talent.local / manager123`
- `analyst@hr-talent.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/hr-talent-operations-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4550 npm run smoke
```
