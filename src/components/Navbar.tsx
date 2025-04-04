'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import navigationMenu from '@/data/navigation-menu';

import Button from '@/components/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (url: string) => {
    router.push(url);
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center md:gap-8 container-md py-3 md:py-4">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/icons/videfly-logo-white-bg-transparent-1.svg"
          alt="Videfly logo"
          width={120}
          height={120}
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-around flex-1 max-w-[642px]">
        {navigationMenu.map((navItem, i) => (
          <li
            key={i}
            className="text-sm lg:text-base text-paragraph transition-150 hover:scale-105"
          >
            <Link href={navItem.url}>{navItem.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <div className="h-[42px] transition-150 hover:scale-105 active:scale-95">
          <Link href="/auth/login">
            <Button text="Masuk" color="gray" border bold />
          </Link>
        </div>

        <div className="hidden md:block h-[42px] transition-150 hover:scale-105 active:scale-95">
          <Link href="/auth/register">
            <Button text="Buat Video" color="gradient" border bold />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden flex flex-col gap-[6px] cursor-pointer"
          onClick={handleToggleMenu}
        >
          <div
            className={`w-6 h-[2px] bg-paragraph rounded-full transition-150 ${isMenuOpen ? '-rotate-45 translate-y-[8px]' : ''}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-paragraph rounded-full transition-150 ${isMenuOpen ? 'scale-0' : ''}`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-paragraph rounded-full transition-150 ${isMenuOpen ? 'rotate-45 translate-y-[-8px]' : ''}`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="md:hidden absolute top-[100%] inset-x-0 z-40 mt-4 bg-white p-2 pb-6 rounded-lg drop-shadow-[0_4px_8px_var(--color-shadow)]"
          >
            <ul className="flex flex-col items-center gap-2">
              {navigationMenu.map((navItem, i) => (
                <li
                  key={i}
                  className="w-full rounded-sm text-center cursor-pointer transition-150 hover:bg-surface-500"
                  onClick={() => handleMenuClick(navItem.url)}
                >
                  <Link
                    href={navItem.url}
                    className="block w-full h-full py-2 px-2 text-paragraph"
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <div className="max-w-[300px] w-full transition-150 hover:scale-105">
                  <Link href="/auth/register">
                    <Button text="Buat Video" color="gradient" />
                  </Link>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
