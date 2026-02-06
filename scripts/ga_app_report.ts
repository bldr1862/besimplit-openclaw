import {BetaAnalyticsDataClient} from '@google-analytics/data';
import * as fs from 'fs';

// Basic usage report for Besimplit platform GA4 property (app)

const PROPERTY_ID = '463617233';

const client = new BetaAnalyticsDataClient();

async function main() {
  // 1) Daily active sessions last 28 days
  const [daily] = await client.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{startDate: '28daysAgo', endDate: 'yesterday'}],
    dimensions: [{name: 'date'}],
    metrics: [{name: 'activeUsers'}, {name: 'sessions'}],
    orderBys: [
      {
        dimension: {
          dimensionName: 'date',
        },
      },
    ],
  });

  // 2) Top screens (unifiedPagePathScreen + screenPageViews)
  const [screens] = await client.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{startDate: '28daysAgo', endDate: 'yesterday'}],
    dimensions: [{name: 'unifiedPagePathScreen'}],
    metrics: [{name: 'screenPageViews'}],
    orderBys: [
      {
        metric: {
          metricName: 'screenPageViews',
        },
        desc: true,
      },
    ],
    limit: 30,
  });

  const lines: string[] = [];

  lines.push('# GA4 App Usage Report - Últimos 28 días');
  lines.push('');
  lines.push(`Propiedad (app): ${PROPERTY_ID}`);
  lines.push('');

  // Resumen diario
  lines.push('## 1. Actividad diaria (usuarios activos y sesiones)');
  lines.push('');
  lines.push('| Fecha | Usuarios activos | Sesiones |');
  lines.push('|-------|------------------|----------|');

  for (const row of daily.rows ?? []) {
    const dateRaw = row.dimensionValues?.[0]?.value ?? '';
    const dateFmt = dateRaw
      ? `${dateRaw.slice(0, 4)}-${dateRaw.slice(4, 6)}-${dateRaw.slice(6, 8)}`
      : '(sin fecha)';
    const users = row.metricValues?.[0]?.value ?? '0';
    const sessions = row.metricValues?.[1]?.value ?? '0';

    lines.push(`| ${dateFmt} | ${users} | ${sessions} |`);
  }

  lines.push('');
  lines.push('## 2. Pantallas / vistas más usadas');
  lines.push('');
  lines.push('| Pantalla / vista (unifiedPagePathScreen) | Vistas (screenPageViews) |');
  lines.push('|-----------------------------------------|---------------------------|');

  for (const row of screens.rows ?? []) {
    const screen = row.dimensionValues?.[0]?.value ?? '(not set)';
    const views = row.metricValues?.[0]?.value ?? '0';

    const safeScreen = screen.replace(/\|/g, '\\|');
    lines.push(`| ${safeScreen} | ${views} |`);
  }

  const outPath = 'analytics/ga_app_report_463617233.md';
  fs.writeFileSync(outPath, lines.join('\n'), 'utf-8');
  console.log(`GA app report written to ${outPath}`);
}

main().catch((err) => {
  console.error('Error running GA4 app report:', err);
  process.exit(1);
});
