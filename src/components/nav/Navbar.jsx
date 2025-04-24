import React from 'react'

const Navbar = () => {

  const navlinks = [
    { href: '#Home', label: 'Home' },
    { href: '#About', label: 'About Us' },
    { href: '#Services', label: 'Services' },
    { href: '#Contact', label: 'Contact' },
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
        {/* get in touch */}
        {/* mobile menu */}
      </div>
    </nav>
  )
}

export default Navbar
