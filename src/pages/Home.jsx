import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import FriendCard from '../components/FriendCard';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        
        setTimeout(() => {
          setFriends(data);
          setLoading(false);
        }, 1000);
      });
  }, []);

  const totalFriends = friends.length;
const onTrackCount = friends.filter(f => f.status === 'on-track').length;
const needAttentionCount = friends.filter(f => f.status !== 'on-track').length;


const stats = [
  { value: totalFriends.toString(), label: "Total Friends" },
  { value: onTrackCount.toString(), label: "On Track" },
  { value: needAttentionCount.toString(), label: "Need Attention" },
  { value: "12", label: "Interactions This Month" } // Keep this hardcoded or add to JSON later
];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
        <p className="text-[#64748B] font-medium animate-pulse">Syncing your circle...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      {/* Banner Section */}
      <section className="py-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-sm md:text-base mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="flex items-center gap-2 bg-[#244D3F] text-white px-6 py-2.5 rounded-md font-medium hover:opacity-90 mx-auto transition-all">
          <Plus size={18} /> Add a Friend
        </button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-[#E9E9E9] rounded-xl p-8 flex flex-col items-center shadow-sm">
            <span className="text-3xl font-bold text-[#1E1E1E]">{stat.value}</span>
            <span className="text-[#64748B] text-sm font-medium">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Grid part */}
      <section>
        <h2 className="text-2xl font-bold text-[#1E1E1E] mb-8">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;