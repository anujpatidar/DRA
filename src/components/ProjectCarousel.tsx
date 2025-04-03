'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const carouselProjects = [
  {
    title: "A PAVEMENT OF TRANSFORMATION",
    subtitle: "DND - Faridabad - Sohna",
    description: "Spanning 24 kilometres, the six-lane highway was designed to connect DND Maharani Bagh to the Jaitpur-Pushta Road section of NH-148NA.",
    image: "/projects/dnd-hero.jpg",
    slug: "dnd-faridabad"
  },
  {
    title: "A JOURNEY IN THE MAKING",
    subtitle: "The Mumbai-Ahmedabad High-Speed Rail",
    description: "India's first high-speed rail corridor, connecting two major economic hubs with cutting-edge Japanese Shinkansen technology.",
    image: "/projects/mumbai-ahmedabad-hero.jpg",
    slug: "mumbai-ahmedabad-rail"
  },
  {
    title: "THE GLOBAL CITY DEVELOPMENT",
    subtitle: "A Vision for Gurugram",
    description: "A visionary approach to urban development, setting new standards for sustainable city planning and infrastructure integration.",
    image: "/projects/gurugram-hero.jpg",
    slug: "global-city-development"
  },
  {
    title: "THE UNDERGROUND ODYSSEY",
    subtitle: "Chennai Metro Rail Project",
    description: "Construction of four underground metro stations, showcasing engineering excellence in urban transportation infrastructure.",
    image: "/projects/chennai-metro-hero.jpg",
    slug: "chennai-metro"
  }
]

export default function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselProjects.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 grid grid-cols-2">
        {/* Left Content Panel */}
        <div className="bg-indigo-900 text-white p-12 flex flex-col justify-center">
          <h2 className="text-2xl mb-8 font-light">Featured projects</h2>
          
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col flex-grow"
          >
            <div className="flex-grow">
              <h1 className="text-4xl font-bold mb-4">
                {carouselProjects[currentSlide].title}
              </h1>
              <h3 className="text-xl mb-6">
                {carouselProjects[currentSlide].subtitle}
              </h3>
              <p className="text-gray-300 mb-8">
                {carouselProjects[currentSlide].description}
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <Link 
                href={`/projects/${carouselProjects[currentSlide].slug}`}
                className="bg-transparent border border-white px-6 py-2 flex items-center gap-2 hover:bg-white hover:text-indigo-900 transition-colors w-fit"
              >
                Learn More
                <span>→</span>
              </Link>

              {/* Dots Navigation */}
              <div className="flex gap-3">
                {carouselProjects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white w-4' : 'bg-gray-500'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image Panel */}
        <div className="relative overflow-hidden">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={carouselProjects[currentSlide].image}
              alt={carouselProjects[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-12 right-12 flex gap-4">
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselProjects.length) % carouselProjects.length)}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              ←
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselProjects.length)}
              className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 