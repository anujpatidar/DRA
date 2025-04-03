'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions for better type safety
interface BoardMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: 'Dineshchandra R. Agrawal',
    position: 'Chairman and Managing Director',
    image: '/leaders/leader1.png',
    description: 'With over 40 years of experience in infrastructure development, Mr. Dineshchandra R. Agrawal has been instrumental in shaping the company\'s vision and growth. Under his leadership, the company has successfully executed numerous landmark projects across India.'
  },
  {
    id: 2,
    name: 'Jagdishchandra R. Agrawal',
    position: 'Executive Director',
    image: '/leaders/leader2.png',
    description: 'Mr. Jagdishchandra R. Agrawal brings extensive expertise in project management and execution. His strategic approach has helped streamline operations and enhance project delivery efficiency.'
  },
  {
    id: 3,
    name: 'Hardik Agrawal',
    position: 'Executive Director',
    image: '/leaders/leader3.png',
    description: 'Leading the company technological initiatives, Mr. Hardik Agrawal has been pivotal in modernizing operations and implementing innovative solutions across projects.'
  },
  {
    id: 4,
    name: 'Ankit Agrawal',
    position: 'Member of the board',
    image: '/leaders/leader4.png',
    description: 'Mr. Ankit Agrawal oversees strategic planning and business development. His focus on sustainable practices has strengthened the company commitment to environmental responsibility.'
  },
];

interface ProfilePopupProps {
  member: BoardMember;
  onClose: () => void;
}

const ProfilePopup = ({ member, onClose }: ProfilePopupProps) => {
  if (!member) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 bottom-0 rounded-t-[20px] md:rounded-t-none md:absolute w-full md:h-[100%] h-fit bg-[#E7E7E9] z-50 overflow-hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className=" p-[20px] md:p-0  w-full relative max-h-[90vh] overflow-x-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Handle/Indicator for mobile */}
        <div className="md:hidden w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col h-full md:flex-row gap-[14px] md:gap-8 ">
          <div className="relative w-full md:w-fit h-[360px] md:h-[460px] md:aspect-[3/4] transition-all duration-300 overflow-hidden flex-shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
          <div className="flex flex-col md:p-[20px] items-start justify-center md:gap-4 gap-[14px]">
            <h3 className="md:text-[24px] text-[20px] leading-1 font-bold">{member.name}</h3>
            <p className="text-[#5F00D9] md:text-[16px] text-[14px] font-medium">{member.position}</p>
            <p className="text-gray-600 md:leading-[1.8] leading-1">{member.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function BoardMembers() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  return (
    <section className="py-[40px] md:py-[60px] lg:py-[80px] relative">
      <div className="pl-[20px] md:px-[80px] lg:px-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left flex flex-col gap-2 mb-8"
        >
          <h2 className="text-[32px] font-bold leading-[1.1] text-black">
            Board of Members
          </h2>
          <p className="text-[14px] leading-[1.5] pr-[20px] text-gray-600">
            The ones who guide us to become better and transform the world
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="relative hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-[380px] mb-4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
        <div className="absolute right-0 top-0 bottom-0 bg-transparent w-[50px] h-full transition-all duration-300 flex items-end justify-center group-hover:p-[15px] group-hover:bg-gradient-to-r from-[#c767fa33] via-[#6f00d933] to-[#0504aa33]">
          <div className="transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-white"
            >
              <path 
                d="M7 17L17 7M17 7H7M17 7V17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      
              </div>
              <div className="text-left flex flex-col gap-2">
                <h3 className="text-[20px] leading-[120%] font-semibold text-black">{member.name}</h3>
                <p className="text-gray-600 text-[14px] font-medium mb-2">{member.position}</p>
              </div>
            </motion.div>
          ))}

      {/* Profile Popup */}
      <AnimatePresence>
        {selectedMember && (
          <ProfilePopup 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
          />
        )}
      </AnimatePresence>
        </div>

        {/* Mobile Scrolling View */}
        <div className="md:hidden relative">
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {boardMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="snap-start flex-none cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative w-[280px] h-[340px] mb-4 overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
          <div className="absolute right-0 top-0 bottom-0  w-[50px] h-full transition-all duration-300 flex items-end justify-center overflow-hidden p-[15px] bg-gradient-to-r from-[#c767fa33] via-[#6f00d933] to-[#0504aa33]">
          <div className="transform transition-transform duration-300 translate-y-0">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-white"
            >
              <path 
                d="M7 17L17 7M17 7H7M17 7V17" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
                </div>

      
                <div className="text-left">
                  <h3 className="text-[20px] font-bold text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-[14px]">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>

      {/* Profile Popup */}
      <AnimatePresence>
        {selectedMember && (
          <ProfilePopup 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
          />
        )}
      </AnimatePresence>
        </div>
      </div>

      {/* Profile Popup */}
  
    </section>
  );
} 