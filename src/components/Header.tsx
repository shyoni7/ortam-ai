'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MenuItem {
  href: string
  label: string
}

const menuItems: MenuItem[] = [
  { href: '/', label: 'בית' },
  { href: '/services', label: 'שירותים' },
  { href: '/about', label: 'אודות' },
  { href: '/blog', label: 'בלוג' },
  { href: '/contact', label: 'צור קשר' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container-max px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Ortam AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Link 
              href="/contact"
              className="btn-primary"
            >
              התחל עכשיו
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="תפריט ניווט"
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="btn-primary mx-4 mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                התחל עכשיו
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
