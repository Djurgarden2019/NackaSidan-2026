import LiveRadarBrowser from "../../components/LiveRadarBrowser";
import EditorialDesk19 from "../../components/EditorialDesk19";
import SourceVerification20 from "../../components/SourceVerification20";
import SourceHunter21 from "../../components/SourceHunter21";
import LiveQuickNav101 from "../../components/LiveQuickNav101";
import LiveSectionStatus102 from "../../components/LiveSectionStatus102";
import LiveScrollProgress103 from "../../components/LiveScrollProgress103";
import LiveBackToTop104 from "../../components/LiveBackToTop104";
import LiveKeyboardShortcuts105 from "../../components/LiveKeyboardShortcuts105";
import LiveResume106 from "../../components/LiveResume106";

export default function LivePage() {
  return (
    <main>
      <LiveScrollProgress103 />
      <LiveBackToTop104 />
      <LiveKeyboardShortcuts105 />
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
        <LiveQuickNav101 />
        <LiveSectionStatus102 />
        <LiveResume106 />
        <div id="redaktionsbordet" style={{scrollMarginTop:'24px'}}><EditorialDesk19 /></div>
        <div id="kallkontroll" style={{scrollMarginTop:'24px'}}><SourceVerification20 /></div>
        <div id="kalljakt" style={{scrollMarginTop:'24px'}}><SourceHunter21 /></div>
        <div id="liveflodet" style={{scrollMarginTop:'24px'}}><LiveRadarBrowser /></div>
      </div>
    </main>
  );
}
