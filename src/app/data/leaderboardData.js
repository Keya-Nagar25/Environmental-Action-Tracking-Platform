import { currentUser } from './mockData';

const createEntry = (rank, user, score, reach, trend) => ({
  rank,
  user,
  score,
  reach,
  trend,
});

const otherUsers = [
  {
    id: 'u2',
    username: 'sarah_plants',
    name: 'Sarah Mills',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    badges: ['Planter', 'Top Contributor'],
  },
  {
    id: 'u3',
    username: 'beach_cleanup_crew',
    name: 'Ocean Cleaners',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    badges: ['OceanGuard'],
  },
  {
    id: 'u4',
    username: 'green_guy_99',
    name: 'Mike Smith',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
    badges: ['Recycler'],
  },
  {
    id: 'u5',
    username: 'city_garden_collective',
    name: 'Urban Greens',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
    badges: ['Community Leader'],
  },
  {
    id: 'u6',
    username: 'solar_sam',
    name: 'Sam Ray',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    badges: ['Renewable'],
  },
  {
    id: 'u7',
    username: 'nature_lover_x',
    name: 'Emily Woods',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    badges: ['Explorer'],
  },
];

export const leaderboardData = {
  weekly: [
    createEntry(1, otherUsers[0], 450, 12000, 'up'),
    createEntry(2, currentUser, 380, 8500, 'up'),
    createEntry(3, otherUsers[1], 350, 9200, 'down'),
    createEntry(4, otherUsers[3], 310, 5600, 'same'),
    createEntry(5, otherUsers[2], 290, 4800, 'down'),
    createEntry(6, otherUsers[4], 210, 3200, 'up'),
    createEntry(7, otherUsers[5], 180, 2900, 'same'),
  ],
  monthly: [
    createEntry(1, otherUsers[1], 1500, 45000, 'up'),
    createEntry(2, otherUsers[3], 1350, 32000, 'up'),
    createEntry(3, otherUsers[0], 1200, 38000, 'down'),
    createEntry(4, currentUser, 1100, 28000, 'same'),
    createEntry(5, otherUsers[2], 980, 21000, 'down'),
    createEntry(6, otherUsers[4], 850, 15000, 'up'),
    createEntry(7, otherUsers[5], 720, 12000, 'same'),
  ],
  allTime: [
    createEntry(1, otherUsers[3], 12500, 350000, 'same'),
    createEntry(2, otherUsers[1], 11200, 280000, 'up'),
    createEntry(3, otherUsers[0], 9800, 240000, 'down'),
    createEntry(4, otherUsers[2], 8500, 190000, 'same'),
    createEntry(5, currentUser, 7200, 150000, 'up'),
    createEntry(6, otherUsers[4], 6100, 120000, 'same'),
    createEntry(7, otherUsers[5], 5400, 95000, 'down'),
  ],
};
