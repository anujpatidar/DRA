import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MapRedirect = () => {
  const mapUrl = "https://maps.google.com/maps?q=The+Grand+Mall+Ahmedabad";

  return (
    <div className="relative w-full h-[300px] rounded-[24px] overflow-hidden group cursor-pointer">
      {/* Map preview image */}
      <Image
        src="/images/map-preview.png"
        alt="Office Location"
        fill
        className="object-cover"
      />

      {/* Gradient overlay with exact specifications */}
      <div 
        className="absolute inset-0"
        style={{
          borderRadius: '24px',
          background: 'linear-gradient(107deg, rgba(199, 103, 250, 0.40) -37.68%, rgba(111, 0, 217, 0.40) 23.36%, rgba(5, 4, 170, 0.40) 76.76%)'
        }}
      />

      {/* Center arrow icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-[#000000]"
          >
            <path 
              d="M5 12h14M12 5l7 7-7 7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Clickable link */}
      <a 
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="Open in Google Maps"
      />
    </div>
  );
};

export default function Contact() {
  return (
    <>
      {/* Contact Form Section */}
      <section className="py-[40px] md:py-[60px] lg:py-[80px] bg-[#F3F1FF]">
        <div className="px-[20px] md:px-[80px] lg:px-[100px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] font-medium leading-[1.1]"
            >
              <span>Any Questions,</span><br />
              <span>We are here</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#7b7b7b] leading-[1.2] mt-4"
            >
              Drop your details below, and we'll be in touch ASAP.
            </motion.p>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 font-normal bg-white border border-gray-200 focus:outline-none "
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 font-normal bg-white border border-gray-200 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Query"
              rows={4}
              className="w-full px-4 py-3 font-normal bg-white border border-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#6F00D9] to-[#0504AA] text-white px-8 py-3 font-medium  transition-colors flex items-center gap-2"
            >
              Submit
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-[40px] md:py-[60px] lg:py-[80px]">
        <div className="px-[20px] md:px-[80px] lg:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8">
            {/* Map */}
            <MapRedirect />

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#5F00D9] via-[#4700A3] to-[#0504AA] md:p-[40px] p-[20px] rounded-[24px] text-white relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: 'url("/images/frame-36.svg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.6,
                  transform: ' scale(1.6)'
                }}
              />
              <div className="relative z-10">
                <h3 className="md:text-[32px] text-[20px] leading-[1.1] font-medium mb-[32px]">Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-[24px]">
                  <div>
                    <h4 className="text-[14px] text-[#E4DEFF] font-medium leading-[1.1] mb-[10px]">PHONE</h4>
                    <p className="md:text-[20px] text-[16px] leading-[1.1] mb-[6px]">079-26309765</p>
                    <p className="md:text-[20px] text-[16px] leading-[1.1]">079-26309765</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-[14px] text-[#E4DEFF] font-medium leading-[1.1] mb-[10px]">ADDRESS</h4>
                    <p className="md:text-[20px] text-[16px] leading-[1.1]">401, The Grand Mall, S.M. Road, Ambawadi,<br />Ahmedabad-380015 (Gujarat, India)</p>
                  </div>
                  <div>
                    <h4 className="text-[14px] text-[#E4DEFF] font-medium leading-[1.1] mb-[10px]">E-MAIL</h4>
                    <p className="md:text-[20px] text-[16px] leading-[1.1]">info@draipl.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 