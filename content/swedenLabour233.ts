export type SwedenLabourMetric233={id:string;label:string;value:string;period:string;method:'AKU'|'BAS'|'other';sourceUrl:string;checkedAt:string};
export const swedenLabourMetrics233:SwedenLabourMetric233[]=[
{id:'aku-unemployment',label:'Arbetslöshet',value:'9,9 %',period:'juni 2026, ej säsongrensat, 15–74 år',method:'AKU',sourceUrl:'https://www.scb.se/AM0401',checkedAt:'2026-08-13'},
{id:'aku-unemployment-trend',label:'Arbetslöshet, trend',value:'8,7 %',period:'juni 2026, säsongrensat och utjämnat',method:'AKU',sourceUrl:'https://www.scb.se/AM0401',checkedAt:'2026-08-13'},
{id:'bas-employed',label:'Sysselsatta',value:'5 308 782',period:'maj 2026, 15–74 år',method:'BAS',sourceUrl:'https://www.scb.se/AM0210',checkedAt:'2026-08-13'},
{id:'bas-employment-rate',label:'Sysselsättningsgrad',value:'80,4 %',period:'maj 2026, 20–65 år',method:'BAS',sourceUrl:'https://www.scb.se/AM0210',checkedAt:'2026-08-13'},
{id:'bas-unemployment',label:'Arbetslöshet',value:'5,2 %',period:'maj 2026, 20–65 år',method:'BAS',sourceUrl:'https://www.scb.se/AM0210',checkedAt:'2026-08-13'}
];
export const swedenLabourDesk233={title:'Jobb & arbetsmarknad',areas:['Sysselsättning','Arbetslöshet','Lediga jobb','Varsel','Kompetensbrist','Ungdomsarbetslöshet','Regional arbetsmarknad'],rules:['Visa alltid vilken statistikkälla och metod som används.','AKU och BAS mäter arbetsmarknaden på olika sätt och får inte presenteras som direkt utbytbara tal.','Ange åldersgrupp, referensperiod och om talet är säsongrensat.','Regionala jämförelser ska använda samma definition och period.']};
