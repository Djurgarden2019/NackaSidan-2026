export type IntakeItem = {
  id: string;
  time: string;
  source: string;
  section: string;
  headline: string;
  signal: 'Hög' | 'Medel' | 'Låg';
  state: 'Ny' | 'Verifiera' | 'Fördjupa' | 'Publicerad';
  reason: string;
};

export const intakeQueue: IntakeItem[] = [
  { id: 'q1', time: '08.42', source: 'Primärkälla', section: 'Ekonomi', headline: 'Ny datapunkt att kontrollera mot tidigare trend', signal: 'Hög', state: 'Verifiera', reason: 'Kan påverka dagens ekonomibild.' },
  { id: 'q2', time: '08.18', source: 'Public service', section: 'Sverige', headline: 'Nytt besked med möjlig nationell betydelse', signal: 'Medel', state: 'Fördjupa', reason: 'Behöver bakgrund och konsekvensanalys.' },
  { id: 'q3', time: '07.55', source: 'EU-källa', section: 'AI Insight', headline: 'Regleringsfråga flyttar från princip till genomförande', signal: 'Hög', state: 'Ny', reason: 'Passar NackaSidans AI-bevakning.' },
  { id: 'q4', time: '07.20', source: 'Redaktionen', section: 'Kultur', headline: 'Veckans kulturfråga har fått ett nytt perspektiv', signal: 'Låg', state: 'Ny', reason: 'Möjlig kortnotis eller helgfördjupning.' },
];
