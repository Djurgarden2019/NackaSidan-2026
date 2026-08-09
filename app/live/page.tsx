import LiveRadarBrowser from "../../components/LiveRadarBrowser";
import EditorialDesk19 from "../../components/EditorialDesk19";
import SourceVerification20 from "../../components/SourceVerification20";
import SourceHunter21 from "../../components/SourceHunter21";

export default function LivePage() {
  return (
    <main>
      <div className="shell">
        <section className="live-hero live-hero-s11">
          <div className="kicker">Nacka Intelligence · Main 21</div>
          <h1>Nyhetsradarn</h1>
          <p>
            Nyhetsradarn är nu kopplad till Artikelverkstaden. Signaler poängsätts, liknande händelser grupperas och
            redaktionen får en föreslagen vinkel, källkort och arbetsflöde från bevakning till faktakontroll.
            Main 19 prioriterar kandidater och kräver källkontroll innan publicering.
          </p>
        </section>
        <EditorialDesk19 />
        <SourceVerification20 />
        <SourceHunter21 />
        <LiveRadarBrowser />
      </div>
    </main>
  );
}
