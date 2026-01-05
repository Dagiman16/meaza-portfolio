'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../../components/ThreeScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl animate-pulse" />
});

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
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
              <Link href="/skills" className="px-4 py-2 rounded-lg text-sm font-medium text-orange-500 bg-orange-50 transition-all duration-300 cursor-pointer">
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

      {/* Skills Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="text-orange-500 text-xs sm:text-sm uppercase tracking-wider mb-4">Professional Expertise</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Core Competencies & Skills
            </h1>
            
            {/* 3D Scene Integration */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="w-64 h-32 sm:w-80 sm:h-40">
                <ThreeScene />
              </div>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
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

          {/* Skill Proficiency Bars */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skill Proficiency</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Strategic Planning</span>
                    <span className="text-sm text-gray-500">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Team Leadership</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Project Management</span>
                    <span className="text-sm text-gray-500">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Communication</span>
                    <span className="text-sm text-gray-500">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Content Creation</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Data Analysis</span>
                    <span className="text-sm text-gray-500">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation to other sections */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                ← About Me
              </Link>
              <Link href="/achievements" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                View Achievements →
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