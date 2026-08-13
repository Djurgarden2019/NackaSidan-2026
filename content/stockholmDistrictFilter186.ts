import { stockholmDistricts175 } from './stockholmDistricts175';

export type StockholmDistrictFilter = {
  slug: string;
  label: string;
  focus: string[];
};

export const stockholmDistrictFilters186: StockholmDistrictFilter[] = stockholmDistricts175.map((district) => ({
  slug: district.slug,
  label: district.name,
  focus: district.focus
}));

export function filterByDistrict<T extends { districts?: string[] }>(items: T[], districtSlug?: string) {
  if (!districtSlug) return items;
  return items.filter((item) => item.districts?.includes(districtSlug));
}

export const stockholmDistrictFilterRules186 = {
  defaultLabel: 'Hela Stockholm',
  rules: [
    'Artiklar kan tillhöra flera stadsdelar.',
    'Generella Stockholmsartiklar visas alltid i Hela Stockholm.',
    'Stadsdelsfilter får inte dölja viktiga stadsövergripande varningar.',
    'Filterval ska kunna kombineras med ämne och färskhet i senare sprint.'
  ]
};
