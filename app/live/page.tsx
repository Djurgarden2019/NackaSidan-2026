import LiveRadarBrowser from "../../components/LiveRadarBrowser";

export default function LivePage() {
  return (
    <main>
      <div className="shell">
        <section className="live-hero live-hero-s11">
          <div className="kicker">Nacka Intelligence · Sprint 11.3</div>
          <h1>Nyhetsradarn</h1>
          <p>
            LIVE-sidan är nu helt frikopplad från Vercels byggprocess. Den statiska sidan publiceras först;
            därefter försöker webbläsaren hämta de aktuella RSS-signalerna. Ett fel hos en extern källa kan
            därför inte stoppa publiceringen av NackaSidan.
          </p>
        </section>
        <LiveRadarBrowser />
      </div>
    </main>
  );
}
