'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCarousel from '../components/ProjectCarousel';
import { projectsData, projectCategories } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

// Add a default image path
const DEFAULT_PROJECT_IMAGE = '/images/project-placeholder.jpg'

// Define interface
interface Project {
  title: string;
  period: string;
  location: string;
  image: string;
  slug: string;
  category: string;
}

// Define categories
const categories = [
  "Urban Infrastructure",
  "Buildings and Highways",
  "Environment",
  "Transportation",
  "Energy",
  "Heavy Manufacturing"
]

// Define single projects array with proper typing
const projects: Project[] = [
  {
    title: "The Underground Odyssey - Chennai Metro Rail Project",
    period: "2023-27",
    location: "TamilNadu, India",
    image: "/projects/chennai-metro.jpg",
    slug: "chennai-metro-rail",
    category: "Urban Infrastructure"
  },
  {
    title: "The Global City Development - A vision for Gurugram",
    period: "2024-26",
    location: "Haryana, India",
    image: "/projects/gurugram-development.jpg",
    slug: "gurugram-development",
    category: "Urban Infrastructure"
  },
  {
    title: "The Mumbai-Ahmedabad High-Speed Rail: A Journey in the Making",
    period: "2021-26",
    location: "Gujarat, India",
    image: "/projects/mumbai-ahmedabad-rail.jpg",
    slug: "mumbai-ahmedabad-rail",
    category: "Transportation"
  }
]
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

export default function ProjectsPage() {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? Object.entries(projectsData)
    : Object.entries(projectsData).filter(([_, project]) => 
        project.category === activeCategory
      )

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <ProjectCarousel />
      {/* Mission Section */}
      <section className="px-[20px] md:px-[80px] lg:px-[100px] w-full md:py-[40px] py-[20px] bg-[#E6E6F7] overflow-hidden relative ">
        <div className='w-full relative rounded-[24px] overflow-hidden  h-[380px] md:h-[290px]'>
        <Image
          src={isMobile ? "/projects/project-banner-mobile.jpg" : "/projects/project-banner.jpg"}
          alt="Construction site"
          fill
          className="object-cover static"
        />
        <div className="relative z-10 h-full flex flex-col  md:justify-center md:px-[40px] px-[20px] md:py-[0] py-[20px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] text-white font-bold leading-tight max-w-[600px]"
          >
            We are 'Dineshchandra R. Agrawal Infracon Pvt. Ltd.'
          </motion.h1>
        </div>
        </div>

     

      </section>


      {/* Categories */}
      <div className="px-[20px] md:px-[80px] lg:px-[100px] py-8">
        <div className="flex w-full overflow-x-scroll scrollbar-hide gap-8 border-b border-gray-200">

          {projectCategories.map((category) => (
            <button
              key={category}
              className={`pb-4 px-2 text-[14px] whitespace-nowrap md:text-[20px] transition-colors ${
                activeCategory === category
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500 hover:text-purple-700'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map(([slug, project]) => (
            <ProjectCard 
              key={slug}
              slug={slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 