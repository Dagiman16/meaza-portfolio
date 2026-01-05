'use client';

import { useState, useEffect } from 'react';

interface MobileMenuProps {
  sections: string[];
  currentSection: number;
  onSectionChange: (index: number) => void;
}

export default function MobileMenu({ sections, currentSection, onSectionChange }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSectionClick = (index: number) => {
    onSectionChange(index);
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="lg:hidden mobile-menu-container">
      <button
        onClick={toggleMenu}
        className={`relative p-2 rounded-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-orange-500 text-white shadow-lg' 
            : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
        }`}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
          }`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
          }`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`fixed top-16 sm:top-20 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 min-w-[200px] transition-all duration-300 ${
        isOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}>
        <div className="p-2">
          {sections.map((section, index) => (
            <button
              key={section}
              onClick={() => handleSectionClick(index)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group ${
                currentSection === index 
                  ? 'text-orange-500 bg-orange-50 shadow-sm' 
                  : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              <div className="flex flex-col">
                <span className="capitalize font-semibold">
                  {section === 'hero' ? 'Home' : section}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  {section === 'hero' && 'Welcome & Introduction'}
                  {section === 'about' && 'Professional Background'}
                  {section === 'skills' && 'Core Competencies'}
                  {section === 'achievements' && 'Awards & Recognition'}
                  {section === 'experience' && 'Professional Journey'}
                  {section === 'contact' && 'Get In Touch'}
                </span>
              </div>
              
              {/* Active Indicator */}
              {currentSection === index && (
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-sm" />
              )}
              
              {/* Hover Arrow */}
              <svg 
                className={`w-4 h-4 transition-all duration-200 ${
                  currentSection === index 
                    ? 'opacity-100 text-orange-500' 
                    : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
        
        {/* Menu Footer */}
        <div className="border-t border-gray-100 p-3">
          <div className="text-xs text-gray-500 text-center">
            Navigate through sections • {sections.length} sections total
          </div>
        </div>
      </div>
    </div>
  );
}