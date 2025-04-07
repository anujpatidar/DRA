'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCarousel from '../components/ProjectCarousel';
import Link from 'next/link';
import Leaders from '../components/Leaders';
import BoardMembers from '../components/BoardMembers';



const stats = [
  { number: '15+', label: 'Years of Experience' },
  { number: '200+', label: 'Projects Completed' },
  { number: '50+', label: 'Professional Team Members' },
  { number: '25+', label: 'Industry Awards' },
];

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

export default function Company() {
  const isMobile = useIsMobile();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ProjectCarousel />
            {/* Mission Section */}
            <section className="px-[20px] md:px-[80px] lg:px-[100px] w-full pt-[40px] overflow-hidden relative ">
        <div className='w-full relative rounded-[24px] overflow-hidden h-[380px] md:h-[290px]'>
        <Image
          src={isMobile ? "/company/company-banner-mobile.jpg" : "/company/company-banner.jpg"}
          alt="Construction site"
          fill
          className="object-cover static"
        />
        <div className="relative z-10 h-full flex flex-col  md:justify-center md:px-[40px] px-[20px] md:py-[0] py-[20px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] text-white font-gotham font-medium leading-tight max-w-[600px]"
          >
            Our Leaders - Ones who guide us to become better and transform the world
          </motion.h1>
        </div>
        </div>

     

      </section>
     
     

      <BoardMembers />

    </main>
  );
} 