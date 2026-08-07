import LiveRadarBrowser from "../../components/LiveRadarBrowser";

export default function LivePage() {
  return (
    <main>
      <div className="shell">
        <section className="live-hero live-hero-s11">
          <div className="kicker">Nacka Intelligence · Sprint 12</div>
          <h1>Nyhetsradarn</h1>
          <p>
            Nyhetsradarn har fått ett redaktionellt beslutsstöd. Signaler poängsätts, liknande händelser grupperas och
            redaktionen får en föreslagen vinkel, källkort och arbetsflöde från bevakning till faktakontroll.
            Inget publiceras automatiskt.
          </p>
        </section>
        <LiveRadarBrowser />
      </div>
    </main>
  );
}
