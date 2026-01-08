'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex flex-col">
      {/* Compact Navigation Header */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center h-10 sm:h-12">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <span className="text-white font-bold text-xs sm:text-sm">M</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold text-gray-900 cursor-pointer">Meaza Yimer</h1>
                <p className="text-xs text-gray-500">Management Professional</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-xs font-bold text-gray-900 cursor-pointer">Meaza</h1>
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-full font-semibold transition-all duration-300 cursor-pointer text-xs"
            >
              ← Portfolio
            </Link>
          </div>
        </div>
      </nav>

      {/* Compact Contact Content */}
      <div className="flex-1 p-2 sm:p-3 overflow-hidden">
        <div className="max-w-6xl mx-auto h-full flex flex-col">
          {/* Compact Header */}
          <div className="text-center mb-2">
            <div className="text-blue-300 text-xs uppercase mb-1">Contact</div>
            <h1 className="text-sm sm:text-base font-bold mb-1">Let's Connect</h1>
            <p className="text-xs text-blue-100 mb-2">Ready to collaborate on management and strategic projects.</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-2 flex-1 min-h-0">
            {/* Contact Cards - Compact */}
            <div className="space-y-1">
              <h2 className="text-xs font-bold mb-1">Contact Info</h2>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                <div className="bg-white/10 rounded-lg p-1.5 text-center cursor-pointer">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold">Email</h3>
                  <a href="mailto:meaza@example.com" className="text-blue-300 text-xs block truncate">meazayimer202@gmail.com</a>
                </div>
                
                <div className="bg-white/10 rounded-lg p-1.5 text-center cursor-pointer">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold">Phone</h3>
                  <a href="tel:+251903183983" className="text-blue-300 text-xs">+251 903 183 983</a>
                </div>
                
                <div className="bg-white/10 rounded-lg p-1.5 text-center cursor-pointer">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold">Telegram</h3>
                  <a href="https://t.me/Amhaye11" className="text-blue-300 text-xs">@Amhaye11</a>
                </div>
                
                <div className="bg-white/10 rounded-lg p-1.5 text-center cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold">Instagram</h3>
                  <a href="https://instagram.com/meaza_yimer" className="text-blue-300 text-xs">@meaza_yimer</a>
                </div>
              </div>
              
              {/* Resources */}
              <div className="mt-2">
                <h3 className="text-xs font-bold mb-1">Resources</h3>
                <div className="flex gap-1">
                  <a 
                    href="/resume.pdf" 
                    download="Meaza_Yimer_Resume.pdf"
                    className="bg-orange-500 text-white px-2 py-1 rounded text-xs cursor-pointer flex-1 text-center"
                  >
                    Resume
                  </a>
                  <a 
                    href="#" 
                    className="border border-white text-white px-2 py-1 rounded text-xs cursor-pointer flex-1 text-center"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Compact */}
            <div className="lg:col-span-2 bg-white/10 rounded-lg p-2">
              <h2 className="text-xs font-bold mb-2">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 rounded bg-white/10 border border-white/20 text-white text-xs"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 rounded bg-white/10 border border-white/20 text-white text-xs"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 rounded bg-white/10 border border-white/20 text-white text-xs"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-2 py-1 rounded bg-white/10 border border-white/20 text-white text-xs resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-3 py-1.5 rounded font-semibold text-xs cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Info - Very Compact */}
          <div className="mt-2 text-center">
            <div className="bg-white/5 rounded p-2">
              <h3 className="text-xs font-bold mb-1">Available For</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm">💼</div>
                  <span className="text-xs">Full-time</span>
                </div>
                <div>
                  <div className="text-sm">🤝</div>
                  <span className="text-xs">Consulting</span>
                </div>
                <div>
                  <div className="text-sm">🚀</div>
                  <span className="text-xs">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}