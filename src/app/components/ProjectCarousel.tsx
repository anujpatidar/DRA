'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Custom hook for detecting mobile screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Sample project data - you can replace this with your actual data
const projects = [
  {
    id: 1,
    title: 'A PAVEMENT OF TRANSFORMATION',
    description: 'DND - Faridabad - Sohna',
    image: '/projects/project1.jpg',
    mobileImage: '/projects/mobile/project1-mobile.jpg',
    href: '/projects/dnd-faridabad',
  },
  {
    id: 2,
    title: 'A Journey in the Making',
    description: 'The Mumbai-Ahmedabad High-Speed Rail',
    image: '/projects/project2.jpg',
    mobileImage: '/projects/mobile/project2-mobile.jpg',
    href: '/projects/mumbai-ahmedabad-rail',
  },
  {
    id: 3,
    title: 'The Global City Development',
    description: 'A Vision for Gurugram',
    image: '/projects/project3.jpg',
    mobileImage: '/projects/mobile/project3-mobile.jpg',
    href: '/projects/global-city-development',
  },
  {
    id: 4,
    title: 'The Underground Odyssey',
    description: 'Chennai Metro Rail Project',
    image: '/projects/project4.jpg',
    mobileImage: '/projects/mobile/project4-mobile.jpg',
    href: '/projects/chennai-metro',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function ProjectCarousel() {
  const [[page, direction], setPage] = useState([0, 0]);
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
    setMounted(true);
  }, []);

  const imageIndex = Math.abs(page % projects.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [page, mounted]);

  return (
    <div className="relative w-full h-[720px] md:h-[720px] overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full"
        >
          <Link href={projects[imageIndex].href} className="relative block w-full h-full group cursor-pointer">
            <Image
              src={isMobile ? projects[imageIndex].mobileImage : projects[imageIndex].image}
              alt={projects[imageIndex].title}
              fill
              className="object-cover transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0  duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Indicators */}
      <Link href={projects[imageIndex].href} className=" cursor-pointer">
      <div className={`absolute  ${ isMobile ? 'bottom-20 bg-[#ffffff15] p-[24px] rounded-full left-[50%] translate-x-[-50%]' : 'top-[30vh] right-[10vh]'} flex gap-[6px] cursor-pointer p-2 md:p-3  z-10`}>
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 1L1 25.2382" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.5 1H26V22.8144" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </div>
      </Link>

      <div className={`absolute bottom-8 ${ isMobile ? 'left-[50%] translate-x-[-50%]' : 'right-[10vh]'} flex gap-[6px]  p-2 md:p-3  z-10`}>
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage([index, index > imageIndex ? 1 : -1])}
            className={`transition-all duration-300 rounded-full ${
              index === imageIndex 
                ? 'w-[12px] md:w-[12px] h-[12px] md:h-[12px] bg-[#c767fa]' 
                : 'w-[12px] md:w-[12px] h-[12px] md:h-[12px] bg-[#d9d9d9] hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 