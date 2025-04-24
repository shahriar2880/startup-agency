import React, { useState } from 'react'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  const navlinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
    { href: '#testimonials', label: 'Testimonials' },
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 shadow-sm backdrop-blur-sm z-50 border-b border-gray-200'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>

        {/* logo */}
        
        <div className='flex items-center gap-1 cursor-pointer'>
          <div className='w-6 h-6 bg-blue-700 rounded-full opacity-70 hover:opacity-100 transition-opacity'></div>
          <div className='w-6 h-6 -ml-4 bg-red-700 rounded-full opacity-100 hover:opacity-70 transition-opacity'></div>
          <div className='flex flex-row items-center gap-1'>
          <span className='text-xl font-bold text-gray-700'>Software</span>
          <span className='text-xl font-bold text-gray-500'>Socket.io</span>
          </div>
        </div>

        {/* desktop navitems */}

        <div className='hidden md:flex items-center gap-8'>
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === link.href ? 'text-blue-700 after:w-full' : 'text-gray-500 hover:text-gray-900'}`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* get in touch */}

        <button>
          <a href="#newsletter" className='hidden md:block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100'>Get in Touch</a>
        </button>

        {/* mobile menu */}
      </div>
    </nav>
  )
}

export default Navbar
