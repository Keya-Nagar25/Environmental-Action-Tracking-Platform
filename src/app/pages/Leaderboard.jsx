import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import clsx from 'clsx';
import { Trophy, TrendingUp, TrendingDown, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { leaderboardData } from '../data/leaderboardData';
import { currentUser } from '../data/mockData';

export default function Leaderboard() {
  const [period, setPeriod] = useState('weekly');

  const rawData = leaderboardData[period];
  const currentData = [...rawData].sort((a, b) => b.reach - a.reach).map((entry, index) => ({
    ...entry,
    rank: index + 1
  }));
  
  const top3 = currentData.slice(0, 3);
  const rest = currentData.slice(3);

  const myEntry = currentData.find(e => e.user.id === currentUser.id);

  const renderTrend = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp size={14} className="text-green-500" />;
      case 'down': return <TrendingDown size={14} className="text-red-500" />;
      default: return <Minus size={14} className="text-gray-400" />;
    }
  };

  return (
    <div className="bg-white min-h-screen pb-32">
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-gray-800">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="font-bold text-xl flex items-center gap-2">
            <Trophy className="text-yellow-500 fill-yellow-500" size={20} />
            Leaderboard
          </h1>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-gray-100 p-1 rounded-xl flex">
          {['weekly', 'monthly', 'allTime'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={clsx(
                "flex-1 py-2 text-sm font-semibold rounded-lg transition-all capitalize",
                period === p ? "bg-white shadow-sm text-green-600" : "text-gray-500 hover:text-gray-700"
              )}
            >
              {p === 'allTime' ? 'All Time' : p}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 pb-8 flex items-end justify-center gap-4">
        {/* 2nd Place */}
        <div className="flex flex-col items-center w-1/3">
          <div className="relative mb-2">
            <div className="w-16 h-16 rounded-full border-2 border-gray-300 overflow-hidden">
              <img src={top3[1].user.avatar} alt={top3[1].user.username} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full border border-white">2</span>
            </div>
          </div>
          <span className="font-semibold text-sm truncate w-full text-center">{top3[1].user.username}</span>
          <span className="text-green-600 text-xs font-bold">{top3[1].score} pts</span>
          <span className="text-gray-400 text-[10px]">{top3[1].reach.toLocaleString()} reach</span>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center w-1/3 -mt-6">
          <div className="relative mb-2">
            <div className="absolute -top-6 text-2xl animate-bounce">👑</div>
            <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg">
              <img src={top3[0].user.avatar} alt={top3[0].user.username} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-0.5 rounded-full border-2 border-white">1</span>
            </div>
          </div>
          <span className="font-bold text-sm truncate w-full text-center">{top3[0].user.username}</span>
          <span className="text-green-600 text-xs font-bold">{top3[0].score} pts</span>
          <span className="text-gray-400 text-[10px]">{top3[0].reach.toLocaleString()} reach</span>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center w-1/3">
          <div className="relative mb-2">
            <div className="w-16 h-16 rounded-full border-2 border-orange-300 overflow-hidden">
              <img src={top3[2].user.avatar} alt={top3[2].user.username} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 inset-x-0 flex justify-center">
              <span className="bg-orange-300 text-white text-xs font-bold px-2 py-0.5 rounded-full border border-white">3</span>
            </div>
          </div>
          <span className="font-semibold text-sm truncate w-full text-center">{top3[2].user.username}</span>
          <span className="text-green-600 text-xs font-bold">{top3[2].score} pts</span>
          <span className="text-gray-400 text-[10px]">{top3[2].reach.toLocaleString()} reach</span>
        </div>
      </div>

      <div className="px-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-wide">Rankings</h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={period}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3"
          >
            {rest.map((entry) => (
              <div key={entry.user.id} className="flex items-center bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-6 font-bold text-gray-500 text-sm text-center mr-2">{entry.rank}</div>
                <div className="mr-3">
                  {renderTrend(entry.trend)}
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                  <img src={entry.user.avatar} alt={entry.user.username} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm flex items-center gap-1">
                    {entry.user.username}
                    {entry.user.badges && entry.user.badges.length > 0 && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {entry.user.badges[0]}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{entry.reach.toLocaleString()} reach</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600 text-sm">{entry.score}</div>
                  <div className="text-[10px] text-gray-400">Eco-Score</div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {myEntry && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30">
          <div className="max-w-md mx-auto flex items-center">
            <div className="w-8 font-bold text-gray-800 text-lg text-center mr-2">{myEntry.rank}</div>
            <div className="w-10 h-10 rounded-full border-2 border-green-500 overflow-hidden mr-3">
              <img src={myEntry.user.avatar} alt="Me" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">You</div>
              <div className="text-xs text-gray-500">{myEntry.reach.toLocaleString()} reach</div>
            </div>
            <div className="text-right">
              <div className="font-bold text-green-600 text-lg">{myEntry.score}</div>
              <div className="text-[10px] text-gray-400">Eco-Score</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
