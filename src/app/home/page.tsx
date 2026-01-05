'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 relative overflow-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
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
            </Link>

            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                About
              </Link>
              <Link href="/skills" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                Skills
              </Link>
              <Link href="/achievements" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                Achievements
              </Link>
              <Link href="/experience" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                Experience
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                Contact
              </Link>
            </div>

            {/* Back to Portfolio Button */}
            <Link 
              href="/"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-white text-center lg:text-left order-2 lg:order-1">
              <div className="text-xs sm:text-sm uppercase tracking-wider mb-4 text-orange-100">
                Management Professional
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Hello, I'm<br />
                <span className="text-yellow-200">Meaza Yimer</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-orange-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A dedicated management professional with proven academic excellence and leadership experience. 
                Ready to drive organizational success through strategic thinking and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/about"
                  className="bg-white text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer interactive-button text-center"
                >
                  Discover More
                </Link>
                <a 
                  href="/resume.pdf" 
                  download="Meaza_Yimer_Resume.pdf"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer download-button"
                >
                  Download CV
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img 
                    src="/meaza-photo.jpg" 
                    alt="Meaza Yimer - Management Professional" 
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <Link href="/about" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-all duration-300 cursor-pointer">
              About Me
            </Link>
            <Link href="/skills" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-all duration-300 cursor-pointer">
              My Skills
            </Link>
            <Link href="/contact" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-all duration-300 cursor-pointer">
              Contact
            </Link>
          </div>
          <div className="animate-bounce">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}