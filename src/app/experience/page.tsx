'use client';

import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
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
              <Link href="/achievements" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer">
                Achievements
              </Link>
              <Link href="/experience" className="px-4 py-2 rounded-lg text-sm font-medium text-orange-500 bg-orange-50 transition-all duration-300 cursor-pointer">
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

      {/* Experience Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-orange-500 text-sm uppercase tracking-wider mb-4">Professional Journey</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              Management Professional Experience
            </h1>
          </div>
          
          {/* Main Experience Card */}
          <div className="bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -translate-y-16 translate-x-16" />
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Strategic Leadership & Project Management</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
              As a management graduate, I have successfully transitioned from academic excellence to professional competency. 
              My experience encompasses strategic project leadership, team coordination, and innovative problem-solving across 
              diverse organizational contexts. I specialize in bridging traditional management principles with modern digital strategies.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Core Competencies
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Strategic Planning & Implementation</li>
                  <li>• Cross-functional Team Leadership</li>
                  <li>• Process Optimization & Innovation</li>
                  <li>• Stakeholder Relationship Management</li>
                  <li>• Performance Analysis & Reporting</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Professional Skills
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Digital Transformation Leadership</li>
                  <li>• Content Strategy Development</li>
                  <li>• Data-Driven Decision Making</li>
                  <li>• Change Management</li>
                  <li>• Business Process Improvement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Development Journey</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-2">Academic Leadership Excellence</h4>
                      <p className="text-purple-700 text-sm mb-2">Woldia University - Management Department</p>
                      <p className="text-purple-600 text-sm mb-3">Led multiple academic projects and collaborative assignments while maintaining top academic performance</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Team Leadership</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Project Management</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Academic Excellence</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">Strategic Project Coordination</h4>
                      <p className="text-blue-700 text-sm mb-2">Cross-functional Team Management</p>
                      <p className="text-blue-600 text-sm mb-3">Successfully coordinated diverse teams across multiple projects, demonstrating strong organizational and communication skills</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Strategic Planning</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Team Coordination</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Communication</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">Content Strategy & Digital Innovation</h4>
                      <p className="text-green-700 text-sm mb-2">Digital Communication & Brand Development</p>
                      <p className="text-green-600 text-sm mb-3">Developed comprehensive content strategies and digital communication frameworks for modern business environments</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Content Strategy</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Digital Marketing</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Innovation</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div className="ml-12">
                    <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                      <h4 className="font-bold text-orange-900 mb-2">Professional Management Transition</h4>
                      <p className="text-orange-700 text-sm mb-2">Strategic Leadership & Organizational Development</p>
                      <p className="text-orange-600 text-sm mb-3">Successfully transitioned to professional management role with focus on strategic planning and organizational excellence</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Strategic Management</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Leadership</span>
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Professional Growth</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strategic Thinking</h3>
              <p className="text-gray-600 text-sm">Ability to analyze complex situations and develop comprehensive strategic solutions</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Team Leadership</h3>
              <p className="text-gray-600 text-sm">Proven ability to inspire, guide, and coordinate diverse teams toward common goals</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Creative problem-solving and implementation of modern solutions to traditional challenges</p>
            </div>
          </div>

          {/* Navigation to other sections */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/achievements" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                ← View Achievements
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                Get In Touch →
              </Link>
              <Link href="/home" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}