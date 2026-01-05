'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
              <Link href="/home" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-orange-500 bg-orange-50 transition-all duration-300 cursor-pointer">
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

      {/* About Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="text-orange-500 text-xs sm:text-sm uppercase tracking-wider mb-4">About Me</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Management Professional & Leader
            </h1>
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

              {/* Core Values */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Values & Principles</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 mb-2">Excellence</h4>
                    <p className="text-sm text-blue-700">Committed to delivering outstanding results in every project and responsibility.</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 mb-2">Innovation</h4>
                    <p className="text-sm text-green-700">Embracing creative solutions and modern approaches to traditional challenges.</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-900 mb-2">Leadership</h4>
                    <p className="text-sm text-purple-700">Inspiring and guiding teams toward shared goals and organizational success.</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-900 mb-2">Integrity</h4>
                    <p className="text-sm text-orange-700">Maintaining ethical standards and transparency in all professional interactions.</p>
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

          {/* Navigation to other sections */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/skills" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                View My Skills →
              </Link>
              <Link href="/achievements" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                See Achievements →
              </Link>
              <Link href="/experience" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                Professional Experience →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}