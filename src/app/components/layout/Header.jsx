
import { Bell, MessageSquare, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-14 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl tracking-tight text-green-600 font-serif">
        EcoAct
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/leaderboard" className="relative transition-transform active:scale-90" aria-label="Leaderboard">
          <Trophy size={24} className="text-yellow-500 fill-yellow-500" />
        </Link>
        <Link to="/activity" className="relative transition-transform active:scale-90" aria-label="Notifications">
          <Bell size={24} className="text-gray-800" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </Link>
        <button className="transition-transform active:scale-90" aria-label="Messages">
          <MessageSquare size={24} className="text-gray-800" />
        </button>
      </div>
    </header>
  );
}
