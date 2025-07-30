'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
// import CreateSignIn from "@/Components/CreateSignIn";


export default function Header({ onSignInClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  // const [showSignIn, setShowSignIn] = useState(false)

  return (
    <div className="relative z-50">
      <nav className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/">
            <div className="text-xl font-bold text-[#111] flex items-center">
              <span className='font-sans'>rightmove</span>
              <span className="text-green-500 ml-1">▵</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-[#111] relative">
            <Link href="#" className="hover:text-blue-700">Buy</Link>
            <Link href="#" className="hover:text-blue-700">Rent</Link>

            {/* Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className={`hover:text-blue-700 cursor-pointer pb-2 border-b-2 transition ${dropdownOpen ? 'border-blue-700' : 'border-transparent'}`}>House Prices</span>

              {/* Dropdown Area with 35% Height and wrapping items into 2 columns */}
              {dropdownOpen && (
                <div
                  className="fixed left-0 top-[52px] w-full h-[20vh] bg-[#f5f6f7] border-t border-gray-300 shadow-md py-6 px-12 z-40"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="max-w-sm mx-96 grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-[#111] font-medium">
                    <Link href="#" className="hover:underline">Sold house prices</Link>
                    <Link href="#" className="hover:underline">Instant online valuation</Link>
                    <Link href="#" className="hover:underline">Property valuation</Link>
                    <Link href="#" className="hover:underline">How to value a house</Link>
                    <Link href="#" className="hover:underline">Check area prices</Link>
                    <Link href="#" className="hover:underline">Price trends near you</Link>
                  </div>

                </div>
              )}
            </div>

            <Link href="#" className="hover:text-blue-700">Find Agent</Link>
            <Link href="#" className="hover:text-blue-700">Commercial</Link>
            <Link href="#" className="hover:text-blue-700">Inspire</Link>
            <Link href="#" className="hover:text-blue-700">Overseas</Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4 text-sm">
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
            <SignedOut>
              <SignUpButton>
                <button onClick={onSignInClick}
                  className="px-4 py-1 rounded border border-green-500 text-green-600 hover:bg-green-100">
                  Sign up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </nav>
    </div>
  )
}
