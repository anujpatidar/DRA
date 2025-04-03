'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'COMPANY', href: '/company' },
  { name: 'CAREERS', href: '/careers' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isMobile 
        ? 'bg-gradient-to-r from-[#C767FA] via-[#6f00d9] to-[#0504aa] shadow-inner shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.06)]' 
        : 'bg-gradient-to-r from-[#c767fa] via-[#6f00d9] to-[#0504aa] shadow-inner shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.06)]'
    }`}>
      <nav className="container-width flex items-center justify-between py-4" aria-label="Global">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="-m-1.5 p-1.5 hover-lift">
            <Image
              src="/logo.svg"
              alt="Architect Studio"
              width={217}
              height={30}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </motion.div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="rounded-lg p-2.5 text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:gap-x-8"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-white/80 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full opacity-70" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-[#C767FA] via-[#6f00d9] to-[#0504aa] px-[20px] py-6 sm:max-w-sm shadow-xl"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/logo.svg"
                  alt="Architect Studio"
                  width={217}
                  height={30}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <button
                type="button"
                className="rounded-lg p-2.5 text-white hover:bg-[#c767fa] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className=" divide-y divide-[#c767fa]/20">
                <div className="space-y-[40px] pt-[10vh]">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block rounded-lg text-[32px] font-semibold leading-7 text-white hover:bg-[#c767fa] hover:text-white transition-all"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
                          
              {/* Contact Links */}
              <div className="flex mt-[40px] pt-[20px] border-t border-[#ffffff] items-center gap-[20px]">

                <div className="flex items-center gap-[6px]">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M33.9012 30.127C34.2938 29.6882 34.6402 29.2263 35.0328 28.8337C36.3031 27.6327 37.7812 27.0322 39.5364 27.0553C40.5064 27.0553 41.4534 27.1246 42.3772 27.4018C44.502 28.0022 45.726 29.4803 46.3034 31.5358C46.7422 33.0832 46.8346 34.6768 46.8346 36.2704C46.8346 39.6423 46.8346 42.9912 46.8346 46.3631C46.8346 46.6864 46.7422 46.7557 46.442 46.7557C44.7098 46.7557 42.9777 46.7557 41.2455 46.7557C40.9453 46.7557 40.876 46.6633 40.876 46.3862C40.876 43.1759 40.876 39.9888 40.876 36.7785C40.876 35.9702 40.8298 35.1849 40.5988 34.3997C40.1831 32.9678 39.1438 32.2287 37.6426 32.298C35.5871 32.4135 34.5247 33.4297 34.2476 35.5083C34.1783 36.0164 34.1552 36.5014 34.1552 37.0095C34.1552 40.1273 34.1552 43.2452 34.1552 46.3631C34.1552 46.6633 34.0859 46.7557 33.7626 46.7557C32.0073 46.7557 30.2752 46.7557 28.5199 46.7557C28.2428 46.7557 28.1504 46.6864 28.1504 46.4093C28.1504 40.2428 28.1504 34.0763 28.1504 27.9099C28.1504 27.6096 28.2428 27.5403 28.543 27.5403C30.2059 27.5403 31.8688 27.5403 33.5085 27.5403C33.8088 27.5403 33.9012 27.6327 33.8781 27.933C33.8781 28.672 33.8781 29.4111 33.8781 30.1501L33.9012 30.127Z" fill="white"/>
  <path d="M24.4091 37.1933C24.4091 40.2419 24.4091 43.2905 24.4091 46.3391C24.4091 46.6855 24.3167 46.7779 23.9703 46.7779C22.2381 46.7779 20.506 46.7779 18.7738 46.7779C18.4967 46.7779 18.4043 46.7086 18.4043 46.4315C18.4043 40.265 18.4043 34.0754 18.4043 27.9089C18.4043 27.6549 18.4736 27.5625 18.7276 27.5625C20.4829 27.5625 22.2381 27.5625 23.9934 27.5625C24.3398 27.5625 24.386 27.7011 24.386 27.9782C24.386 31.0499 24.386 34.1216 24.386 37.2164L24.4091 37.1933Z" fill="white"/>
  <path d="M24.8935 21.4178C24.8935 23.3347 23.3461 24.9052 21.4292 24.9052C19.5353 24.9052 17.9648 23.3347 17.9648 21.4409C17.9648 19.5471 19.5353 17.9766 21.4292 17.9766C23.323 17.9766 24.8935 19.524 24.8935 21.4178Z" fill="white"/>
</svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
  <path 
    fillRule="evenodd" 
    clipRule="evenodd" 
    d="M32.796 17.6016C24.6825 17.6016 18.4004 23.5429 18.4004 31.5712C18.4004 35.7664 20.1253 39.4079 22.915 41.8994C23.1492 42.1124 23.2983 42.4105 23.2983 42.7299L23.3835 45.2853C23.4048 46.0946 24.2566 46.6269 25.0019 46.3075L27.8555 45.0511C28.0897 44.9446 28.3666 44.9233 28.6221 44.9872C29.9424 45.3492 31.3266 45.5409 32.796 45.5409C40.9094 45.5409 47.1915 39.5995 47.1915 31.5712C47.1915 23.5429 40.9094 17.6016 32.796 17.6016ZM41.4418 28.3556L37.2041 35.0636C36.5226 36.1284 35.0958 36.4052 34.0737 35.6386L30.709 33.1045C30.4109 32.8702 29.985 32.8702 29.6656 33.1045L25.1297 36.5543C24.5334 37.0228 23.7242 36.2988 24.1288 35.6386L28.3666 28.9306C29.048 27.8659 30.4748 27.589 31.497 28.3556L34.8616 30.8898C35.1597 31.124 35.5856 31.124 35.9051 30.8898L40.4409 27.44C41.0372 26.9715 41.8464 27.6955 41.4418 28.3556Z" 
    fill="white"
  />
</svg>
                </a>
                <a href="https://wa.me/079-26309789" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
  <path 
    fillRule="evenodd" 
    clipRule="evenodd" 
    d="M42.0913 21.3082C39.3833 18.6002 35.8155 17.1172 31.9898 17.1172C24.1236 17.1172 17.7188 23.522 17.7188 31.3882C17.7188 33.9029 18.3851 36.353 19.6316 38.5238L17.6113 45.9172L25.1767 43.9399C27.2615 45.079 29.6042 45.6808 31.9898 45.6808C39.8561 45.6808 46.2609 39.276 46.2609 31.4097C46.2609 27.6055 44.7779 24.0163 42.0913 21.3082ZM31.9898 43.2521C29.8621 43.2521 27.7773 42.6718 25.9504 41.5972L25.5206 41.3393L21.0287 42.5214L22.2322 38.1369L21.9528 37.6855C20.7707 35.7942 20.1474 33.6235 20.1474 31.3667C20.1474 24.833 25.4776 19.5029 32.0113 19.5029C35.1707 19.5029 38.1582 20.7494 40.3934 22.9847C42.6286 25.2199 43.8752 28.2073 43.8537 31.3667C43.8537 37.9005 38.5236 43.2306 31.9898 43.2306V43.2521ZM38.5021 34.3757C38.1367 34.2038 36.3958 33.3441 36.0734 33.2151C35.751 33.0861 35.5146 33.0432 35.2782 33.387C35.0418 33.7524 34.354 34.5476 34.1391 34.7841C33.9242 35.0205 33.7307 35.042 33.3654 34.87C33 34.6981 31.8609 34.3112 30.5069 33.1076C29.4537 32.162 28.723 31.0014 28.5295 30.636C28.3361 30.2706 28.508 30.0772 28.68 29.9052C28.8304 29.7548 29.0454 29.4969 29.2173 29.282C29.3892 29.067 29.4537 28.9166 29.5827 28.6802C29.7116 28.4438 29.6472 28.2288 29.5612 28.0569C29.4752 27.8849 28.766 26.1226 28.4651 25.4133C28.1857 24.7255 27.8848 24.8115 27.6698 24.8115C27.4549 24.8115 27.2185 24.8115 26.9821 24.8115C26.7457 24.8115 26.3588 24.8975 26.0364 25.2629C25.714 25.6282 24.7898 26.4879 24.7898 28.2288C24.7898 29.9697 26.0579 31.6676 26.2513 31.9255C26.4233 32.162 28.766 35.7727 32.3337 37.2987C33.1934 37.6641 33.8597 37.879 34.3755 38.0509C35.2352 38.3303 36.0089 38.2873 36.6322 38.2014C37.32 38.0939 38.7385 37.3417 39.0394 36.5035C39.3403 35.6652 39.3403 34.956 39.2543 34.8055C39.1683 34.6551 38.9319 34.5691 38.5666 34.3972L38.5021 34.3757Z" 
    fill="white"
  />
</svg>
                </a>
              </div>
                </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 