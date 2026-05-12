
import { activities } from "../data/mockData";

export default function Activity() {
  // Sort activities by most recent (assuming they are ordered for now or add a date sort)
  
  return (
    <div className="bg-white min-h-screen pb-20">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 h-14 flex items-center">
        <h1 className="font-bold text-xl">Activity</h1>
      </header>

      <div className="divide-y divide-gray-100">
        <div className="p-4">
           <h2 className="font-semibold text-sm mb-4">New</h2>
           {activities.map((activity) => (
             <div key={activity.id} className="flex items-center justify-between mb-4 last:mb-0">
               <div className="flex items-center gap-3 flex-1">
                 <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <img src={activity.user.avatar} alt={activity.user.username} className="w-full h-full object-cover" />
                    {activity.type === 'like' && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-[8px] text-white">❤️</span>
                      </div>
                    )}
                    {activity.type === 'follow' && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-[8px] text-white">👤</span>
                      </div>
                    )}
                 </div>
                 <div className="text-sm">
                   <span className="font-semibold mr-1">{activity.user.username}</span>
                   {activity.text}
                   <span className="text-gray-400 text-xs ml-2">{activity.timestamp}</span>
                 </div>
               </div>
               
               {activity.postImage ? (
                 <div className="w-10 h-10 bg-gray-100">
                   <img src={activity.postImage} alt="" className="w-full h-full object-cover" />
                 </div>
               ) : (
                 <button className="bg-blue-500 text-white text-xs font-semibold px-4 py-1.5 rounded-lg">
                   Follow
                 </button>
               )}
             </div>
           ))}
        </div>
        
        <div className="p-4">
           <h2 className="font-semibold text-sm mb-4">This Week</h2>
           {/* Placeholder for older activities */}
           <div className="text-center py-8 text-gray-400 text-sm">
             No older activities.
           </div>
        </div>
      </div>
    </div>
  );
}
