export interface Place {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  image: string; // Placeholder color or URL
  badge?: string;
  phone?: string;
}

export const places: Place[] = [
  {
    id: '1',
    slug: 'cafe-belleville',
    name: 'Café Belleville',
    category: 'Café',
    description: 'Torréfaction artisanale et pâtisseries maison dans une ambiance chaleureuse.',
    address: '10 Rue de Belleville',
    city: 'Paris 20',
    image: '#E5E7EB',
    badge: 'Ouvert',
    phone: '01 40 40 40 40'
  },
  {
    id: '2',
    slug: 'librairie-le-chapitre',
    name: 'Librairie Le Chapitre',
    category: 'Librairie',
    description: 'Une sélection pointue de romans, essais et beaux livres.',
    address: '45 Rue de la République',
    city: 'Lyon 02',
    image: '#D1D5DB',
    badge: 'Fermé le lundi',
    phone: '04 78 40 40 40'
  },
  {
    id: '3',
    slug: 'boulangerie-utopie',
    name: 'Boulangerie Utopie',
    category: 'Boulangerie',
    description: 'Pains au levain naturel et viennoiseries pur beurre.',
    address: '20 Rue Jean-Pierre Timbaud',
    city: 'Paris 11',
    image: '#9CA3AF',
    badge: 'Meilleure baguette 2024',
    phone: '01 43 40 40 40'
  },
  {
    id: '4',
    slug: 'fleuriste-monceau',
    name: 'Fleuriste Monceau',
    category: 'Fleuriste',
    description: 'Compositions florales sauvages et plantes d\'intérieur rares.',
    address: '12 Boulevard Malesherbes',
    city: 'Paris 08',
    image: '#F3F4F6',
    badge: 'Livraison disponible',
    phone: '01 42 40 40 40'
  },
  {
    id: '5',
    slug: 'concept-store-12',
    name: 'Concept Store 12',
    category: 'Mode',
    description: 'Sélection de créateurs locaux et objets design.',
    address: '12 Rue des Rosiers',
    city: 'Paris 04',
    image: '#E5E7EB',
    badge: 'Nouvelle collection',
    phone: '01 48 40 40 40'
  },
  {
    id: '6',
    slug: 'cave-a-manger',
    name: 'Cave à Manger',
    category: 'Restaurant',
    description: 'Vins natures et petites assiettes à partager.',
    address: '8 Rue de la Folie Méricourt',
    city: 'Paris 11',
    image: '#D1D5DB',
    badge: 'Service continu',
    phone: '01 49 40 40 40'
  },
  {
    id: '7',
    slug: 'epicerie-fine-du-coin',
    name: 'Épicerie Fine du Coin',
    category: 'Épicerie',
    description: 'Produits du terroir, fromages et charcuteries.',
    address: '5 Place de la Mairie',
    city: 'Bordeaux',
    image: '#9CA3AF',
    badge: 'Produits frais',
    phone: '05 56 40 40 40'
  },
  {
    id: '8',
    slug: 'atelier-velo',
    name: 'Atelier Vélo',
    category: 'Services',
    description: 'Réparation rapide et vente d\'accessoires pour cyclistes urbains.',
    address: '33 Quai de Valmy',
    city: 'Paris 10',
    image: '#F3F4F6',
    badge: 'Atelier certifié',
    phone: '01 44 40 40 40'
  },
  {
    id: '9',
    slug: 'pharmacie-centrale',
    name: 'Pharmacie Centrale',
    category: 'Santé',
    description: 'Conseils personnalisés et parapharmacie bio.',
    address: '100 Rue de Rivoli',
    city: 'Paris 01',
    image: '#E5E7EB',
    badge: 'Ouvert 7j/7',
    phone: '01 45 40 40 40'
  },
  {
    id: '10',
    slug: 'cinema-louxor',
    name: 'Cinéma Louxor',
    category: 'Culture',
    description: 'Cinéma historique proposant films d\'auteur et blockbusters.',
    address: '170 Boulevard de Magenta',
    city: 'Paris 10',
    image: '#D1D5DB',
    badge: 'Séances VF/VOST',
    phone: '01 46 40 40 40'
  }
];
