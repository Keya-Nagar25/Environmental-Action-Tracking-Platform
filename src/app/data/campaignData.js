import { currentUser } from './mockData';

const organizerUser = {
  id: 'u3',
  username: 'beach_cleanup_crew',
  name: 'Ocean Cleaners',
  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
  badges: ['OceanGuard'],
};

const otherOrganizer = {
  id: 'u5',
  username: 'city_garden_collective',
  name: 'Urban Greens',
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop',
  badges: ['Community Leader'],
};

export const initialCampaigns = [
  {
    id: 'c1',
    name: 'Santa Monica Beach Cleanup',
    description: 'Join us for a massive cleanup effort at Santa Monica beach. We need 50 volunteers to help clear debris and plastic.',
    organizer: organizerUser,
    type: 'Cleanup',
    requiredMembers: 50,
    currentMembers: 32,
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=600&h=400&fit=crop',
    isClosed: false,
    joined: false,
  },
  {
    id: 'c2',
    name: 'Urban Tree Planting Initiative',
    description: 'We aim to plant 200 trees in the downtown area to reduce urban heat island effect.',
    organizer: otherOrganizer,
    type: 'Planting',
    requiredMembers: 200,
    currentMembers: 185,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?w=600&h=400&fit=crop',
    isClosed: false,
    joined: true,
  },
  {
    id: 'c3',
    name: 'Solar Workshop for Schools',
    description: 'Help install solar panels on the roof of Lincoln High School. Seeking experienced electricians and enthusiastic helpers.',
    organizer: currentUser,
    type: 'Solar',
    requiredMembers: 10,
    currentMembers: 10,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
    isClosed: true,
    joined: true,
  },
];
