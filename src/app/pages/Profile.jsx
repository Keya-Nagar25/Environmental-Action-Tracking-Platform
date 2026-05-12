import { currentUser, posts } from "../data/mockData";
import { Settings, Bookmark, Grid } from 'lucide-react';

export default function Profile() {
  const user = currentUser;
  const userPosts = posts.filter(p => p.userId === user.id);

  return (
    <div className="bg-white min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-14 flex items-center justify-between">
        <h1 className="font-bold text-lg">{user.username}</h1>
        <button className="text-gray-800">
          <Settings size={24} />
        </button>
      </header>

      <div className="p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
            <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex justify-around text-center">
            <div>
              <div className="font-bold text-lg">{user.stats?.posts}</div>
              <div className="text-xs text-gray-500">Posts</div>
            </div>
            <div>
              <div className="font-bold text-lg">{user.stats?.followers}</div>
              <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div>
              <div className="font-bold text-lg">{user.stats?.following}</div>
              <div className="text-xs text-gray-500">Following</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="font-bold text-sm">{user.name}</h2>
          <p className="text-sm text-gray-700 whitespace-pre-wrap">{user.bio}</p>
        </div>

        {user.badges && user.badges.length > 0 && (
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
            {user.badges.map((badge, i) => (
              <div key={i} className="flex flex-col items-center min-w-[60px]">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center border border-green-200 mb-1">
                  <span className="text-xl">🏆</span>
                </div>
                <span className="text-[10px] text-gray-600 truncate w-full text-center">{badge}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex gap-2 mb-6">
          <button className="flex-1 bg-gray-100 py-1.5 rounded-lg text-sm font-semibold text-gray-800">Edit Profile</button>
          <button className="flex-1 bg-gray-100 py-1.5 rounded-lg text-sm font-semibold text-gray-800">Share Profile</button>
        </div>

        <div className="flex border-b border-gray-200 mb-0.5">
          <button className="flex-1 py-3 border-b-2 border-black flex justify-center">
            <Grid size={24} />
          </button>
          <button className="flex-1 py-3 text-gray-400 flex justify-center">
            <Bookmark size={24} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-0.5">
          {userPosts.map((post) => (
            <div key={post.id} className="aspect-square bg-gray-100 relative">
              <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square bg-gray-50 relative flex items-center justify-center text-gray-300">
              <span className="text-2xl">+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
