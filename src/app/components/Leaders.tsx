import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const leaders = [
  {
    id: 1,
    name: 'Dineshchandra R. Agrawal',
    position: 'Chairman and Managing Director',
    image: '/leaders/leader1.png',
  },
  {
    id: 2,
    name: 'Jagdishchandra R. Agrawal',
    position: 'Executive Director',
    image: '/leaders/leader2.png',
  },
  {
    id: 3,
    name: 'Hardik Agrawal',
    position: 'Executive Director',
    image: '/leaders/leader3.png',
  },
  {
    id: 4,
    name: 'Ankit Agrawal',
    position: 'Member of the board',
    image: '/leaders/leader4.png',
  },
];

interface LeadersProps {
  title?: string;
  removeBackground?: boolean;
}

export default function Leaders({ 
  title = "Our Leaders", 
  removeBackground = false 
}: LeadersProps) {
  return (
    <section 
      className={`py-[40px] md:py-[60px] lg:py-[80px] relative ${!removeBackground ? 'bg-gradient-to-r from-[#C767FA] via-[#6F00D9] to-[#0504AA]' : ''}`}
    >
      {!removeBackground && (
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/frame-36.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'overlay'
          }}
        />
      )}
      <div className="pl-[20px] md:px-[80px] lg:px-[100px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left flex flex-col gap-2 mb-8"
        >
          <h2 className={`text-[32px] font-medium leading-[1.1] ${!removeBackground ? 'text-white' : 'text-black'}`}>
            {title}
          </h2>
          <p className={`text-[14px] leading-[1.2] pr-[20px] ${!removeBackground ? 'text-white/80' : 'text-gray-600'}`}>
            The ones who guide us to become better and transform the world
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-[380px] mb-4 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-left flex flex-col gap-2">
                <h3 className="text-[20px] leading-[120%] font-semibold text-white">{leader.name}</h3>
                <p className="text-white text-[14px] font-medium mb-2">{leader.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scrolling View */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
            {leaders.map((leader) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="snap-start flex-none"
              >
                <div className="relative w-[280px] h-[340px] mb-4 overflow-hidden bg-white">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-left w-[280px]">
                  <h3 className="text-[20px] font-bold uppercase text-white mb-1">{leader.name}</h3>
                  <p className="text-white/80 text-[14px]">{leader.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 