import { useContext } from 'react';
import { FriendContext } from '../context/FriendContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const Stats = () => {
  const { timeline } = useContext(FriendContext);

  const dataMap = timeline.reduce((acc, entry) => {
    const type = entry.type.charAt(0).toUpperCase() + entry.type.slice(1);
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(dataMap).map(name => ({
    name,
    value: dataMap[name]
  }));

  
  const COLORS = {
    Text: '#7E35E1',
    Call: '#244D3F',
    Video: '#37A163'
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-[70vh]">
      <h1 className="text-4xl font-bold text-[#1E1E1E] mb-10">Friendship Analytics</h1>

      <div className="bg-white border border-[#E9E9E9] rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
        <h2 className="text-lg font-bold text-slate-700 mb-8">By Interaction Type</h2>
        
        <div className="h-[400px] w-full">
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name] || '#64748B'} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-slate-600 font-medium text-sm ml-2">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 italic">
              <p>No interaction data available yet.</p>
              <p className="text-sm">Log a call, text, or video from a friend's profile to see stats!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;