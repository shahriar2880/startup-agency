import React from 'react'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
      {/* left column */}
      <div className='w-full md:w-1/2 space-y-8'>
        {/* start badge */}
        <div className='flex  items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full hover:bg-gray-300 transition-colors coursor-pointer group'>
            <span className='text-blue-600 group-hover:100 transition-transform'>★</span>
            <span className='text-sm font-medium'>Jump start your growth</span>
        </div>
      </div>

      {/* right column */}
      <div className='w-full md:w-1/2'>
        right column
      </div>
    </section>
  )
}

export default Hero
