import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
      {/* Footer ekhane bosbe*/}
    </div>
  );
};

export default MainLayout;