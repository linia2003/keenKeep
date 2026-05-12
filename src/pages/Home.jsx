import { Plus, Users, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

const Home = () => {
  //  4 summary cards  er data
  const stats = [
    { label: "Total Friends", value: "10", icon: <Users className="text-blue-500" /> },
    { label: "On Track", value: "3", icon: <CheckCircle className="text-green-500" /> },
    { label: "Need Attention", value: "6", icon: <AlertCircle className="text-yellow-500" /> },
    { label: "Interactions This Month", value: "12", icon: <MessageSquare className="text-purple-500" /> },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Banner  */}
      <section className="text-center space-y-6 pt-10">
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
            Friends to keep close in your life
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the 
            relationships that matter most.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 bg-[#1A4D43] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#143d35] transition-colors">
          <Plus size={20} />
          Add a Friend
        </button>
      </section>

      {/* Summary Cards parts*/}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center space-y-2 transition-transform hover:scale-[1.02]"
          >
            <span className="text-4xl font-bold text-slate-800">{stat.value}</span>
            <span className="text-slate-500 font-medium">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Your Friends Section  */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-slate-800">Your Friends</h2>
        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {}
        </div>
      </section>
    </div>
  );
};

export default Home;