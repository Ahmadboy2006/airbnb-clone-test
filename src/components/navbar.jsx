import React, { useState, useEffect } from 'react'
import logoSvgLong from '../../public/airbnb_long.svg'
import logoSvgShort from '../../public/airbnb_short.svg'
import { Search, Globe, Menu, Home, Balloon, CookingPot } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <div className={`w-full transition-all duration-300 ${scrolled ? 'fixed top-0 left-0 z-50 bg-navbar shadow-md' : 'bg-navbar shadow-md'}`}>
      <div className={`flex flex-col w-full justify-between md:justify-start ${!scrolled ? 'h-38 md:h-48' : 'h-26 '} px-6 md:px-12`}>
        
        <div className='hidden md:flex justify-between items-center h-24'>
          
          <div className='w-1/12 lg:w-2/12'>
            <a href="/" className='block w-24'>
              <img src={logoSvgLong} alt="Airbnb" className='hidden lg:block w-full h-full object-contain' />
              <img src={logoSvgShort} alt="Airbnb" className='block lg:hidden w-7 h-7 object-contain' />
            </a>
          </div>
          
          <div className='flex items-center justify-center transition-all duration-300'>
            {!scrolled ? (
              // Scroll bo'lmagan holatdagi kategoriyalar
              <div className="flex items-center justify-center gap-10 transition-all duration-300">

                {/* Homes */}
                <button className="group flex flex-col items-center gap-1 text-sm font-medium text-black">
                  <div className='flex gap-3 items-center'>
                    <Home
                      size={30}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className='font-semibold'>Homes</span>
                  </div>
                  <div className="h-0.5 w-full bg-black"></div>
                </button>

                {/* Experiences */}
                <button className="group flex flex-col items-center gap-1 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <div className='flex gap-3 items-center'>
                    <Balloon
                      size={30}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className='font-semibold'>Experiences</span>
                  </div>
                  <div className="h-0.5 w-0 bg-black transition-all duration-300 group-active:w-full"></div>
                </button>

                {/* Services */}
                <button className="group flex flex-col items-center gap-1 text-sm font-medium text-gray-500 hover:text-black transition-colors">
                  <div className='flex gap-3 items-center'>
                    <CookingPot
                      size={30}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className='font-semibold'>Services</span>
                  </div>
                  <div className="h-0.5 w-0 bg-black transition-all duration-300 group-active:w-full"></div>
                </button>

              </div>
            ) : (
              // Scroll bo'lgan holatdagi qisqa search bar
              <div className='w-93.75 h-11.5 flex items-center border border-gray-300 rounded-full shadow-sm hover:shadow-lg transition-shadow bg-white'>
                <div className='w-5/12 flex items-center justify-center gap-2 p-1.5 border-r border-gray-200 rounded-l-full transition-colors cursor-pointer'>
                  <Home
                    size={30}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className='text-sm font-semibold'>Anywhere</p>
                </div>
                <div className='w-3/12 flex items-center justify-center p-1.5 border-r border-gray-200 transition-colors cursor-pointer'>
                  <p className='text-sm font-semibold'>Anytime</p>
                </div>
                <div className='w-5/12 flex items-center pl-4 p-1.5 justify-between rounded-r-full transition-colors cursor-pointer'>
                  <p className='text-sm font-semibold'>Add guests</p>
                  <div className='w-8 h-8 flex items-center justify-center bg-rose-500 rounded-full'>
                    <Search className='w-3 h-3 text-white' />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='flex items-center justify-end gap-2 transition-all duration-300'>
            <button className="hidden lg:block text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer">
              Become a host
            </button>
            <button className='w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 cursor-pointer'>
              <Globe className='w-4 h-4' />
            </button>
            <button className='w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-300 cursor-pointer'>
              <Menu className='w-4 h-4' />
            </button>
          </div>
        </div>

        <div className={`w-full ${!scrolled ? 'h-1/2' : 'h-8/12 md:h-0'} flex items-end md:items-start`}>
          <div className={`w-full flex justify-center transition-all duration-500 ease-in-out transform ${!scrolled ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:-translate-y-4 md:pointer-events-none md:h-0 md:overflow-hidden'
            }`}>
            {!scrolled && (
              <div className='w-full max-w-212.5 h-16.5 bg-white hidden md:flex items-center border border-gray-300 rounded-full shadow-lg transition-all duration-300'>
  
                <div className='w-4/12 h-full rounded-full flex justify-center pl-6 flex-col hover:bg-gray-200 cursor-pointer transition-all duration-300'>
                  <p className='text-xs font-semibold'>Where</p>
                  <p className='text-sm text-gray-500'>Anywhere</p>
                </div>
                
                <div className='w-4/12 h-full transition-all duration-300 border-x border-gray-200 rounded-l-xs rounded-r-xs'>
                  <div className='w-full h-full flex justify-center flex-col pl-6 rounded-full hover:bg-gray-200 cursor-pointer'>
                    <p className='text-xs font-semibold'>When</p>
                    <p className='text-sm text-gray-500'>Anytime</p>
                  </div>
                </div>
                
                <div className='w-4/12 h-full rounded-full flex items-center justify-between pl-6 pr-2 hover:bg-gray-200 cursor-pointer transition-all duration-300'>
                  <div>
                    <p className='text-xs font-semibold'>Who</p>
                    <p className='text-sm text-gray-500'>Add guests</p>
                  </div>
                  <div className='rounded-full bg-rose-500 w-12 h-12 flex items-center justify-center hover:bg-rose-600 transition-all duration-300'>
                    <Search className='text-white' size={20} />
                  </div>
                </div>
              </div>
            )}
            <div className='w-full h-14 bg-white flex md:hidden justify-center items-center gap-2 border border-gray-300 rounded-full shadow-md hover:border-black cursor-pointer'>
              <Search className='text-black' size={12} strokeWidth={3} />
              <p className='font-semibold'>Start your search</p>
            </div>
          </div>
        </div>

        <div className={`md:hidden w-full ${!scrolled ? 'h-1/2' : 'h-2/12'} flex items-end`}>
          <div className='w-full md:hidden flex items-center justify-center transition-all duration-300'>
            <div className="w-full flex items-center justify-around gap-10 transition-all duration-300">

              <button className="group flex flex-col items-center gap-1 text-sm font-medium">
                <Home
                  className={`${!scrolled ? 'block' : 'hidden'}`}
                  size={30}
                />
                <span className='font-semibold text-gray-500'>Homes</span>
                <div className="h-1 w-full bg-black"></div>
              </button>

              <button className="group flex flex-col items-center gap-1 text-sm font-medium">
                <Balloon
                  className={`${!scrolled ? 'block' : 'hidden'}`}
                  size={30}
                />
                <span className='font-semibold text-gray-500'>Experiences</span>
                <div className="h-1 w-0 bg-black transition-all duration-300 group-active:w-full"></div>
              </button>

              <button className="group flex flex-col items-center gap-1 text-sm font-medium">
                <CookingPot
                  className={`${!scrolled ? 'block' : 'hidden'}`}
                  size={30}
                />
                <span className='font-semibold text-gray-500'>Services</span>
                <div className="h-1 w-0 bg-black transition-all duration-300 group-active:w-full"></div>
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className={`w-full h-px bg-gray-200 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  )
}

export default Navbar