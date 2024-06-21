import { SignedIn } from '@clerk/nextjs';
import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import {UserIcon} from 'lucide-react'
import {UserButton, SignedOut, SignInButton} from '@clerk/nextjs';

const Navbar = () => {
  return (
    <header className="bg-orange-50">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="text-orange-400 text-2xl font-bold ml-10">beije.</span>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-black text-base transition hover:underline" href="#"> Ürünler </a>
            </li>

            <li>
              <a className="text-black text-base transition hover:underline" href="#"> Biz Kimiz </a>
            </li>

            <li>
              <a className="text-black text-base transition hover:underline" href="#"> Bağış Kültürü </a>
            </li>

            <li>
              <a className="text-black text-base transition hover:underline" href="#"> Regl Testi! </a>
            </li>

            <li>
              <a className="text-black text-base transition hover:underline" href="#"> Kendi Paketini Oluştur </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4 m-4">
        <div className="sm:flex sm:gap-4">
        <FiShoppingCart className='w-6 h-6' />
        </div>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <UserIcon size={26} cursor={"pointer"}/>
          </SignInButton>
        </SignedOut>

        

        <div className="block md:hidden">
          <button className="rounded bg-orange-50 p-2 text-gray-800 transition ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Navbar