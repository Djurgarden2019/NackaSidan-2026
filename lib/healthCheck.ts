export type HealthStatus = 'OK' | 'VARNING' | 'KRITISK';

export type HealthSignal = {
  name: string;
  status: HealthStatus;
  value?: number | string;
  message: string;
};

export type HealthSnapshot = {
  checkedAt: string;
  overall: HealthStatus;
  signals: HealthSignal[];
};

export type HealthInput = {
  sourceAvailabilityPct: number;
  matchRatePct: number;
  stoppedRatePct: number;
  publicationErrors: number;
  deployHealthy: boolean;
};

function worstStatus(statuses: HealthStatus[]): HealthStatus {
  if (statuses.includes('KRITISK')) return 'KRITISK';
  if (statuses.includes('VARNING')) return 'VARNING';
  return 'OK';
}

export function runHealthCheck(input: HealthInput, now = new Date()): HealthSnapshot {
  const signals: HealthSignal[] = [];

  signals.push({
    name: 'Källtillgänglighet',
    status: input.sourceAvailabilityPct < 80 ? 'KRITISK' : input.sourceAvailabilityPct < 95 ? 'VARNING' : 'OK',
    value: input.sourceAvailabilityPct,
    message: `${input.sourceAvailabilityPct}% av bevakade källor svarar.`,
  });

  signals.push({
    name: 'Matchningsgrad',
    status: input.matchRatePct < 40 ? 'KRITISK' : input.matchRatePct < 65 ? 'VARNING' : 'OK',
    value: input.matchRatePct,
    message: `${input.matchRatePct}% av kandidaterna matchas till verifierade händelser.`,
  });

  signals.push({
    name: 'Stoppandel',
    status: input.stoppedRatePct > 85 ? 'KRITISK' : input.stoppedRatePct > 70 ? 'VARNING' : 'OK',
    value: input.stoppedRatePct,
    message: `${input.stoppedRatePct}% av kandidaterna stoppas i kontrollkedjan.`,
  });

  signals.push({
    name: 'Publiceringsfel',
    status: input.publicationErrors > 0 ? 'KRITISK' : 'OK',
    value: input.publicationErrors,
    message: input.publicationErrors > 0 ? `${input.publicationErrors} publiceringsfel kräver åtgärd.` : 'Inga publiceringsfel registrerade.',
  });

  signals.push({
    name: 'Deploy',
    status: input.deployHealthy ? 'OK' : 'KRITISK',
    value: input.deployHealthy ? 'Ready' : 'Fel',
    message: input.deployHealthy ? 'Senaste deploy är frisk.' : 'Deploy-status kräver granskning.',
  });

  return {
    checkedAt: now.toISOString(),
    overall: worstStatus(signals.map((signal) => signal.status)),
    signals,
  };
}
