export const stockholmHomepageComposition199 = {
  slots: [
    { id: 'lead', label: 'Toppnyhet', maxItems: 1 },
    { id: 'latest', label: 'Senaste verifierat', maxItems: 5 },
    { id: 'traffic', label: 'Trafikkollen', maxItems: 6 },
    { id: 'districts', label: 'Stadsdelar', maxItems: 8 },
    { id: 'housing', label: 'Bostäder', maxItems: 4 },
    { id: 'business', label: 'Näringsliv', maxItems: 4 },
    { id: 'culture', label: 'Kultur', maxItems: 4 },
    { id: 'safety', label: 'Trygghet', maxItems: 4 }
  ],
  principles: [
    'The lead must be published and verified.',
    'No module should appear current when its underlying data is stale.',
    'Avoid repeating the same story in more than two homepage modules.',
    'Local impact should outrank generic popularity when selecting Stockholm stories.',
    'Empty modules should explain what data is missing rather than fabricate content.'
  ]
};
