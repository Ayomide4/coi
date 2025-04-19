"use client"
import Image from 'next/image'
import Link from 'next/link'
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
    <div className="fixed top-10 right-5 z-50 md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=""
        aria-label="Toggle Menu"
      >
        <Image
          src="hamburger.svg"
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
            <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ul className="space-y-10 text-6xl font-light">
                <li><Link href="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
                <li><Link href="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
                {/* Store page temporarily hidden
<li><Link href="/store" onClick={() => setIsOpen(false)}>STORE</Link></li>
*/}
                <li><Link href="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link></li>
                <li><Link href="/give" onClick={() => setIsOpen(false)}>GIVE</Link></li>
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
