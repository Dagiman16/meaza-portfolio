'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import MobileMenu from '../components/MobileMenu';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl animate-pulse" />
});

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const sections = [
    'hero',
    'about', 
    'skills',
    'achievements',
    'experience',
    'contact'
  ];

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isScrolling) return;

    if (isUpSwipe && currentSection < sections.length - 1) {
      // Swipe up - go to next section
      setIsScrolling(true);
      setCurrentSection(prev => prev + 1);
      setTimeout(() => setIsScrolling(false), 1000);
    }

    if (isDownSwipe && currentSection > 0) {
      // Swipe down - go to previous section
      setIsScrolling(true);
      setCurrentSection(prev => prev - 1);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      setIsScrolling(true);
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
      
      setTimeout(() => setIsScrolling(false), 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        setIsScrolling(true);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    // Add touch event listeners
    const handleTouchStart = (e: TouchEvent) => onTouchStart(e);
    const handleTouchMove = (e: TouchEvent) => onTouchMove(e);
    const handleTouchEnd = () => onTouchEnd();

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, sections.length, touchStart, touchEnd]);

  const scrollToSection = (index: number) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 touch-pan-y">
      {/* Enhanced Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection(0)}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="text-white font-bold text-lg sm:text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  Meaza Yimer
                </h1>
                <p className="text-xs sm:text-sm text-gray-500">Management Professional</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-gray-900 cursor-pointer">Meaza</h1>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(index)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group cursor-pointer nav-item ${
                    currentSection === index 
                      ? 'text-orange-500 bg-orange-50 shadow-md' 
                      : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                  title={`Navigate to ${section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)} section`}
                >
                  <span className="relative z-10 capitalize cursor-pointer">
                    {section === 'hero' ? 'Home' : section}
                  </span>
                  
                  {/* Enhanced Hover Effect Background */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-15 transition-all duration-300 cursor-pointer ${
                    currentSection === index ? 'opacity-10' : ''
                  }`} />
                  
                  {/* Active Indicator with Glow */}
                  {currentSection === index && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full shadow-lg" />
                  )}
                  
                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full group-hover:w-6 transition-all duration-300" />
                  
                  {/* Section Preview Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                    {section === 'hero' && 'Welcome & Introduction'}
                    {section === 'about' && 'Professional Background'}
                    {section === 'skills' && 'Core Competencies & Expertise'}
                    {section === 'achievements' && 'Awards & Recognition'}
                    {section === 'experience' && 'Professional Journey'}
                    {section === 'contact' && 'Get In Touch'}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <MobileMenu sections={sections} currentSection={currentSection} onSectionChange={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Enhanced Section Indicators */}
      <div className="fixed right-3 sm:right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer section-indicator shadow-lg ${
                currentSection === index 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 scale-125 ring-2 ring-orange-200 ring-opacity-50' 
                  : 'bg-gray-300 hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-400'
              }`}
            />
            {/* Enhanced Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl z-50">
              <div className="font-semibold">
                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
              <div className="text-gray-300 text-xs mt-1">
                {section === 'hero' && 'Welcome & Introduction'}
                {section === 'about' && 'Professional Background'}
                {section === 'skills' && 'Core Competencies'}
                {section === 'achievements' && 'Awards & Recognition'}
                {section === 'experience' && 'Professional Journey'}
                {section === 'contact' && 'Get In Touch'}
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Touch Instructions */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="bg-black/70 text-white px-4 py-2 rounded-full text-xs flex items-center space-x-2 backdrop-blur-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
          <span>Swipe up/down to navigate</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
          </svg>
        </div>
      </div>

      {/* Sections Container */}
      <div 
        className="flex flex-col h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 relative overflow-hidden py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Content */}
              <div className="text-white text-center lg:text-left order-2 lg:order-1">
                <div className="text-xs uppercase tracking-wider mb-3 text-orange-100">
                  Management Professional
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  Hello, I'm<br />
                  <span className="text-yellow-200">Meaza Yimer</span>
                </h1>
                <p className="text-sm sm:text-base mb-6 text-orange-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A dedicated management professional with proven academic excellence and leadership experience. 
                  Ready to drive organizational success through strategic thinking and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button 
                    onClick={() => scrollToSection(1)}
                    className="bg-white text-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer interactive-button text-sm"
                  >
                    Discover More
                  </button>
                  <a 
                    href="/resume.pdf" 
                    download="Meaza_Yimer_Resume.pdf"
                    className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer download-button text-sm"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              
              {/* Profile Image */}
              <div className="flex justify-center order-1 lg:order-2">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/30 shadow-2xl">
                    <img 
                      src="/meaza-photo.jpg" 
                      alt="Meaza Yimer - Management Professional" 
                      className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-xs text-orange-100">Scroll Down</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <div className="text-orange-500 text-xs uppercase tracking-wider mb-3">About Me</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Management Professional & Leader
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  As a graduated management professional, I bring a unique combination of academic excellence and 
                  practical leadership experience. My journey culminated in earning the Highest GPA Cup Award 
                  from Woldia University, establishing me as a top performer in my field.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  I specialize in strategic planning, team leadership, and organizational development. My expertise 
                  spans content creation, digital communication, and project management, making me well-equipped 
                  to drive business success in today's dynamic environment.
                </p>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 sm:p-6 shadow-lg comfort-shadow border border-orange-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Professional Background</h3>
                  <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                    <div className="flex justify-between">
                      <span>Degree:</span>
                      <span className="font-medium">Bachelor's in Management</span>
                    </div>
                    <div className="flex justify-between">
                      <span>University:</span>
                      <span className="font-medium">Woldia University</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="font-medium text-orange-600">Graduate & Professional</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Specialization:</span>
                      <span className="font-medium text-orange-600">Strategic Management</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center order-1 lg:order-2">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden border-4 sm:border-8 border-orange-100 shadow-2xl">
                    <img 
                      src="/meaza-photo.jpg" 
                      alt="Meaza Yimer - Professional" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-xl">
                    <div className="flex space-x-3 sm:space-x-4">
                      <a href="mailto:meaza@example.com" className="text-orange-500 hover:text-orange-600 transition-colors transform hover:scale-110 cursor-pointer social-link">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors transform hover:scale-110 cursor-pointer social-link">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="tel:+251903183983" className="text-orange-500 hover:text-orange-600 transition-colors transform hover:scale-110 cursor-pointer social-link">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section with 3D Animation */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <div className="text-orange-500 text-xs uppercase tracking-wider mb-3">Professional Expertise</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Core Competencies & Skills
              </h2>
              
              {/* 3D Scene Integration */}
              <div className="flex justify-center mb-6">
                <div className="w-48 h-24 sm:w-56 sm:h-28">
                  <ThreeScene />
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg comfort-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer skill-card border border-blue-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg cursor-pointer">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 cursor-pointer">Strategic Management</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Strategic Planning & Analysis</li>
                  <li>• Leadership & Team Development</li>
                  <li>• Decision Making & Problem Solving</li>
                  <li>• Organizational Development</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg comfort-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer skill-card border border-green-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg cursor-pointer">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 cursor-pointer">Professional Skills</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Advanced Communication</li>
                  <li>• Project Management</li>
                  <li>• Data Analysis & Reporting</li>
                  <li>• Stakeholder Management</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg comfort-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1 cursor-pointer skill-card border border-purple-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg cursor-pointer">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 cursor-pointer">Digital & Creative</h3>
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Content Strategy & Creation</li>
                  <li>• Digital Marketing</li>
                  <li>• Brand Development</li>
                  <li>• Innovation Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Achievements Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden py-8 sm:py-12">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500 rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-500 rounded-full animate-pulse delay-1000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-orange-500 text-xs uppercase tracking-wider mb-2 sm:mb-3">Professional Recognition</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Achievements & Awards
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-4 right-4 text-3xl sm:text-4xl opacity-20">🏆</div>
                <div className="absolute -top-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full" />
                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl mb-4 animate-bounce">🏆</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">Highest GPA Cup Award</h3>
                  <p className="text-yellow-100 text-sm sm:text-base mb-4">Woldia University - Management Department</p>
                  <p className="text-yellow-100 text-sm leading-relaxed">
                    Awarded for outstanding academic performance as the top-ranking graduate of the management department. 
                    This recognition represents dedication, consistency, and excellence in academic and professional development.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-5">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 sm:p-5 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl sm:text-3xl">🎓</div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-blue-900">Academic Excellence</h3>
                      <p className="text-sm sm:text-base text-blue-700">Bachelor's in Management - Graduate</p>
                      <p className="text-xs sm:text-sm text-blue-600 mt-1">Consistent high performance and leadership throughout studies</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 sm:p-5 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl sm:text-3xl">📈</div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-green-900">Leadership Excellence</h3>
                      <p className="text-sm sm:text-base text-green-700">Project Management & Team Leadership</p>
                      <p className="text-xs sm:text-sm text-green-600 mt-1">Successfully led multiple academic and professional projects</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 sm:p-5 border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl sm:text-3xl">⭐</div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-purple-900">Professional Development</h3>
                      <p className="text-sm sm:text-base text-purple-700">Content Strategy & Digital Innovation</p>
                      <p className="text-xs sm:text-sm text-purple-600 mt-1">Expertise in modern business communication and digital strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="text-orange-500 text-xs uppercase tracking-wider mb-2 sm:mb-3">Professional Journey</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Management Professional Experience
            </h2>
            
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -translate-y-10 translate-x-10 sm:-translate-y-12 sm:translate-x-12" />
              
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Strategic Leadership & Project Management</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                As a management graduate, I have successfully transitioned from academic excellence to professional competency. 
                My experience encompasses strategic project leadership, team coordination, and innovative problem-solving across 
                diverse organizational contexts. I specialize in bridging traditional management principles with modern digital strategies.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Core Competencies
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                    <li>• Strategic Planning & Implementation</li>
                    <li>• Cross-functional Team Leadership</li>
                    <li>• Process Optimization & Innovation</li>
                    <li>• Stakeholder Relationship Management</li>
                    <li>• Performance Analysis & Reporting</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Professional Skills
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-xs sm:text-sm">
                    <li>• Digital Transformation Leadership</li>
                    <li>• Content Strategy Development</li>
                    <li>• Data-Driven Decision Making</li>
                    <li>• Change Management</li>
                    <li>• Business Process Improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Now redirects to dedicated page */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden py-8 sm:py-12">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-orange-500/20 rounded-full animate-pulse delay-500" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="text-blue-300 text-xs uppercase tracking-wider mb-2 sm:mb-3">Professional Contact</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Let's Connect & Collaborate
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Ready to bring strategic management expertise and innovative solutions to your organization. 
              Open to professional opportunities, consulting projects, and strategic partnerships.
            </p>
            
            {/* Quick Contact Preview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1">Email</h3>
                <a href="mailto:meaza@example.com" className="text-blue-300 hover:text-white transition-colors text-xs">
                  meaza@example.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1">Phone</h3>
                <a href="tel:+251903183983" className="text-blue-300 hover:text-white transition-colors text-xs">
                  +251 903 183 983
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1">Telegram</h3>
                <a href="https://t.me/Amhaye11" className="text-blue-300 hover:text-white transition-colors text-xs">
                  @Amhaye11
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-sm sm:text-base font-bold mb-1">Instagram</h3>
                <a href="https://instagram.com/meaza_yimer" className="text-blue-300 hover:text-white transition-colors text-xs">
                  @meaza_yimer
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Full Contact Page</span>
              </a>
              <a 
                href="/resume.pdf" 
                download="Meaza_Yimer_Resume.pdf"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
              <button 
                onClick={() => scrollToSection(0)}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}