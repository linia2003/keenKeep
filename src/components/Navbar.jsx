import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
  const linkStyles = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
      isActive ? 'bg-[#244D3F] text-white' : 'text-slate-600 hover:bg-slate-50'
    }`;

  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {}
        <NavLink to="/" className="flex items-center">
          <img src="/icons/logo.png" alt="KeenKeeper" className="h-8 object-contain" />
        </NavLink>

        <div className="flex items-center gap-2 md:gap-4">
          <NavLink to="/" className={linkStyles}>
            <Home size={18} />
            <span className="hidden sm:inline font-medium">Home</span>
          </NavLink>
          <NavLink to="/timeline" className={linkStyles}>
            <Clock size={18} />
            <span className="hidden sm:inline font-medium">Timeline</span>
          </NavLink>
          <NavLink to="/stats" className={linkStyles}>
            <BarChart3 size={18} />
            <span className="hidden sm:inline font-medium">Stats</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;