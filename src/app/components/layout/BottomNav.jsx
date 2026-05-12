import { Home, Search, PlusSquare, Flag, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export function BottomNav() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white border-t border-gray-200 h-16 flex items-center justify-around px-4 z-50 shrink-0">
      <Link to="/" className={clsx("p-2", isActive("/") ? "text-green-600" : "text-gray-500")}>
        <Home size={28} strokeWidth={isActive("/") ? 2.5 : 2} />
      </Link>
      
      <Link to="/explore" className={clsx("p-2", isActive("/explore") ? "text-green-600" : "text-gray-500")}>
        <Search size={28} strokeWidth={isActive("/explore") ? 2.5 : 2} />
      </Link>
      
      <Link to="/create" className={clsx("p-2", isActive("/create") ? "text-green-600" : "text-gray-500")}>
        <PlusSquare size={28} strokeWidth={isActive("/create") ? 2.5 : 2} />
      </Link>
      
      <Link to="/campaigns" className={clsx("p-2", isActive("/campaigns") ? "text-green-600" : "text-gray-500")}>
        <Flag size={28} strokeWidth={isActive("/campaigns") ? 2.5 : 2} />
      </Link>
      
      <Link to="/profile" className={clsx("p-2", isActive("/profile") ? "text-green-600" : "text-gray-500")}>
        <User size={28} strokeWidth={isActive("/profile") ? 2.5 : 2} />
      </Link>
    </nav>
  );
}
