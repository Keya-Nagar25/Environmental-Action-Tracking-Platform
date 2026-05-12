export const currentUser = {
  id: 'u1',
  username: 'eco_warrior',
  name: 'Alex Green',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
  bio: 'Passionate about saving the planet 🌍 one step at a time.',
  stats: {
    posts: 42,
    followers: 890,
    following: 120,
    impactPoints: 1250,
  },
  badges: ['Recycler', 'Planter', 'OceanGuard'],
};

export const posts = [
  {
    id: 'p1',
    userId: 'u2',
    user: {
      id: 'u2',
      username: 'sarah_plants',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    imageUrl: 'https://images.unsplash.com/photo-1758599668234-68f52db62425?w=1080&h=1080&fit=crop',
    caption: 'Spent the morning planting trees with the community! 🌳 #GreenEarth #Community',
    likes: 124,
    comments: 12,
    timestamp: '2h ago',
    category: 'Planting',
  },
  {
    id: 'p2',
    userId: 'u3',
    user: {
      id: 'u3',
      username: 'beach_cleanup_crew',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    },
    imageUrl: 'https://images.unsplash.com/photo-1751646312130-d6be98d867bf?w=1080&h=1080&fit=crop',
    caption: 'Another successful beach cleanup. Look at all this trash we removed! 🌊♻️ #OceanCleanup',
    likes: 342,
    comments: 45,
    timestamp: '5h ago',
    category: 'Cleanup',
  },
  {
    id: 'p3',
    userId: 'u1',
    user: currentUser,
    imageUrl: 'https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=1080&h=1080&fit=crop',
    caption: 'Just got solar panels installed! harnessing the power of the sun ☀️ #SolarEnergy #Renewable',
    likes: 89,
    comments: 8,
    timestamp: '1d ago',
    category: 'Energy',
  },
];

export const activities = [
  {
    id: 'a1',
    type: 'like',
    user: {
      id: 'u2',
      username: 'sarah_plants',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    text: 'liked your photo.',
    timestamp: '1h ago',
    postImage: 'https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=100&h=100&fit=crop',
  },
  {
    id: 'a2',
    type: 'follow',
    user: {
      id: 'u4',
      username: 'green_guy_99',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
    },
    text: 'started following you.',
    timestamp: '3h ago',
  },
];
