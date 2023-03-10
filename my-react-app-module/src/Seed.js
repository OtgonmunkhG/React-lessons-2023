
function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
} const products = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'products/avatars/daniel.jpg',
        productImageUrl: 'products/image-aqua.png',
        stars: 4,
        
    },
    {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'products/avatars/kristy.png',
        productImageUrl: 'products/image-rose.png',
        stars: 5
    },
    {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'products/avatars/veronika.jpg',
        productImageUrl: 'products/image-steel.png',
        stars: 3
    },
    {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'products/avatars/molly.png',
        productImageUrl: 'products/image-yellow.png',
        stars: 1
    },
];
export default products;

