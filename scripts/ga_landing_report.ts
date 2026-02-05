import {BetaAnalyticsDataClient} from '@google-analytics/data';
import * as fs from 'fs';

// Simple GA4 landing page report for Besimplit

const PROPERTY_ID = '270760925';

const client = new BetaAnalyticsDataClient();

async function main() {
  const [response] = await client.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [{startDate: '28daysAgo', endDate: 'yesterday'}],
    dimensions: [
      {name: 'landingPagePlusQueryString'},
      {name: 'sessionDefaultChannelGroup'},
    ],
    metrics: [
      {name: 'sessions'},
      {name: 'totalUsers'},
    ],
    limit: 50,
    orderBys: [
      {
        metric: {
          metricName: 'sessions',
        },
        desc: true,
      },
    ],
  });

  const lines: string[] = [];

  lines.push('# GA4 Landing Page Report - Últimos 28 días');
  lines.push('');
  lines.push(`Propiedad: ${PROPERTY_ID}`);
  lines.push('');
  lines.push('| Landing page | Canal | Sesiones | Usuarios |');
  lines.push('|-------------|-------|----------|----------|');

  for (const row of response.rows ?? []) {
    const landing = row.dimensionValues?.[0]?.value ?? '(not set)';
    const channel = row.dimensionValues?.[1]?.value ?? '(not set)';
    const sessions = row.metricValues?.[0]?.value ?? '0';
    const users = row.metricValues?.[1]?.value ?? '0';

    const safeLanding = landing.replace(/\|/g, '\\\|');
    const safeChannel = channel.replace(/\|/g, '\\\|');

    lines.push(`| ${safeLanding} | ${safeChannel} | ${sessions} | ${users} |`);
  }

  const outPath = 'ga_landing_report.md';
  fs.writeFileSync(outPath, lines.join('\n'), 'utf-8');
  console.log(`GA report written to ${outPath}`);
}

main().catch((err) => {
  console.error('Error running GA4 report:', err);
  process.exit(1);
});
