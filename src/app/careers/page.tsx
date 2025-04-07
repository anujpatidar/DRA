'use client';

import React, { useEffect, useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCarousel from '../components/ProjectCarousel';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

const openPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Sr. Account Manager',
    department: 'Marketing',
    location: 'Pune',
    type: 'Fulltime'
  },
  {
    id: 2,
    title: 'Site Engineer',
    department: 'Urban Infrastructure',
    location: 'Pune',
    type: 'Fulltime'
  },
  {
    id: 3,
    title: 'Sr. chemist',
    department: 'Marketing',
    location: 'Delhi',
    type: 'Fulltime'
  },
  {
    id: 4,
    title: 'Sr. Architect',
    department: 'Building and Highway',
    location: 'Chennai',
    type: 'Fulltime'
  },
  {
    id: 5,
    title: 'HAVOC Engineer',
    department: 'Marketing',
    location: 'Chennai',
    type: 'Fulltime'
  },
];

const ApplyPopup = ({ position, onClose }: { position: JobPosition; onClose: () => void }) => {
  // Form refs for direct DOM manipulation
  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null)
  const positionSelectRef = useRef<HTMLSelectElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Clear form function
  const clearForm = () => {
    // Clear all input fields using refs
    if (formRef.current) {
      formRef.current.reset()
    }
    if (nameInputRef.current) {
      nameInputRef.current.value = ''
    }
    if (emailInputRef.current) {
      emailInputRef.current.value = ''
    }
    if (mobileInputRef.current) {
      mobileInputRef.current.value = ''
    }
    if (positionSelectRef.current) {
      positionSelectRef.current.value = position?.title || ''
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }

    // Reset file state
    setSelectedFile(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const formData = new FormData();
      
      // Get values from refs
      if (nameInputRef.current) formData.append('name', nameInputRef.current.value);
      if (emailInputRef.current) formData.append('email', emailInputRef.current.value);
      if (mobileInputRef.current) formData.append('mobile', mobileInputRef.current.value);
      if (positionSelectRef.current) formData.append('position', positionSelectRef.current.value);
      
      // Add resume file if selected
      if (selectedFile) {
        formData.append('resume', selectedFile);
      }

      // Submit to API
      const response = await fetch('/api/submit-career-form', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        clearForm();
        // Optional: close popup after some time
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitError(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center z-50 "
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white md:rounded-[24px] rounded-t-[24px] p-[20px] py-[40px] md:p-[40px] max-w-[800px] w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[16px] md:top-[24px] right-[16px] md:right-[24px] text-gray-500 hover:text-gray-700"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 className="md:text-[30px] text-[24px] font-medium mb-6">Apply for {position.title}</h2>
        
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col md:gap-[24px] gap-[8px]">
          <div className="grid md:grid-cols-2 md:gap-[24px] gap-[8px]">
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-[#F3F1F8] font-medium text-[14px]  px-4 py-3 outline-none"
              required
            />
            <input
              ref={emailInputRef}
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-[#F3F1F8] font-medium text-[14px]  px-4 py-3 outline-none"
              required
            />
          </div>
          <input
            ref={mobileInputRef}
            type="tel"
            name="mobile"
            placeholder="Phone Number"
            className="bg-[#F3F1F8] font-medium text-[14px]  px-4 py-3 outline-none mb-[12px]"
            required
          />

          <div className="">
            <label className="block text-sm font-medium mb-2">
              Upload Resume*
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500 transition-colors"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                if (e.dataTransfer.files?.[0]) {
                  setSelectedFile(e.dataTransfer.files[0])
                }
              }}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setSelectedFile(e.target.files[0])
                  }
                }}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <div className="flex flex-col items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="25" 
                  viewBox="0 0 24 25" 
                  fill="none"
                >
                  <g clipPath="url(#clip0_576_7852)">
                    <path 
                      d="M6.99996 18.5031C5.75223 18.5031 4.55561 18.029 3.67334 17.1851C2.79107 16.3412 2.29541 15.1966 2.29541 14.0031C2.29541 12.8097 2.79107 11.6651 3.67334 10.8211C4.55561 9.97723 5.75223 9.50313 6.99996 9.50313C7.29464 8.1903 8.15672 7.03661 9.39654 6.29584C10.0104 5.92905 10.6986 5.67467 11.4217 5.54724C12.1449 5.4198 12.8888 5.4218 13.6111 5.55313C14.3333 5.68445 15.0198 5.94252 15.6312 6.3126C16.2427 6.68269 16.7672 7.15754 17.1747 7.71005C17.5823 8.26256 17.8649 8.88191 18.0065 9.53272C18.1481 10.1835 18.1459 10.8531 18 11.5031H19C19.9282 11.5031 20.8185 11.8719 21.4748 12.5283C22.1312 13.1846 22.5 14.0749 22.5 15.0031C22.5 15.9314 22.1312 16.8216 21.4748 17.478C20.8185 18.1344 19.9282 18.5031 19 18.5031H18" 
                      stroke="#484848" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M9 15.5L12 12.5L15 15.5" 
                      stroke="#484848" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M12 12.5V21.5" 
                      stroke="#484848" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_576_7852">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-gray-500">
                  {selectedFile 
                    ? selectedFile.name 
                    : "click or drag file to this area to upload"
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[20px] flex items-center justify-between">
            <button
              type="button"
              onClick={clearForm}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear form
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#C767FA] via-[#6f00d9] to-[#0504aa]  text-white px-6 py-2 transition-colors flex items-center gap-2"
            >
              Submit
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M10.4798 7.83594H0.333984V6.16927H10.4798L5.81315 1.5026L7.00065 0.335938L13.6673 7.0026L7.00065 13.6693L5.81315 12.5026L10.4798 7.83594Z" fill="white"/>
</svg>
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

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
export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const isMobile = useIsMobile();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ProjectCarousel />
            {/* Mission Section */}
      <section className="px-[20px] md:px-[80px] lg:px-[100px] w-full pt-[40px] overflow-hidden relative ">
        <div className='w-full relative rounded-[24px] overflow-hidden h-[380px] md:h-[290px]'>
        <Image
          src={isMobile ? "/careers/careers-banner-mobile.jpg" : "/careers/careers-banner.jpg"}
          alt="Construction site"
          fill
          className="object-cover "
        />
        <div className="relative z-10 h-full flex flex-col  md:justify-center md:px-[40px] px-[20px] md:py-[0] py-[20px]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] text-white font-medium leading-tight max-w-[600px]"
          >
           Join a Team That Makes a 
           Difference
          </motion.h1>
        </div>
        </div>

     

      </section>


      {/* Description Section */}
      <section className="pt-[80px] px-[0px] md:px-[80px] lg:px-[100px] ">
        <div className="">
          <div className="grid md:grid-cols-2 md:gap-[200px] gap-[40px] items-center">
            <div className="w-full order-2 md:order-1">
              <Image
                src="/images/careers-team.png"
                alt="Our team"
                width={500}
                height={500}
                className="object-contain left-0"
              />
            </div>
            <div className='px-[20px] md:px-[0px] order-1 md:order-2'>
              <h2 className="text-[32px] leading-[1.1] text-[#252525] font-medium mb-[40px]">
                We are helping, shape and redefine India's infrastructure sector, with a remarkable legacy that traces back to 1972.
              </h2>
              <p className="text-[#252525] text-[14px] leading-[1.1]">
                Over the past five decades, we have not only driven significant infrastructural advancements but have also contributed to the socio-economic landscape of the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="md:py-[80px] py-[40px] px-[20px] md:px-[80px] lg:px-[100px] bg-[#E6E6F7]">
        <div className="">
          <h2 className="text-[32px] font-medium mb-[40px]">Open Roles</h2>
          
          <div className="flex flex-col border-b border-[#C5C5F1]">
            {openPositions.map((position) => (
              <div 
                key={position.id}
                className="md:px-[100px] px-[0px] py-[40px] border-t border-[#C5C5F1] flex items-center justify-between"
              >
                
                <div className="flex w-full md:items-center items-start gap-8">
                  <span className="text-[14px] font-medium leading-[1.1] text-[#131313]">0{position.id}</span>
                  <div className='flex w-full md:flex-row flex-col md:gap-[14px] gap-[32px] md:items-center justify-between'>
                    <div className='flex w-full md:flex-row flex-col gap-[14px] md:items-center items-start'>
                      <h3 className="text-[20px] leading-[1.1]  text-[#131313]">{position.title}</h3>
                      <p className="text-[14px] leading-[1.1] text-[#131313]">{position.department}</p>
                    </div>
                    <div className="flex w-full md:flex-row flex-col md:items-center justify-between items-start gap-[32px]">
                      <p className="text-gray-500">{position.location}/{position.type}</p>
                      <button
                        onClick={() => setSelectedPosition(position)}
                        className="text-[#252525] font-medium underline flex items-center gap-2 hover:text-[#252525]"
                      >
                        Apply
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M13 1.375L1 13.375" stroke="#252525" strokeWidth="0.990171" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M2.2002 1.375H13.0002V12.175" stroke="#252525" strokeWidth="0.990171" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                      </button>
                    </div>
                  </div>
                </div>
              
              </div>
            ))}
          </div>

          <p className=" mt-12 text-gray-600">
            Can't find the perfect fit? No worries, Drop us a line at{' '}
            <a href="mailto:careers@dra.com" className="text-[#6F00D9] hover:underline">
              careers@dra.com
            </a>
          </p>
        </div>
      </section>

      {/* Apply Popup */}
      <AnimatePresence>
        {selectedPosition && (
          <ApplyPopup 
            position={selectedPosition} 
            onClose={() => setSelectedPosition(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
} 
