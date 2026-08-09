import type { FinalControlResult, FinalControlStatus } from './finalControl';

export type EditorialQueueItem = {
  id: string;
  title: string;
  section?: string;
  source?: string;
  finalControl: FinalControlResult;
};

export type EditorialQueueStatus = 'REDO_FOR_REDAKTION' | 'KRAVER_MANUELL_KONTROLL' | 'STOPPAD';

export type EditorialQueueRow = EditorialQueueItem & {
  queueStatus: EditorialQueueStatus;
  priority: number;
  mayPublishAutomatically: false;
};

function queueStatus(status: FinalControlStatus): EditorialQueueStatus {
  if (status === 'GODKAND') return 'REDO_FOR_REDAKTION';
  if (status === 'MANUELL_KONTROLL') return 'KRAVER_MANUELL_KONTROLL';
  return 'STOPPAD';
}

export function buildEditorialQueue(items: EditorialQueueItem[]): EditorialQueueRow[] {
  return items
    .map((item) => ({
      ...item,
      queueStatus: queueStatus(item.finalControl.status),
      priority: item.finalControl.score,
      mayPublishAutomatically: false as const,
    }))
    .sort((a, b) => {
      const rank: Record<EditorialQueueStatus, number> = {
        REDO_FOR_REDAKTION: 0,
        KRAVER_MANUELL_KONTROLL: 1,
        STOPPAD: 2,
      };
      return rank[a.queueStatus] - rank[b.queueStatus] || b.priority - a.priority;
    });
}

export function editorialQueueSummary(rows: EditorialQueueRow[]) {
  return {
    total: rows.length,
    ready: rows.filter((row) => row.queueStatus === 'REDO_FOR_REDAKTION').length,
    manual: rows.filter((row) => row.queueStatus === 'KRAVER_MANUELL_KONTROLL').length,
    stopped: rows.filter((row) => row.queueStatus === 'STOPPAD').length,
    automaticPublishing: false as const,
  };
}
