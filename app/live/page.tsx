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
import LiveSessionSnapshots117 from "../../components/LiveSessionSnapshots117";
import LiveSessionTransfer122 from "../../components/LiveSessionTransfer122";
import LiveSessionGoal125 from "../../components/LiveSessionGoal125";
import LiveFocusSummary127 from "../../components/LiveFocusSummary127";
import LiveNextStep128 from "../../components/LiveNextStep128";
import LiveSessionLog130 from "../../components/LiveSessionLog130";
import LiveSessionReadiness133 from "../../components/LiveSessionReadiness133";
import LiveSessionCloseout135 from "../../components/LiveSessionCloseout135";
import LiveReleaseReadiness136 from "../../components/LiveReleaseReadiness136";
import LiveSessionHealth137 from "../../components/LiveSessionHealth137";
import LivePublishGate138 from "../../components/LivePublishGate138";
import LiveReleaseNotes139 from "../../components/LiveReleaseNotes139";
import LiveFinalQa146 from "../../components/LiveFinalQa146";

export const metadata = {
  title: "Nyhetsradarn | NackaSidan 2026",
  description: "Redaktionell nyhetsradar för bevakning, prioritering, källkontroll och publiceringsförberedelse på NackaSidan 2026.",
};

export default function LivePage() {
  return (
    <main data-release="1.0">
      <style>{`.live-skip-link{position:absolute;left:-9999px;top:8px;z-index:60;background:#171717;color:#fff;padding:6px 8px;font-size:.68rem;font-weight:800;text-decoration:none}.live-skip-link:focus{left:8px}.live-release-tools{margin:0 0 18px;border:1px solid #d8d2c6;background:#f7f3eb}.live-release-tools>summary{cursor:pointer;padding:10px 12px;font-size:.72rem;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.live-release-tools-inner{padding:0 10px 2px}`}</style>
      <a href="#live-main" className="live-skip-link">Hoppa till redaktionellt innehåll</a>
      <LiveScrollProgress103 />
      <LiveBackToTop104 />
      <LiveKeyboardShortcuts105 />
      <div className="live-focus-secondary"><LiveStickyNav108 /></div>
      <div className="shell">
        <section className="live-hero live-hero-s11">
          <div className="kicker">Nacka Intelligence · Version 1.0</div>
          <h1>Nyhetsradarn</h1>
          <p>
            Nyhetsradarn samlar bevakning, prioritering, källkontroll och redaktionellt arbetsflöde på en plats.
            Signaler poängsätts och grupperas, medan sessionsverktygen hjälper redaktionen att dokumentera mål,
            nästa steg, beslut och slutkontroll inför publicering.
          </p>
        </section>
        <LiveFocusMode111 />
        <LiveCompactMode112 />
        <LiveSessionGoal125 />
        <LiveNextStep128 />
        <details className="live-release-tools" open>
          <summary>Releaseverktyg · v1.0</summary>
          <div className="live-release-tools-inner">
            <LiveSessionReadiness133 />
            <LiveReleaseReadiness136 />
            <LiveSessionHealth137 />
            <LivePublishGate138 />
            <LiveReleaseNotes139 />
            <LiveFinalQa146 />
          </div>
        </details>
        <LiveFocusSummary127 />
        <LiveSessionSummary113 />
        <LiveSessionExport114 />
        <LiveSessionTimer116 />
        <LiveSessionLog130 />
        <LiveSessionSnapshots117 />
        <LiveSessionTransfer122 />
        <LiveSessionCloseout135 />
        <LiveSessionReset115 />
        <div className="live-focus-secondary">
          <LiveQuickNav101 />
          <LiveSectionStatus102 />
          <LiveResume106 />
          <LiveCopySection107 />
          <LiveWorkChecklist109 />
          <LiveSessionNotes110 />
        </div>
        <div id="live-main" className="live-focus-main">
          <div id="redaktionsbordet" style={{scrollMarginTop:'56px'}}><EditorialDesk19 /></div>
          <div id="kallkontroll" style={{scrollMarginTop:'56px'}}><SourceVerification20 /></div>
          <div id="kalljakt" style={{scrollMarginTop:'56px'}}><SourceHunter21 /></div>
          <div id="liveflodet" style={{scrollMarginTop:'56px'}}><LiveRadarBrowser /></div>
        </div>
      </div>
    </main>
  );
}
