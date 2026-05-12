import { Plus } from 'lucide-react';

const Home = () => {
  
  const stats = [
    { value: "10", label: "Total Friends" },
    { value: "3", label: "On Track" },
    { value: "6", label: "Need Attention" },
    { value: "12", label: "Interactions This Month" }
  ];

  return (
    <div className="flex flex-col items-center">
      
      {/* 2. Banner Section */}
      <section className="py-16 text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-sm md:text-base mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>
        
        <button className="flex items-center gap-2 bg-[#244D3F] text-white px-6 py-2.5 rounded-md font-medium hover:opacity-90 transition-all mx-auto">
          <Plus size={18} />
          Add a Friend
        </button>
      </section>

      {/* Summary Cards Row */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mb-16">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white border border-[#E9E9E9] rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-sm"
          >
            <span className="text-3xl font-bold text-[#1E1E1E] mb-1">{stat.value}</span>
            <span className="text-[#64748B] text-sm font-medium">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Friends Heading */}
      <div className="w-full px-4 text-left">
        <h2 className="text-2xl font-bold text-[#1E1E1E] mb-8">Your Friends</h2>
      </div>

    </div>
  );
};

export default Home;