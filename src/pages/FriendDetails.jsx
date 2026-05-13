import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FriendContext } from '../context/FriendContext';
import { BellOff, Archive, Trash2, Edit2, Phone, MessageSquare, Video } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading, addInteraction } = useContext(FriendContext);

  const friend = friends.find((f) => String(f.id) === String(id));

  if (loading) return <div className="text-center py-20 font-bold">Loading...</div>;
  if (!friend) return <div className="text-center py-20 font-bold">Friend not found.</div>;

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      date: new Date().toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }),
      title: `${type} with ${friend.name}`,
      type: type.toLowerCase()
    };

    addInteraction(newEntry);

    toast.success(`${type} logged successfully!`, {
      style: {
        border: '1px solid #244D3F',
        padding: '16px',
        color: '#244D3F',
        fontWeight: 'bold'
      },
      iconTheme: {
        primary: '#244D3F',
        secondary: '#FFFAEE',
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Toaster position="top-center" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-[#E9E9E9] rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <img 
              src={friend.picture} 
              alt={friend.name} 
              className="w-32 h-32 rounded-full object-cover mb-4" 
            />
            <h2 className="text-2xl font-bold text-[#1E1E1E]">{friend.name}</h2>
            
            <div className="flex flex-col items-center gap-2 mt-2">
              <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase text-white ${
                friend.status === 'overdue' ? 'bg-[#FF4D4D]' : 
                friend.status === 'almost due' ? 'bg-[#FFB347]' : 'bg-[#244D3F]'
              }`}>
                {friend.status}
              </span>
              <div className="flex gap-2">
                {friend.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold uppercase rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 text-slate-500 italic text-sm">"{friend.bio}"</p>
            <p className="mt-2 text-xs text-slate-400 font-medium tracking-wide">Preferred: {friend.email}</p>
          </div>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-[#E9E9E9] py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all">
              <BellOff size={16} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-[#E9E9E9] py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all">
              <Archive size={16} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-[#E9E9E9] py-3 rounded-xl text-sm font-semibold text-[#FF4D4D] hover:bg-red-50 transition-all">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-[#E9E9E9] rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-[#1E1E1E]">{friend.days_since_contact}</p>
              <p className="text-[11px] text-slate-500 mt-2 font-bold uppercase tracking-wider">Days Since Contact</p>
            </div>
            <div className="bg-white border border-[#E9E9E9] rounded-2xl p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-[#1E1E1E]">{friend.goal}</p>
              <p className="text-[11px] text-slate-500 mt-2 font-bold uppercase tracking-wider">Goal (Days)</p>
            </div>
            <div className="bg-white border border-[#E9E9E9] rounded-2xl p-6 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#1E1E1E]">{friend.next_due_date}</p>
              <p className="text-[11px] text-slate-500 mt-2 font-bold uppercase tracking-wider">Next Due Date</p>
            </div>
          </div>

          <div className="bg-white border border-[#E9E9E9] rounded-2xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-[#244D3F] text-lg">Relationship Goal</h3>
              <button className="px-4 py-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-bold text-slate-600">
                Edit
              </button>
            </div>
            <p className="text-sm text-slate-600">Connect every <span className="font-bold text-slate-900">{friend.goal} days</span></p>
          </div>

          <div className="bg-white border border-[#E9E9E9] rounded-2xl p-8 shadow-sm">
            <h3 className="font-bold text-[#244D3F] text-lg mb-8">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-6">
              <button 
                onClick={() => handleCheckIn('Call')}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#F1F5F9] hover:bg-slate-50 transition-all group"
              >
                <Phone size={24} className="text-slate-700" />
                <span className="text-sm font-bold text-slate-700">Call</span>
              </button>
              
              <button 
                onClick={() => handleCheckIn('Text')}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#F1F5F9] hover:bg-slate-50 transition-all group"
              >
                <MessageSquare size={24} className="text-slate-700" />
                <span className="text-sm font-bold text-slate-700">Text</span>
              </button>
              
              <button 
                onClick={() => handleCheckIn('Video')}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#F1F5F9] hover:bg-slate-50 transition-all group"
              >
                <Video size={24} className="text-slate-700" />
                <span className="text-sm font-bold text-slate-700">Video</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;