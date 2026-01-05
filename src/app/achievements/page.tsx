'use client';

import Link from 'next/link';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
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
              <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                About
              </Link>
              <Link href="/skills" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                Skills
              </Link>
              <Link href="/achievements" className="px-4 py-2 rounded-lg text-sm font-medium text-orange-500 bg-orange-50 transition-all duration-300 cursor-pointer">
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

      {/* Achievements Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-orange-500 text-sm uppercase tracking-wider mb-4">Professional Recognition</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Achievements & Awards
            </h1>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Main Achievement */}
            <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-6 right-6 text-6xl opacity-20">🏆</div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <div className="text-5xl mb-6 animate-bounce">🏆</div>
                <h3 className="text-2xl font-bold mb-4">Highest GPA Cup Award</h3>
                <p className="text-yellow-100 text-lg mb-6">Woldia University - Management Department</p>
                <p className="text-yellow-100 leading-relaxed">
                  Awarded for outstanding academic performance as the top-ranking graduate of the management department. 
                  This recognition represents dedication, consistency, and excellence in academic and professional development.
                </p>
              </div>
            </div>
            
            {/* Supporting Achievements */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Academic Excellence</h3>
                    <p className="text-blue-700">Bachelor's in Management - Graduate</p>
                    <p className="text-sm text-blue-600 mt-1">Consistent high performance and leadership throughout studies</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📈</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900">Leadership Excellence</h3>
                    <p className="text-green-700">Project Management & Team Leadership</p>
                    <p className="text-sm text-green-600 mt-1">Successfully led multiple academic and professional projects</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">⭐</div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900">Professional Development</h3>
                    <p className="text-purple-700">Content Strategy & Digital Innovation</p>
                    <p className="text-sm text-purple-600 mt-1">Expertise in modern business communication and digital strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Achievement Timeline</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500"></div>
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <h4 className="font-bold text-orange-900 mb-2">Highest GPA Cup Award</h4>
                      <p className="text-orange-700 text-sm mb-1">Woldia University - Management Department</p>
                      <p className="text-orange-600 text-xs">Top academic performer in graduating class</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">Bachelor's Degree Completion</h4>
                      <p className="text-blue-700 text-sm mb-1">Management Studies - Woldia University</p>
                      <p className="text-blue-600 text-xs">Graduated with distinction and comprehensive management knowledge</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">Leadership Recognition</h4>
                      <p className="text-green-700 text-sm mb-1">Academic and Professional Projects</p>
                      <p className="text-green-600 text-xs">Demonstrated exceptional leadership in team coordination and project management</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-2">Professional Transition</h4>
                      <p className="text-purple-700 text-sm mb-1">From Student to Management Professional</p>
                      <p className="text-purple-600 text-xs">Successfully transitioned to professional management role with strategic focus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="text-3xl font-bold text-orange-500 mb-2">1st</div>
              <div className="text-gray-600 text-sm">Rank in Class</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="text-3xl font-bold text-blue-500 mb-2">4.0</div>
              <div className="text-gray-600 text-sm">GPA Scale</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Dedication</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="text-3xl font-bold text-purple-500 mb-2">∞</div>
              <div className="text-gray-600 text-sm">Growth Potential</div>
            </div>
          </div>

          {/* Navigation to other sections */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/skills" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                ← View Skills
              </Link>
              <Link href="/experience" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                Professional Experience →
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                Get In Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}