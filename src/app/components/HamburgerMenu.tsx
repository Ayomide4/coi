"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="fixed top-10 right-5 z-50">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className=""
        aria-label="Toggle Menu"
      >
         <Image 
          src="/assets/hamburger.svg"
          alt=""
          width={40}
          height={40}
          className="text-current"
        />      </button>

      {/* Modal/Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#101D1B]">
          <div className="fixed right-0 top-0 overflow-hidden h-screen w-full shadow-lg p-5 flex items-center justify-center ">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-4xl"
            >
              ✕
            </button>
            <nav className="absolute top-30">
              <ul className="space-y-10 text-6xl font-light">
                <li><a href="#vision">HOME</a></li>
                <li><a href="#gallery">ABOUT</a></li>
                <li><a href="#store">STORE</a></li>
                <li><a href="#store">GIVE</a></li>
              </ul>
            </nav>
          </div>
          <h2 className='text-6xl font-light absolute bottom-5 left-5'>COI.</h2>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu