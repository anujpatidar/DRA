'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Project {
  title: string
  subtitle: string
  description: string
  image: string
  url: string
}

const projects: Project[] = [
  {
    title: "A PAVEMENT OF TRANSFORMATION",
    subtitle: "DND - Faridabad - Sohna",
    description: "Spanning 24 kilometres, the six-lane highway was designed to connect DND Maharani Bagh to the Jaitpur-Pushta Road section of NH-148NA.",
    image: "/projects/dnd-faridabad/dnd-1.jpg",
    url: "/projects/dnd-faridabad"
  },
  {
    title: "A Journey in the Making",
    subtitle: "The Mumbai-Ahmedabad High-Speed Rail",
    description: "A state-of-the-art metro rail system spanning major urban centers, enhancing connectivity and reducing travel time for millions.",
    image: "/projects/mumbai-ahmedabad-rail/mumbai-ahmedabad-1.jpg",
    url: "/projects/mumbai-ahmedabad-rail"
  },
  {
    title: "The Global City Development",
    subtitle: "A Vision for Gurugram",
    description: "Comprehensive urban development project incorporating smart technologies and sustainable infrastructure solutions.",
    image: "/projects/global-city-development/gurugram-1.jpg",
    url: "/projects/global-city-development"
  },
  {
    title: "The Underground Odyssey",
    subtitle: "Chennai Metro Rail Project",
    description: "An eco-friendly transportation corridor featuring dedicated lanes for electric vehicles and sustainable mobility solutions.",
    image: "/projects/chennai-metro/chennai-1.jpg",
    url: "/projects/chennai-metro"
  }
]

export default function FeaturedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="relative w-full h-fit">
      <div className="relative">
        {/* Left Content Panel */}

        <div className={`absolute z-10 ${ isMobile ? 'bottom-20 p-[20px] h-[450px]':'top-0 left-[100px] max-w-[420px] p-[40px] h-full '} bg-[#231172e6] text-white  flex flex-col justify-between`}>
          <div className='flex flex-col gap-[20px]'>
          <h2 className="text-[20px] font-light">Featured projects</h2>
          <hr className='w-[100%] h-[1px] bg-[#ffffff] '/>
          </div>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="">
              <h1 className="text-[32px] font-medium uppercase leading-[32px] mb-[14px]">
                {projects[currentSlide].title}
              </h1>
              <h3 className="text-[20px] mb-[40px]">
                {projects[currentSlide].subtitle}
              </h3>
              <p className="text-[14px] leading-[1.2] mb-[40px]">
                {projects[currentSlide].description}
              </p>
            </div>
            
            <div className="flex flex-col gap-[40px]">
              <Link 
                href={projects[currentSlide].url}
                className="bg-[#ffffff] text-[#000000] px-6 py-2 flex items-center gap-2 transition-colors w-fit"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M12.1994 9.42018H3.37695V7.9709H12.1994L8.14145 3.91293L9.17405 2.89844L14.9712 8.69554L9.17405 14.4926L8.14145 13.4781L12.1994 9.42018Z" fill="black"/>
</svg>
              </Link>

              {/* Dots Navigation */}
              <div className={`${ isMobile ? 'hidden':'flex w-full justify-center gap-[6px]'}`}>
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#C767FA] w-[12px]' : 'bg-[#D9D9D9]'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image Panel */}
        <div className="w-[100%] h-fit overflow-hidden">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full md:h-[560px] h-[800px]"
          >
            <Image
              src={projects[currentSlide].image}
              alt={projects[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Navigation Arrows */}

        </div>
      </div>
    </section>
  )
} 