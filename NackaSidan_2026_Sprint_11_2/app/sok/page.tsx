import { SearchExperience } from '../../components/Interactive';
import { articles } from '../../content/articles';

export const metadata = { title: 'Sök | NackaSidan' };

export default function SearchPage() {
  return <main><div className="shell"><section className="page-hero search-hero"><div className="kicker">Sök & upptäck</div><h1>Hitta sammanhanget</h1><p>Sök i artiklar, analyser, ämnen och taggar.</p></section><SearchExperience articles={articles} /></div></main>;
}
