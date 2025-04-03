import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NameDisplay: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold leading-tight">
    {title.split(' ').map((part, i, arr) => (
      <React.Fragment key={i}>
        {part}
        {i < arr.length - 2 && ' '}
        {i === arr.length - 2 && <br />}
      </React.Fragment>
    ))}
  </h3>
);

const expertiseAreas = [
  {
    id: 1,
    title: 'Urban Infrastructure',
    image: '/expertise/urban-infrastructure.png',
  },
  {
    id: 2,
    title: 'Energy',
    image: '/expertise/energy.png',
  },
  {
    id: 3,
    title: 'Heavy Manufacturing',
    image: '/expertise/manufacturing.png',
  },
  {
    id: 4,
    title: 'Transportation',
    image: '/expertise/transportation.png',
  },
  {
    id: 5,
    title: 'Railway Futures',
    image: '/expertise/railway.png',
  },
  {
    id: 6,
    title: 'Environment',
    image: '/expertise/environment.png',
  },
  {
    id: 7,
    title: 'Buildings & Highways',
    image: '/expertise/buildings.png',
  },
  {
    id: 8,
    title: 'Technology',
    image: '/expertise/technology.png',
  },
  {
    id: 9,
    title: 'Defence System',
    image: '/expertise/defence.png',
  },
  {
    id: 10,
    title: 'Renewables',
    image: '/expertise/renewables.png',
  },
];

export default function ExpertiseAreas() {
  return (
    <section className="py-[40px] md:py-[60px] lg:py-[80px] bg-white">
      <div className="px-[20px] md:px-[80px] lg:px-[100px]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[32px] md:text-[38px] lg:text-[42px] leading-[1.1] font-bold mb-8 md:mb-10 lg:mb-12"
        >
          <span className="md:hidden">
            Our Areas of<br />Expertise
          </span>
          <span className="hidden md:inline">
            Our Areas of Expertise
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative w-full max-w-[300px] aspect-square rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={area.image}
                alt={area.title}
                width={300}
                height={300}
                quality={100}
                priority={index < 5}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  console.error(`Error loading image for ${area.title}:`, e);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                <NameDisplay title={area.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 