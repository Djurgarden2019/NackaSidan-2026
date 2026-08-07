"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { liveFeeds, type FeedDefinition } from "../content/liveFeeds";

type Priority = "Hög" | "Medel" | "Låg";
type LiveItem = {
  title: string;
  link: string;
  published: string;
  source: string;
  section: string;
  priority: Priority;
  local: boolean;
};
type FeedStatus = FeedDefinition & {
  status: "Väntar" | "Ansluten" | "Otillgänglig";
  count: number;
};

const sections = ["Alla","Nacka/Lokalt","Sverige","Världen","Ekonomi","Kultur","Vetenskap","Sport"];

const rules: { section: string; words: string[] }[] = [
  { section: "Nacka/Lokalt", words: ["nacka","saltsjöbaden","sickla","älta","boo","fisksätra","orminge","värmdö","stockholm","region stockholm","slussen"] },
  { section: "Ekonomi", words: ["ränta","inflation","krona","kronan","riksbank","ekonomi","konjunktur","börs","bank","bolag","företag","arbetslöshet","bnp"] },
  { section: "Vetenskap", words: ["forskning","forskare","vetenskap","rymd","klimat","studie","universitet","karolinska","kth"," ai ","artificiell intelligens"] },
  { section: "Kultur", words: ["kultur","film","bok","böcker","musik","teater","konst","museum","författare"] },
  { section: "Sport", words: ["sport","fotboll","hockey","allsvenskan","landslaget"," os "," vm "," em ","match","mål"] },
  { section: "Världen", words: ["usa","ukraina","ryssland","iran","israel","gaza","kina"," eu ","nato","trump","världen","utrikes"] },
];

function classify(title: string, fallback: string) {
  const text = ` ${title.toLowerCase()} `;
  for (const rule of rules) if (rule.words.some(word => text.includes(word))) return rule.section;
  if (fallback === "Ekonomi") return "Ekonomi";
  if (fallback === "Stockholm") return "Nacka/Lokalt";
  return "Sverige";
}
function priorityFor(title: string, section: string): Priority {
  const text = title.toLowerCase();
  const urgent = ["just nu","olycka","brand","skjut","explosion","kris","varning","ränta","reporänta","nacka"];
  if (urgent.some(word => text.includes(word))) return "Hög";
  if (section === "Nacka/Lokalt" || section === "Ekonomi" || section === "Världen") return "Medel";
  return "Låg";
}
function swedishTime(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value || "Tid saknas";
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
  }).format(d);
}

async function fetchViaRss2Json(feed: FeedDefinition): Promise<LiveItem[]> {
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
  const response = await fetch(endpoint, { cache: "no-store" });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (data?.status && data.status !== "ok") throw new Error(data.message || "RSS-tjänsten svarade med fel");
  const raw = Array.isArray(data?.items) ? data.items : [];
  return raw.slice(0, 16).map((item: any) => {
    const title = String(item?.title || "").trim();
    const section = classify(title, feed.section);
    return {
      title,
      link: String(item?.link || "").trim(),
      published: String(item?.pubDate || item?.published || ""),
      source: feed.name,
      section,
      priority: priorityFor(title, section),
      local: section === "Nacka/Lokalt"
    };
  }).filter((item: LiveItem) => item.title && item.link);
}

export default function LiveRadarBrowser() {
  const [items, setItems] = useState<LiveItem[]>([]);
  const [feeds, setFeeds] = useState<FeedStatus[]>(liveFeeds.map(feed => ({...feed, status:"Väntar", count:0})));
  const [selected, setSelected] = useState("Alla");
  const [loading, setLoading] = useState(true);
  const [checkedAt, setCheckedAt] = useState<string>("");
  const [refreshNo, setRefreshNo] = useState(0);

  const load = useCallback(async () => {
    setLoading(true);
    const results = await Promise.all(liveFeeds.map(async feed => {
      try {
        const feedItems = await fetchViaRss2Json(feed);
        return { feed, items: feedItems, ok: true as const };
      } catch {
        return { feed, items: [] as LiveItem[], ok: false as const };
      }
    }));

    const merged = results.flatMap(result => result.items);
    const unique = Array.from(new Map(merged.map(item => [item.link || item.title, item])).values())
      .sort((a,b) => (Date.parse(b.published) || 0) - (Date.parse(a.published) || 0));

    setItems(unique);
    setFeeds(results.map(result => ({
      ...result.feed,
      status: result.ok ? "Ansluten" : "Otillgänglig",
      count: result.items.length
    })));
    setCheckedAt(new Date().toISOString());
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
    const timer = window.setInterval(load, 15 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, [load, refreshNo]);

  const visible = useMemo(
    () => selected === "Alla" ? items : items.filter(item => item.section === selected),
    [items, selected]
  );
  const sectionCounts = useMemo(
    () => Object.fromEntries(sections.map(section => [section, section === "Alla" ? items.length : items.filter(i => i.section === section).length])),
    [items]
  );
  const highPriority = items.filter(item => item.priority === "Hög").length;
  const localCount = items.filter(item => item.local).length;
  const connected = feeds.filter(feed => feed.status === "Ansluten").length;

  return (
    <>
      <section className="radar-stats">
        <article><strong>{loading ? "…" : items.length}</strong><span>signaler inne</span></article>
        <article><strong>{loading ? "…" : localCount}</strong><span>lokala signaler</span></article>
        <article><strong>{loading ? "…" : highPriority}</strong><span>hög prioritet</span></article>
        <article><strong>{loading ? "…" : `${connected}/${feeds.length}`}</strong><span>källor anslutna</span></article>
      </section>

      <section className="live-status-grid live-status-grid-s11">
        {feeds.map(feed => (
          <article key={feed.name}>
            <span className={feed.status === "Ansluten" ? "live-dot live-dot-ok" : feed.status === "Väntar" ? "live-dot live-dot-wait" : "live-dot"} />
            <div>
              <strong>{feed.name}</strong>
              <small>{feed.section} · {feed.status} · {feed.count} poster</small>
              {feed.note && <small>{feed.note}</small>}
              <a href={feed.homepage} target="_blank" rel="noreferrer">Originalkälla ↗</a>
            </div>
          </article>
        ))}
      </section>

      <section className="live-stream">
        <div className="section-heading section-heading-stack">
          <div>
            <div className="kicker">Live utan build-risk</div>
            <h2>Senaste signalerna</h2>
          </div>
          <div className="live-refresh-box">
            <p>
              {checkedAt ? `Senast kontrollerat ${swedishTime(checkedAt)}.` : "Kontrollerar källorna efter att sidan öppnats."}
              {" "}Ny kontroll görs automatiskt var 15:e minut medan sidan är öppen.
            </p>
            <button type="button" className="live-refresh-button" onClick={() => setRefreshNo(v => v + 1)} disabled={loading}>
              {loading ? "Hämtar…" : "Uppdatera nu"}
            </button>
          </div>
        </div>

        <nav className="radar-filters" aria-label="Filtrera liveflödet">
          {sections.map(section => (
            <button type="button" className={selected === section ? "active" : ""} key={section}
              onClick={() => setSelected(section)} aria-pressed={selected === section}>
              {section}<b>{sectionCounts[section] ?? 0}</b>
            </button>
          ))}
        </nav>

        <div className="radar-legend">
          <span><i className="priority-dot priority-high" /> Hög</span>
          <span><i className="priority-dot priority-medium" /> Medel</span>
          <span><i className="priority-dot priority-low" /> Låg</span>
          <em>Prioritet är automatisk sortering – inte en bedömning av sanningshalt.</em>
        </div>

        {loading && !items.length ? (
          <div className="live-empty"><strong>Hämtar aktuella signaler…</strong><p>Vercel-bygget påverkas inte av detta steg.</p></div>
        ) : visible.length ? visible.slice(0, 36).map((item, i) => (
          <article className="live-row live-row-s11" key={`${item.link}-${i}`}>
            <time>{swedishTime(item.published)}</time>
            <div>
              <div className="feed-meta"><span>{item.section}</span><span>{item.source}</span></div>
              <h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
            </div>
            <div className="radar-review">
              <span className={`priority-pill priority-${item.priority === "Hög" ? "high" : item.priority === "Medel" ? "medium" : "low"}`}>{item.priority}</span>
              <span>Ej verifierad</span>
            </div>
          </article>
        )) : (
          <div className="live-empty">
            <strong>{items.length ? "Inga signaler i denna kategori just nu." : "Livekällorna kunde inte hämtas just nu."}</strong>
            <p>
              Själva NackaSidan fungerar ändå. Använd länkarna till originalkällorna ovan eller försök med “Uppdatera nu”.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
