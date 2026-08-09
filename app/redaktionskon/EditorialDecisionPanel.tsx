'use client';

import { useEffect, useMemo, useState } from 'react';

type Row = {
  id: string;
  title: string;
  section?: string;
  source?: string;
  queueStatus: string;
  priority: number;
  finalControl: { status: string; reasons: string[] };
};

type Decision = 'GODKANN' | 'MANUELL' | 'AVVISA';
type LogEntry = { rowId: string; decision: Decision; editor: string; at: string };

const STORAGE_KEY = 'nackasidan-editorial-decisions-v1';

function decisionLabel(d: Decision) {
  if (d === 'GODKANN') return 'GODKÄND FÖR PUBLICERINGSFÖRBEREDELSE';
  if (d === 'MANUELL') return 'SKICKAD TILL MANUELL KONTROLL';
  return 'AVVISAD';
}

export default function EditorialDecisionPanel({ rows }: { rows: Row[] }) {
  const [editor, setEditor] = useState('');
  const [log, setLog] = useState<LogEntry[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setLog(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(log)); } catch {}
  }, [log]);

  const latest = useMemo(() => {
    const map = new Map<string, LogEntry>();
    for (const entry of log) map.set(entry.rowId, entry);
    return map;
  }, [log]);

  function decide(rowId: string, decision: Decision) {
    const name = editor.trim();
    if (!name) {
      alert('Skriv redaktörens namn eller signatur först.');
      return;
    }
    setLog(prev => [...prev, { rowId, decision, editor: name, at: new Date().toISOString() }]);
  }

  return (
    <>
      <section style={{ marginTop: 28, padding: '18px 20px', border: '1px solid #c9c2b8', background: '#f6f2e9' }}>
        <label style={{ display: 'block', fontSize: 12, fontWeight: 800, letterSpacing: 1.2, marginBottom: 8 }}>REDAKTÖR / SIGNATUR</label>
        <input value={editor} onChange={e => setEditor(e.target.value)} placeholder="T.ex. SS" style={{ width: 280, maxWidth: '100%', padding: '10px 12px', border: '1px solid #999', background: '#fff' }} />
        <div style={{ marginTop: 9, fontSize: 12, color: '#666' }}>Beslut loggas lokalt i den här webbläsaren med redaktör och tid. Ingen artikel publiceras automatiskt.</div>
      </section>

      <section style={{ marginTop: 42 }}>
        {rows.map((row, i) => {
          const ready = row.queueStatus === 'REDO_FOR_REDAKTION';
          const stopped = row.queueStatus === 'STOPPAD';
          const current = latest.get(row.id);
          return (
            <article key={row.id} style={{ display: 'grid', gridTemplateColumns: '64px minmax(0,1fr) 280px', gap: 22, padding: '28px 0', borderTop: '1px solid #ccc' }}>
              <div style={{ fontFamily: 'Georgia,serif', fontSize: 24, color: '#a61919' }}>{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.2, color: '#777' }}>{row.section} · {row.source}</div>
                <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 27, margin: '7px 0 10px' }}>{row.title}</h2>
                <div style={{ padding: '12px 15px', background: '#f6f2e9', fontSize: 14 }}>
                  {row.finalControl.reasons.map(reason => <div key={reason}>• {reason}</div>)}
                </div>
                {current && (
                  <div style={{ marginTop: 12, padding: '10px 12px', borderLeft: '3px solid #111', background: '#fff' }}>
                    <strong>{decisionLabel(current.decision)}</strong>
                    <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{current.editor} · {new Date(current.at).toLocaleString('sv-SE')}</div>
                  </div>
                )}
              </div>
              <div>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: 38, fontWeight: 700 }}>{row.priority}/100</div>
                <div style={{ display: 'inline-block', marginTop: 7, padding: '7px 10px', border: `1px solid ${ready ? '#27834a' : stopped ? '#a61919' : '#a47b24'}`, fontWeight: 800, fontSize: 12 }}>
                  {ready ? 'REDO FÖR REDAKTION' : stopped ? 'STOPPAD' : 'KRÄVER MANUELL KONTROLL'}
                </div>
                <div style={{ marginTop: 9, fontSize: 12, color: '#666' }}>Slutkontroll: {row.finalControl.status.replaceAll('_', ' ')}</div>
                <div style={{ display: 'grid', gap: 7, marginTop: 16 }}>
                  <button onClick={() => decide(row.id, 'GODKANN')} disabled={!ready} style={{ padding: '9px 10px', fontWeight: 800, border: '1px solid #27834a', background: ready ? '#eef8f0' : '#eee', cursor: ready ? 'pointer' : 'not-allowed' }}>GODKÄNN</button>
                  <button onClick={() => decide(row.id, 'MANUELL')} style={{ padding: '9px 10px', fontWeight: 800, border: '1px solid #a47b24', background: '#fff8e8', cursor: 'pointer' }}>MANUELL KONTROLL</button>
                  <button onClick={() => decide(row.id, 'AVVISA')} style={{ padding: '9px 10px', fontWeight: 800, border: '1px solid #a61919', background: '#fff2f2', cursor: 'pointer' }}>AVVISA</button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
