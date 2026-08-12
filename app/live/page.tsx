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
import LiveCopySection107 from "../../components/LiveCopySection107";
import LiveStickyNav108 from "../../components/LiveStickyNav108";
import LiveWorkChecklist109 from "../../components/LiveWorkChecklist109";
import LiveSessionNotes110 from "../../components/LiveSessionNotes110";
import LiveFocusMode111 from "../../components/LiveFocusMode111";
import LiveCompactMode112 from "../../components/LiveCompactMode112";
import LiveSessionSummary113 from "../../components/LiveSessionSummary113";
import LiveSessionExport114 from "../../components/LiveSessionExport114";
import LiveSessionReset115 from "../../components/LiveSessionReset115";
import LiveSessionTimer116 from "../../components/LiveSessionTimer116";

export default function LivePage() {
  return (
    <main>
      <LiveScrollProgress103 />
      <LiveBackToTop104 />
      <LiveKeyboardShortcuts105 />
      <div className="live-focus-secondary"><LiveStickyNav108 /></div>
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
        <LiveFocusMode111 />
        <LiveCompactMode112 />
        <LiveSessionSummary113 />
        <LiveSessionExport114 />
        <LiveSessionTimer116 />
        <LiveSessionReset115 />
        <div className="live-focus-secondary">
          <LiveQuickNav101 />
          <LiveSectionStatus102 />
          <LiveResume106 />
          <LiveCopySection107 />
          <LiveWorkChecklist109 />
          <LiveSessionNotes110 />
        </div>
        <div className="live-focus-main">
          <div id="redaktionsbordet" style={{scrollMarginTop:'56px'}}><EditorialDesk19 /></div>
          <div id="kallkontroll" style={{scrollMarginTop:'56px'}}><SourceVerification20 /></div>
          <div id="kalljakt" style={{scrollMarginTop:'56px'}}><SourceHunter21 /></div>
          <div id="liveflodet" style={{scrollMarginTop:'56px'}}><LiveRadarBrowser /></div>
        </div>
      </div>
    </main>
  );
}
