export type FinalControlStatus = 'GODKAND' | 'MANUELL_KONTROLL' | 'UNDERKAND';

export type FinalControlInput = {
  eventScore: number;
  independentSourceFamilies: number;
  sourceIndependenceApproved: boolean;
  hasSharedAgencyMaterial?: boolean;
};

export type FinalControlResult = {
  status: FinalControlStatus;
  score: number;
  reasons: string[];
  mayPublishAutomatically: false;
};

export function runFinalControl(input: FinalControlInput): FinalControlResult {
  const reasons: string[] = [];
  const eventScore = Math.max(0, Math.min(100, input.eventScore));

  if (eventScore < 45) reasons.push('Händelsematchningen är för svag.');
  else if (eventScore < 85) reasons.push('Händelsematchningen kräver redaktionell kontroll.');
  else reasons.push('Händelsematchningen är stark.');

  if (!input.sourceIndependenceApproved || input.independentSourceFamilies < 2) {
    reasons.push('Minst två oberoende källfamiljer har inte verifierats.');
  } else {
    reasons.push('Minst två oberoende källfamiljer är verifierade.');
  }

  if (input.hasSharedAgencyMaterial) {
    reasons.push('Gemensamt byråmaterial har identifierats och räknas inte som oberoende stöd.');
  }

  let status: FinalControlStatus = 'MANUELL_KONTROLL';
  if (eventScore < 45) status = 'UNDERKAND';
  else if (eventScore >= 85 && input.sourceIndependenceApproved && input.independentSourceFamilies >= 2 && !input.hasSharedAgencyMaterial) {
    status = 'GODKAND';
  }

  const independencePoints = input.sourceIndependenceApproved && input.independentSourceFamilies >= 2 ? 15 : 0;
  const score = Math.min(100, Math.round(eventScore * 0.85 + independencePoints));

  return { status, score, reasons, mayPublishAutomatically: false };
}
