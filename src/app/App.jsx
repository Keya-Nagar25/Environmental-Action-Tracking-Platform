
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Explore from './pages/Explore';
import AddPost from './pages/AddPost';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Campaigns from './pages/Campaigns';
import { BottomNav } from './components/layout/BottomNav';

function Layout() {
  const location = useLocation();
  const hideBottomNav = false; 

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg relative overflow-hidden flex flex-col">
       <div className="flex-1 overflow-y-auto scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<AddPost />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </div>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
      <Toaster position="top-center" richColors />
    </HashRouter>
  );
}
