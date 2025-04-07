'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCarousel from '../components/ProjectCarousel';
import ExpertiseAreas from '../components/ExpertiseAreas';
import Stats from '../components/StatsStrip';
import BoardMemberCard from '../components/BoardMembers';

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
export default function About() {
  const isMobile = useIsMobile();
  return (
    <main className="min-h-screen max-w-[1600px] mx-auto">
      <ProjectCarousel />
      {/* Mission Section */}
      <section className="px-[20px] md:px-[80px] lg:px-[100px] w-full pt-[40px] overflow-hidden relative ">
        <div className='w-full relative rounded-[24px] overflow-hidden  h-[380px] md:h-[290px]'>
        <Image
          src={isMobile ? "/about/about-banner-mobile.jpg" : "/about/about-banner.jpg"}
          alt="Construction site"
          fill
          className="object-cover static"
        />
        <div className="relative z-10 h-full flex flex-col  md:justify-center md:px-[40px] px-[20px] md:py-[0] py-[20px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] text-white font-medium leading-tight max-w-[600px]"
          >
            We are 'Dineshchandra R. Agrawal Infracon Pvt. Ltd.'
          </motion.h1>
        </div>
        </div>

     

      </section>

      <div className='w-[full] overflow-hidden '>
        <Stats />
      </div>
      <section className="pt-[40px]">
        <div className="px-[20px] md:px-[80px] lg:px-[100px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#252525] text-[14px]  leading-auto mb-[20px]"
          >
            We are helping shape and redefine India's infrastructure sector, with a remarkable legacy that traces back to 1972. Over the past five decades, we have not only driven significant infrastructural advancements but have also contributed to the socio-economic landscape of the country. With a vision for a developed yet sustainable future, our projects prioritize environmental consciousness while delivering excellence.
          </motion.p>
          <hr className='w-full px-[20px] md:px-[80px] lg:px-[100px] border-t-[1px] border-[#dddddd]' />
        </div>
      </section>
      {/* About Content Section */}
        <section className=" px-[20px] md:px-[80px] lg:px-[100px]">
        <div className="">
          {/* Purpose Part */}
          <div className="w-full py-[20px] flex sm:flex-row flex-col md:gap-[100px] gap-[20px] items-center justify-start ">
            <div className="relative rounded-[24px] lg:h-[300px] lg:w-[400px] w-full h-[200px]  overflow-hidden">
              <Image
                src="/about/ourpurpose.jpg"
                alt="Our facilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full  flex flex-col gap-[40px]">
              <div className='flex flex-col gap-[24px]'>
              <h2 className="text-[32px] leading-[1] font-medium text-[#000000]">Our Purpose</h2>
              <p className="text-[14px] text-[#000000] font-medium">
                Creating a blend of innovation and responsibility
              </p>
              </div>

              <div className="flex flex-col ">
                <p className="text-[14px] text-[#252525] leading-[1.2]">
                  We, as a company, have dedicated ourselves to Integrity, Commitment to Quality, Striving for Excellence, Diligence for Safety, Punctual deliveries of projects, Consumer Satisfaction
                  <br/><br/>
                  And while doing all of this, we try to stay true to our promise of sustainability by focusing the results that benefit the nature and the nation.
                </p>
              </div>
            </div>
          </div>
          <hr className='w-full px-[20px] md:px-[80px] lg:px-[100px] border-t-[1px] border-[#dddddd]' />

          {/* Beliefs Part */}
          <div className="w-full py-[20px] flex sm:flex-row flex-col md:gap-[100px] gap-[20px] items-center justify-start ">
            <div className="relative rounded-[24px] md:h-[300px] md:w-[400px] w-full h-[200px] overflow-hidden">
              <Image
                src="/about/ourbelief.jpg"
                alt="Our facilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full flex flex-col gap-[40px]">
              <div className='flex flex-col gap-[24px]'>
              <h2 className="text-[32px] leading-[1] font-medium text-[#000000]">Our Beliefs</h2>
              <p className="text-[14px] text-[#000000] font-medium">
              Defining our journey towards the future
              </p>
              </div>

              <div className="flex flex-col ">
                <p className="text-[14px] text-[#252525] leading-[1.2]">
                In achieving our vision 'to become a leading global flagship company in the infrastructure sector' we are guided by principles that keep us on our path.
                <br/><br/>
                We are passionate about 'our people', 'our process' and 'our products'. We believe in building lasting relationships for a stronger future. We embrace collaboration, and create space for equal opportunities, nurturing talent, and growth. We uphold our ethics while creating impressions around the world
                </p>
              </div>
            </div>
          </div>
          <hr className='w-full px-[20px] md:px-[80px] lg:px-[100px] border-t-[1px] border-[#dddddd]' />
 
        </div>
      </section>
      <ExpertiseAreas />

      {/* Awards and Accolades Section */}
      <section className="relative">
        {/* Purple Gradient Header with SVG Background */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#6F00D9] to-[#0504AA] py-[40px] px-[20px] md:px-[80px] lg:px-[100px]">
          {/* SVG Background Pattern */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: 'url("/images/frame-36.svg")',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'overlay',
              opacity:2,
              transform: ' scale(2.5)'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="md:text-[32px] text-[30px] font-medium text-white">Awards and Accolades</h2>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="bg-[#F3F1F8] w-full px-[20px] md:px-[80px] lg:px-[100px] py-[40px] md:py-[80px]">
          <div className="">
            <div className="w-full grid md:grid-cols-2 gap-x-[80px] md:gap-y-[80px] gap-y-[40px]">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/icons/award-badge.svg"
                      alt="Award badge"
                      width={120}
                      height={120}
                      className="text-[#6F00D9]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-[14px] text-gray-500">2024</span>
                    <hr className='w-full border-t-[1px] border-[#dddddd]' />
                    <h3 className="text-[18px] font-medium text-gray-900">
                      Innovative Design Award
                    </h3>
                    <p className="text-[12px] text-gray-500 leading-[1.6]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
} 