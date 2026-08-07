"use client";

import { useMemo, useState } from "react";
import type { LiveNewsItem } from "../lib/liveNews";

type Props = {
  items: LiveNewsItem[];
  sections: string[];
  sectionCounts: Record<string, number>;
};

function swedishTime(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value || "Tid saknas";
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Europe/Stockholm",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export default function LiveRadarClient({ items, sections, sectionCounts }: Props) {
  const [selected, setSelected] = useState("Alla");

  const visible = useMemo(
    () => selected === "Alla" ? items : items.filter(item => item.section === selected),
    [items, selected]
  );

  return (
    <>
      <nav className="radar-filters" aria-label="Filtrera liveflödet">
        {sections.map(section => (
          <button
            type="button"
            className={selected === section ? "active" : ""}
            key={section}
            onClick={() => setSelected(section)}
            aria-pressed={selected === section}
          >
            {section}<b>{sectionCounts[section] ?? 0}</b>
          </button>
        ))}
      </nav>

      <div className="radar-legend">
        <span><i className="priority-dot priority-high" /> Hög</span>
        <span><i className="priority-dot priority-medium" /> Medel</span>
        <span><i className="priority-dot priority-low" /> Låg</span>
        <em>Automatisk redaktionell prioritet – inte en bedömning av sanningshalt.</em>
      </div>

      {visible.length ? visible.slice(0, 36).map((item, i) => (
        <article className="live-row live-row-s11" key={`${item.link}-${i}`}>
          <time>{swedishTime(item.published)}</time>
          <div>
            <div className="feed-meta"><span>{item.section}</span><span>{item.source}</span></div>
            <h3><a href={item.link} target="_blank" rel="noreferrer">{item.title}</a></h3>
          </div>
          <div className="radar-review">
            <span className={`priority-pill priority-${item.priority === "Hög" ? "high" : item.priority === "Medel" ? "medium" : "low"}`}>
              {item.priority}
            </span>
            <span>Ej verifierad</span>
          </div>
        </article>
      )) : (
        <div className="live-empty">
          <strong>Inga signaler i denna kategori just nu.</strong>
          <p>Byt kategori. NackaSidan fyller aldrig ut flödet med påhittade poster.</p>
        </div>
      )}
    </>
  );
}
