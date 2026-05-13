
import { posts } from "../data/mockData";
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => 
    post.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (post.category && post.category.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 p-2">
        <div className="bg-gray-100 rounded-lg p-2 flex items-center">
          <Search size={20} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search posts..." 
            className="bg-transparent flex-1 outline-none text-sm placeholder:text-gray-500" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {filteredPosts.map((post) => (
          <div key={post.id} className="aspect-square relative group cursor-pointer overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.caption} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
              {post.likes} ❤️
            </div>
          </div>
        ))}
        {searchQuery === '' && Array.from({ length: 12 }).map((_, i) => (
          <div key={`placeholder-${i}`} className="aspect-square bg-gray-200 animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}
