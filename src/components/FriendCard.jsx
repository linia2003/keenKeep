import { useNavigate } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const navigate = useNavigate();

  
  const getStatusStyles = (status) => {
    switch (status) {
      case 'overdue':
        return 'bg-[#FF4D4D] text-white';
      case 'almost due':
        return 'bg-[#FFB347] text-white';
      case 'on-track':
        return 'bg-[#244D3F] text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div 
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="bg-white border border-[#E9E9E9] rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-all group"
    >
      {}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-[#244D3F] transition-colors">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {}
      <h3 className="text-lg font-bold text-[#1E1E1E] mb-1">{friend.name}</h3>
      <p className="text-xs text-[#64748B] mb-3">{friend.days_since_contact}d ago</p>

      {}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold uppercase rounded-full tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {}
      <div className={`px-4 py-1 rounded-full text-[10px] font-bold capitalize ${getStatusStyles(friend.status)}`}>
        {friend.status}
      </div>
    </div>
  );
};

export default FriendCard;