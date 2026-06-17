export interface Hotspot {
  id: string;
  labelEs: string;
  labelEn: string;
  left: string;
  top: string;
}

export const HOTSPOTS: Hotspot[] = [
  { id: 'ingreso',         labelEs: 'Ingreso',          labelEn: 'Entrance',       left: '62%', top: '72%' },
  { id: 'comedero',        labelEs: 'Comedero de aves', labelEn: 'Bird Feeder',    left: '48%', top: '78%' },
  { id: 'camping',         labelEs: 'Camping',          labelEn: 'Camping',        left: '55%', top: '85%' },
  { id: 'area-productiva', labelEs: '\u00c1rea productiva',   labelEn: 'Productive Area', left: '42%', top: '68%' },
  { id: 'muelle',          labelEs: 'Muelle',           labelEn: 'Pier',           left: '70%', top: '90%' },
  { id: 'pasarela',        labelEs: 'Pasarela',         labelEn: 'Walkway',        left: '58%', top: '80%' },
  { id: 'banos-secos',     labelEs: 'Ba\u00f1os secos',      labelEn: 'Dry Toilets',    left: '65%', top: '55%' },
  { id: 'timbo',           labelEs: 'Timb\u00f3',           labelEn: 'Timb\u00f3 Tree',    left: '30%', top: '40%' },
];
