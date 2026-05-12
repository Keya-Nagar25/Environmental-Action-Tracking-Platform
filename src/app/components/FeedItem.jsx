import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { useState } from 'react';

export function FeedItem({ post }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white border-b border-gray-100 pb-4 mb-2">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <img 
            src={post.user.avatar} 
            alt={post.user.username} 
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />
          <span className="font-semibold text-sm">{post.user.username}</span>
        </div>
        <button className="text-gray-500">•••</button>
      </div>

      {/* Image */}
      <div className="relative aspect-square w-full bg-gray-100">
        <img 
          src={post.imageUrl} 
          alt="Post content" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          {post.category}
        </div>
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="transition-transform active:scale-90">
              <Heart 
                size={26} 
                className={liked ? "fill-red-500 text-red-500" : "text-gray-800"} 
              />
            </button>
            <button className="transition-transform active:scale-90">
              <MessageCircle size={26} className="text-gray-800" />
            </button>
            <button className="transition-transform active:scale-90">
              <Send size={26} className="text-gray-800" />
            </button>
          </div>
          <button>
            <Bookmark size={26} className="text-gray-800" />
          </button>
        </div>

        <div className="font-semibold text-sm mb-1">
          {likesCount.toLocaleString()} likes
        </div>

        <div className="text-sm mb-1">
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </div>

        <div className="text-xs text-gray-500 uppercase mt-1">
          {post.timestamp}
        </div>
      </div>
    </div>
  );
}
