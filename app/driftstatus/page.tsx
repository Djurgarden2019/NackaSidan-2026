import Link from 'next/link';
import { getLiveNews } from '../../lib/liveNews';
import { getNewsHealth } from '../../lib/newsHealth';
import { getDeploymentIdentity } from '../../lib/deploymentIdentity';

export const revalidate = 900;

const reasonLabels: Record<string,string> = {
  SOURCE_DEGRADED: 'En eller flera källor svarar inte', SOURCE_STALE: 'En eller flera anslutna källor levererar för gammalt daterat innehåll', SOURCE_UNDATED: 'En eller flera anslutna källor saknar daterat innehåll i aktuell radar', LOCAL_EMPTY: 'Nacka/Lokalt saknar aktuella artiklar', RADAR_EMPTY: 'Nyhetsradarn saknar aktuellt innehåll', CATEGORY_EMPTY: 'En eller flera kategorier är tomma', ALL_SOURCES_DOWN: 'Alla källor är nere', ALL_LOCAL_SOURCES_DOWN: 'Alla Nacka/Lokalt-källor är nere', NEWS_STALE: 'Den nyaste daterade artikeln är för gammal',
};
const sourceStateLabels: Record<string,string> = { AKTIV: 'Ansluten och färsk', GAMMAL: 'Ansluten men gammal', INGEN_DATERAD_DATA: 'Ansluten men saknar daterad artikel', NERE: 'Källan svarar inte' };

export default async function DriftstatusPage() {
  const radar = await getLiveNews(); const deployment = getDeploymentIdentity();
  const { unavailable, alerts, reasons, status, newestPublishedAt, newestAgeHours, staleAfterHours, sourceFreshness, staleSources, undatedSources, activeSources, downSources, sourceStaleAfterHours } = getNewsHealth(radar);
  const freshnessLabel = newestAgeHours === null ? 'Okänd' : `${Math.round(newestAgeHours * 10) / 10} h`;
  const releaseStatus = !deployment.provenanceOk || status === 'ÅTGÄRD' ? 'FAILED' : status === 'BEVAKA' ? 'BEVAKA' : 'VERIFIED';
  const releaseGate = releaseStatus === 'FAILED' ? 'BLOCK' : releaseStatus === 'BEVAKA' ? 'ALLOW_WITH_WARNING' : 'ALLOW';
  const nextAction = !deployment.provenanceOk
    ? 'Verifiera först deploy-proveniens och att production verkligen kommer från main. Jämför commit och deployment-ID innan annan felsökning.'
    : status === 'ÅTGÄRD'
      ? 'Börja med readiness och full health-diagnostik. Identifiera orsakskoder, berörda källor och den exakta deploymenten innan återställning.'
      : status === 'BEVAKA'
        ? 'Tjänsten är tillgänglig men bör följas. Kontrollera gamla, odaterade eller nedkopplade källor och verifiera att läget inte försämras.'
        : 'Ingen incidentåtgärd krävs. Fortsätt normal övervakning och använd proberna som verifiering efter nästa release.';

  return <main style={{ maxWidth:960, margin:'0 auto', padding:'72px 28px 100px' }}>
    <p style={{ color:'#a61919', fontWeight:800, letterSpacing:2, fontSize:13 }}>MAIN 355 · DRIFTSTATUS</p>
    <h1 style={{ fontFamily:'Georgia,serif', fontSize:'clamp(48px,7vw,82px)', lineHeight:.98, margin:'12px 0 18px' }}>Nyhetsradarns status</h1>
    <p style={{ fontFamily:'Georgia,serif', fontSize:20, lineHeight:1.45, maxWidth:760 }}>Visuell kontroll av live-data, release-verifiering, release-gate, statusregler, källhälsa och den deployment som faktiskt kör.</p>
    <nav aria-label="Driftverktyg" style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:24 }}>
      {[['/driftpanel','Öppna Driftpanelen'],['/api/release-verification','Release-verifiering API'],['/api/news-health','Visa health-JSON'],['/api/news-health/live','Liveness-probe'],['/api/news-health/ready','Readiness-probe'],['/api/incident-status','Incident-status API'],['/api/deployment','Deploy-proveniens API'],['/','Till startsidan']].map(([href,label]) => <Link key={href} href={href} style={{ border:'1px solid #111', padding:'10px 14px', textDecoration:'none', fontWeight:700 }}>{label}</Link>)}
      <a href="https://github.com/Djurgarden2019/NackaSidan-2026/blob/main/docs/RELEASE-VERIFICATION.md" target="_blank" rel="noreferrer" style={{ border:'1px solid #111', padding:'10px 14px', textDecoration:'none', fontWeight:700 }}>Release-checklista</a>
      <a href="https://github.com/Djurgarden2019/NackaSidan-2026/blob/main/docs/INCIDENT-RUNBOOK.md" target="_blank" rel="noreferrer" style={{ border:'1px solid #111', padding:'10px 14px', textDecoration:'none', fontWeight:700 }}>Incident-runbook</a>
    </nav>

    <section aria-label="Release-gate" style={{marginTop:24,padding:'22px',border:`4px solid ${releaseGate==='ALLOW'?'#235c2b':releaseGate==='ALLOW_WITH_WARNING'?'#8a6400':'#a61919'}`,background:releaseGate==='ALLOW'?'#eef4ec':releaseGate==='ALLOW_WITH_WARNING'?'#fff4d8':'#f7e7e7'}}>
      <div style={{fontSize:13,fontWeight:900,letterSpacing:1.5}}>RELEASE-GATE</div>
      <div style={{fontFamily:'Georgia,serif',fontSize:'clamp(40px,6vw,62px)',lineHeight:1,marginTop:8,overflowWrap:'anywhere'}}>{releaseGate}</div>
      <div style={{marginTop:12,fontSize:18,lineHeight:1.5}}>{releaseGate==='ALLOW'?'Release är godkänd. Production är operativt verifierad och kan stängas som genomförd.':releaseGate==='ALLOW_WITH_WARNING'?'Release är tillåten, men varningen ska dokumenteras och följas tills hälsostatus återgår till STABIL.':'Release är blockerad. Åtgärda readiness eller deploy-proveniens innan production betraktas som verifierad.'}</div>
    </section>

    <section aria-label="Release-verifiering" style={{marginTop:18,padding:'20px 22px',border:`3px solid ${releaseStatus==='VERIFIED'?'#235c2b':releaseStatus==='BEVAKA'?'#8a6400':'#a61919'}`,background:releaseStatus==='VERIFIED'?'#eef4ec':releaseStatus==='BEVAKA'?'#fff4d8':'#f7e7e7'}}>
      <div style={{fontSize:13,fontWeight:900,letterSpacing:1.4}}>RELEASE-VERIFIERING</div>
      <div style={{fontFamily:'Georgia,serif',fontSize:42,lineHeight:1,marginTop:8}}>{releaseStatus}</div>
      <div style={{marginTop:10,lineHeight:1.55}}>{releaseStatus==='VERIFIED'?'Production har godkänd deploy-proveniens och Nyhetsradarn är operativt stabil.':releaseStatus==='BEVAKA'?'Production är tillgänglig och har godkänd provenance, men hälsomodellen innehåller varningar som ska följas.':'Production ska inte betraktas som operativt verifierad. Kontrollera deploy-proveniens och readiness innan release stängs.'}</div>
      <div style={{marginTop:12}}><Link href="/api/release-verification" style={{fontWeight:800}}>Öppna maskinläsbar release-verifiering →</Link></div>
    </section>

    <section aria-label="Nästa operativa steg" style={{ marginTop:18, padding:'18px 20px', border:'3px solid #111', background: status === 'STABIL' && deployment.provenanceOk ? '#eef4ec' : '#fff4d8' }}>
      <div style={{ fontSize:13, fontWeight:900, letterSpacing:1.4 }}>VAD GÖR VI NU?</div>
      <div style={{ marginTop:8, fontFamily:'Georgia,serif', fontSize:24, lineHeight:1.35 }}>{nextAction}</div>
      <div style={{ marginTop:14, fontSize:14, lineHeight:1.55 }}>Incidentordning: liveness → readiness → incident-status → full health → deploy-proveniens → exakt Vercel-deployment → verifierad återställning.</div>
    </section>

    <section aria-label="Deployment-identitet" style={{ marginTop:24, padding:18, border:'1px solid #111', background:'#f7f5f1' }}><div style={{ fontSize:13,fontWeight:900,letterSpacing:1.4 }}>AKTUELL DEPLOYMENT</div><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:14,marginTop:14}}><div><strong>Commit</strong><div style={{fontFamily:'monospace',marginTop:4}}>{deployment.shortCommitSha ?? 'Okänd'}</div></div><div><strong>Deployment-ID</strong><div style={{fontFamily:'monospace',marginTop:4,overflowWrap:'anywhere'}}>{deployment.deploymentId ?? 'Okänd'}</div></div><div><strong>Miljö</strong><div>{deployment.environment}</div></div><div><strong>Git-ref</strong><div style={{fontFamily:'monospace'}}>{deployment.gitRef ?? 'Okänd'}</div></div><div><strong>Deployment</strong><div>{deployment.deploymentUrl ? <a href={`https://${deployment.deploymentUrl}`} target="_blank" rel="noreferrer">Öppna körande deploy</a> : 'Okänd'}</div></div></div></section>
    <section aria-label="Deploy-proveniens" style={{marginTop:14,padding:'16px 18px',border:`2px solid ${deployment.provenanceOk?'#235c2b':'#a61919'}`,background:deployment.provenanceOk?'#eef4ec':'#f7e7e7',lineHeight:1.55}}><strong>Deploy-proveniens: {deployment.provenanceOk?'GODKÄND':'VARNING'}</strong><div style={{marginTop:6}}>{deployment.isProduction ? deployment.isMainRef ? 'Production-deployen kommer från main, vilket är förväntat.' : `Production-deployen kommer från ${deployment.gitRef ?? 'okänd Git-ref'} i stället för main.` : `Detta är ${deployment.environment}; main-kravet gäller endast production.`}</div></section>
    <section aria-label="Probe-status" style={{marginTop:24,padding:'16px 18px',background:'#f7f5f1',lineHeight:1.55}}><strong>Övervakningsprober:</strong> release-gatet ger go/no-go. Release-verifiering sammanfattar production. Liveness svarar om appen kör. Readiness använder Nyhetsradarns hälsomodell. Incident-status ger incidentnivå och nästa maskinläsbara åtgärd. Deploy-proveniens verifierar releaseursprunget.</section>
    <section aria-label="Aktuell driftstatus" style={{marginTop:34,border:'3px solid #111',padding:'28px 26px',background:status==='STABIL'?'#eef4ec':'#f7eee5'}}><div style={{fontSize:13,fontWeight:900,letterSpacing:1.6}}>STATUS</div><div style={{fontFamily:'Georgia,serif',fontSize:54,lineHeight:1,marginTop:8}}>{status}</div>{alerts.length?<ul style={{margin:'18px 0 0',paddingLeft:20,lineHeight:1.6}}>{alerts.map(a=><li key={a}>{a}</li>)}</ul>:<p>Inga automatiska driftvarningar just nu.</p>}</section>
    {reasons.length?<section style={{marginTop:24}}><h2 style={{fontFamily:'Georgia,serif',fontSize:30}}>Varför denna status?</h2><div style={{display:'grid',gap:10}}>{reasons.map(r=><div key={r} style={{borderLeft:'3px solid #a61919',padding:'10px 14px',background:'#f7f5f1'}}><strong style={{fontFamily:'monospace'}}>{r}</strong><div>{reasonLabels[r]??r}</div></div>)}</div></section>:null}
    <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:14,marginTop:28}}>{[[radar.items.length,'Aktuella artiklar'],[freshnessLabel,'Nyaste artikelns ålder'],[activeSources.length,'Aktiva källor'],[staleSources.length,'Gamla källor'],[undatedSources.length,'Utan daterad data'],[downSources.length,'Nere']].map(([v,l])=><div key={String(l)} style={{borderTop:'2px solid #111',paddingTop:12}}><strong style={{fontSize:34}}>{v}</strong><div>{l}</div></div>)}</section>
    <section style={{marginTop:24,padding:'16px 18px',background:'#f7f5f1'}}><strong>Färskhetskontroll:</strong> BEVAKA aktiveras om den nyaste daterade artikeln är äldre än {staleAfterHours} timmar eller om en ansluten källa klassificeras som GAMMAL eller INGEN_DATERAD_DATA.{newestPublishedAt?<div>Nyaste daterade publicering: {new Date(newestPublishedAt).toLocaleString('sv-SE',{timeZone:'Europe/Stockholm'})}.</div>:null}</section>
    <section style={{marginTop:34}}><h2 style={{fontFamily:'Georgia,serif',fontSize:30}}>Status per källa</h2><p>En ansluten källa räknas som gammal om dess senaste daterade artikel är äldre än {sourceStaleAfterHours} timmar.</p><div style={{display:'grid',gap:8,marginTop:16}}>{sourceFreshness.map(s=><div key={s.name} style={{display:'grid',gridTemplateColumns:'minmax(220px,1fr) minmax(170px,.6fr) minmax(120px,.4fr)',gap:12,borderTop:'1px solid #bbb',paddingTop:10}}><strong>{s.name}</strong><span>{sourceStateLabels[s.state]??s.state}</span><span>{s.ageHours===null?'Okänd ålder':`${Math.round(s.ageHours*10)/10} h`}</span></div>)}</div></section>
    {unavailable.length?<section style={{marginTop:34}}><h2>Nedkopplade källor</h2><ul>{unavailable.map(f=><li key={f.name}>{f.name}</li>)}</ul></section>:null}
    <p style={{marginTop:28,fontSize:13,color:'#555'}}>Senast hämtad: {new Date(radar.fetchedAt).toLocaleString('sv-SE',{timeZone:'Europe/Stockholm'})}. Data mellanlagras i 15 minuter.</p>
  </main>;
}
