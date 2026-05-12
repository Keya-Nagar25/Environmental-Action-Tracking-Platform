import { useState } from 'react';
import { Plus, Search, Users, Target, Leaf, CheckCircle, X } from 'lucide-react';
import { initialCampaigns } from "../data/campaignData";
import { currentUser } from "../data/mockData";
import clsx from 'clsx';
import { toast } from 'sonner';

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [newCampaignName, setNewCampaignName] = useState('');
  const [newCampaignDesc, setNewCampaignDesc] = useState('');
  const [newCampaignType, setNewCampaignType] = useState('Planting');
  const [newCampaignGoal, setNewCampaignGoal] = useState(10);

  const handleCreateCampaign = (e) => {
    e.preventDefault();
    const newCampaign = {
      id: `c-${Date.now()}`,
      name: newCampaignName,
      description: newCampaignDesc,
      organizer: currentUser,
      type: newCampaignType,
      requiredMembers: newCampaignGoal,
      currentMembers: 1,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?w=600&h=400&fit=crop',
      isClosed: false,
      joined: true,
    };
    setCampaigns([newCampaign, ...campaigns]);
    setShowCreateModal(false);
    setNewCampaignName('');
    setNewCampaignDesc('');
    setNewCampaignType('Planting');
    setNewCampaignGoal(10);
    toast.success('Campaign created successfully!');
  };

  const handleJoinCampaign = (id) => {
    setCampaigns(campaigns.map(c => {
      if (c.id === id) {
        if (c.joined) return c;
        if (c.currentMembers >= c.requiredMembers) return c;
        const newCount = c.currentMembers + 1;
        const isNowClosed = newCount >= c.requiredMembers;
        if (isNowClosed) toast.info('Campaign goal reached! Campaign is now closed.');
        else toast.success('You have joined the campaign!');
        return { ...c, currentMembers: newCount, isClosed: isNowClosed, joined: true };
      }
      return c;
    }));
  };

  const filteredCampaigns = campaigns.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen pb-20 relative">
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 p-2">
        <div className="bg-gray-100 rounded-lg p-2 flex items-center mb-2">
          <Search size={20} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search campaigns..."
            className="bg-transparent flex-1 outline-none text-sm placeholder:text-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg">Active Campaigns</h2>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 hover:bg-green-700 transition-colors"
          >
            <Plus size={14} /> Create
          </button>
        </div>

        {filteredCampaigns.map((campaign) => {
          const progress = (campaign.currentMembers / campaign.requiredMembers) * 100;
          const isFull = campaign.currentMembers >= campaign.requiredMembers;

          return (
            <div key={campaign.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-32">
                <img src={campaign.image} alt={campaign.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-800">
                  {campaign.type}
                </div>
                {isFull && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold border-2 border-white px-4 py-1 rounded-full uppercase tracking-widest text-sm">Completed</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{campaign.name}</h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">{campaign.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img src={campaign.organizer.avatar} alt={campaign.organizer.username} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs text-gray-600">by <span className="font-semibold">{campaign.organizer.username}</span></span>
                </div>

                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-gray-600 font-medium flex items-center gap-1"><Users size={12} /> {campaign.currentMembers} / {campaign.requiredMembers} joined</span>
                  <span className="text-green-600 font-bold">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div 
                    className={clsx("h-full transition-all duration-500", isFull ? "bg-green-500" : "bg-blue-500")} 
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>

                <button
                  onClick={() => handleJoinCampaign(campaign.id)}
                  disabled={campaign.joined || isFull}
                  className={clsx(
                    "w-full py-2 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2",
                    campaign.joined 
                      ? "bg-gray-100 text-gray-500 cursor-default" 
                      : isFull 
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700 shadow-sm active:scale-[0.98]"
                  )}
                >
                  {campaign.joined ? (
                    <><CheckCircle size={16} /> Joined</>
                  ) : isFull ? (
                    <><Target size={16} /> Goal Reached</>
                  ) : (
                    <><Leaf size={16} /> Join Campaign</>
                  )}
                </button>
              </div>
            </div>
          );
        })}
        
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-10 text-gray-500 text-sm">
            No campaigns found. Be the first to start one!
          </div>
        )}
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-xl animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Start a Campaign</h2>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleCreateCampaign} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
                <input 
                  required
                  type="text" 
                  value={newCampaignName}
                  onChange={(e) => setNewCampaignName(e.target.value)}
                  placeholder="e.g. Save the Wetlands"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  required
                  value={newCampaignDesc}
                  onChange={(e) => setNewCampaignDesc(e.target.value)}
                  placeholder="What's the goal?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm h-20 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select 
                    value={newCampaignType}
                    onChange={(e) => setNewCampaignType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
                  >
                    <option value="Planting">Planting</option>
                    <option value="Cleanup">Cleanup</option>
                    <option value="Solar">Solar</option>
                    <option value="Education">Education</option>
                    <option value="Recycling">Recycling</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Members</label>
                  <input 
                    required
                    type="number" 
                    min="2"
                    max="1000"
                    value={newCampaignGoal}
                    onChange={(e) => setNewCampaignGoal(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-xl mt-2 hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
              >
                Launch Campaign
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
