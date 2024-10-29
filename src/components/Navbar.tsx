import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, BookOpen, Image } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'About', icon: User },
  { name: 'Projects', icon: Briefcase },
  { name: 'Blog', icon: BookOpen },
  { name: 'Gallery', icon: Image },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">FOSS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`${
                    activeItem === item.name
                      ? 'bg-purple-800 text-white'
                      : 'text-gray-300 hover:bg-purple-800 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsOpen(false);
                }}
                className={`${
                  activeItem === item.name
                    ? 'bg-purple-800 text-white'
                    : 'text-gray-300 hover:bg-purple-800 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center gap-2`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}