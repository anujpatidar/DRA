'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import ProjectCarousel from './components/ProjectCarousel';
import StatsStrip from './components/StatsStrip';
import Leaders from './components/Leaders';
import ExpertiseAreas from './components/ExpertiseAreas';
import Contact from './components/Contact';
import FeaturedProjects from './components/FeaturedProjects';

const featuredProjects = [
  {
    id: 1,
    title: 'Modern Urban Living',
    description: 'Contemporary residential complex with sustainable features',
    image: '/projects/project1.jpg',
    category: 'Residential',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    description: 'State-of-the-art office building with innovative design',
    image: '/projects/project2.jpg',
    category: 'Commercial',
  },
  {
    id: 3,
    title: 'Cultural Center',
    description: 'Multi-purpose venue celebrating arts and community',
    image: '/projects/project3.jpg',
    category: 'Cultural',
  },
];

const stats = [
  { id: 1, value: '5', label: 'Decades' },
  { id: 2, value: '22', label: 'States' },
  { id: 3, value: '3', label: 'Continents' },
  { id: 4, value: '4500', label: 'Employees' },
  { id: 5, value: '850M', label: 'USD Revenue' },
  { id: 6, value: '2000', label: 'Fleet machinery' },
  { id: 7, value: 'AA', label: 'care rating' },
];

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <ProjectCarousel />
      <div className='w-full overflow-hidden bg-[#e6e6f7]'>
        <StatsStrip />
      </div>
            {/* Description Section */}
      <section className="md:mt-[-25px] pt-[40px] md:pt-[0px] px-[0px] md:px-[80px] lg:px-[100px] ">
        <div className="">
          <div className="grid md:grid-cols-2 md:gap-[200px] gap-[40px] items-center">
            <div className="w-full order-2 md:order-1">
              <Image
                src="/images/careers-team.png"
                alt="Our team"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
            <div className='px-[20px] md:px-[0px] flex flex-col gap-[40px] order-1 md:order-2'>
              <h2 className="text-[32px] leading-[1.1] text-[#252525] font-normal">
              They say the future is unknown, but we say, No. 
              Future is yet to be shaped. It is yet to become real.               </h2>
              <p className="text-[#252525] text-[14px] leading-[1.1]">
              For it is nothing but our will and determination that manifests into a reality.</p>
              <button
                  type="submit"
                  className="bg-gradient-to-r from-[#6F00D9] to-[#0504AA] text-white px-[24px] py-[14px] flex items-center gap-2 w-fit font-medium transition-colors"
                >
                  EXPLORE
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Leaders Section */}
      <Leaders />

      {/* Expertise Areas Section */}
      <ExpertiseAreas />

      {/* Contact Sections */}
      <Contact />
    </main>
  );
}
