export type NewsFeedItem = {
  time: string;
  section: string;
  title: string;
  summary: string;
  href: string;
  type: 'Briefing' | 'Analys' | 'Fördjupning';
};

export const latestNews: NewsFeedItem[] = [
  {time:'1 sep · 11.45',section:'Ukraina',title:'Nio döda när Kyivregionen angrips för sjätte dagen i rad',summary:'Robotar och drönare har slagit mot Kyiv och Boryspil. Angreppen fortsätter samtidigt som diplomatiska kontakter pågår.',href:'/',type:'Briefing'},
  {time:'1 sep · 11.30',section:'Ekonomi',title:'Oljeuppgången skapar ny global ränteoro',summary:'Stigande energipriser pressar obligationsmarknaderna och ökar risken för en stramare penningpolitik i flera stora ekonomier.',href:'/ekonomi',type:'Analys'},
  {time:'1 sep · 11.15',section:'Iran',title:'Iran lovar försvara valutan när sanktionerna skärps',summary:'Centralbanken säger sig kunna ingripa med upp till två miljarder dollar efter rekordsvag valuta och kraftigt stigande inflation.',href:'/varlden',type:'Fördjupning'},
  {time:'1 sep · 10.55',section:'Ukraina · Handel',title:'Ryska angrepp slår mot Odesas exportvägar',summary:'Hamnanläggningar, energiinfrastruktur och en gränsövergång mot Rumänien har skadats.',href:'/varlden',type:'Fördjupning'},
  {time:'1 sep · 10.40',section:'Mellanöstern',title:'Fem döda efter israelisk beskjutning i Gaza',summary:'Nya dödsfall ökar pressen på den sköra vapenvilan och risken för en bredare upptrappning.',href:'/varlden',type:'Briefing'},
  {time:'1 sep · 10.20',section:'Nacka',title:'Ny plan ska stärka Nackas båt- och kustliv',summary:'Kommunens plan omfattar fler båtplatser, strandpromenader, badplatser och bättre kollektivtrafik på vatten.',href:'/stockholm',type:'Fördjupning'},
  {time:'31 aug · 14.30',section:'USA och Iran',title:'USA och Iran utbyter nya attacker',summary:'NackaSidans längre artikel granskar händelseförloppet, Gulfstaternas läge och konsekvenserna för Hormuz och energimarknaden.',href:'/artikel/usa-iran-gulfstaterna',type:'Analys'},
  {time:'31 aug · 12.00',section:'Sverige',title:'Valspurten och förtidsröstningen följs löpande',summary:'Sverigeavdelningen samlar opinionsläget, arbetsmarknaden, hushållsekonomin och beredskapsfrågorna inför valet.',href:'/sverige',type:'Briefing'}
];
