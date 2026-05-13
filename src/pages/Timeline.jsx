import { useContext, useState } from 'react';
import { FriendContext } from '../context/FriendContext';

const Timeline = () => {
  const { timeline } = useContext(FriendContext);
  const [filter, setFilter] = useState('All');

  const getIcon = (type) => {
    switch (type) {
      case 'call':
        return <img src="/icons/call.png" alt="Call" className="w-6 h-6 object-contain" />;
      case 'text':
        return <img src="/icons/text.png" alt="Text" className="w-6 h-6 object-contain" />;
      case 'video':
        return <img src="/icons/video.png" alt="Video" className="w-6 h-6 object-contain" />;
      default:
        return <img src="/icons/meetup.png" alt="Interaction" className="w-6 h-6 object-contain" />;
    }
  };

  const filteredTimeline = timeline.filter((entry) => {
    if (filter === 'All') return true;
    return entry.type.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 min-h-[60vh]">
      <h1 className="text-4xl font-bold text-[#1E1E1E] mb-8">Timeline</h1>

      <div className="mb-8">
        <select 
          className="select select-bordered w-full max-w-xs bg-white text-slate-500 font-medium border-[#E9E9E9] focus:outline-none focus:border-[#244D3F]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline (All)</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredTimeline.length > 0 ? (
          filteredTimeline.map((entry) => (
            <div 
              key={entry.id} 
              className="bg-white border border-[#E9E9E9] rounded-xl p-5 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl shrink-0">
                {getIcon(entry.type)}
              </div>
              
              <div className="flex flex-col">
                <h3 className="font-bold text-[#1E1E1E] text-lg leading-tight">
                  {entry.title}
                </h3>
                <p className="text-slate-400 text-sm font-medium mt-1">
                  {entry.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white border border-dashed border-slate-300 rounded-3xl">
            <p className="text-slate-400 font-medium italic">
              {filter === 'All' 
                ? "No interactions logged yet." 
                : `No ${filter} interactions found.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;