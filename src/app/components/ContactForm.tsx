'use client';
import React from 'react';
import Image from 'next/image';

export default function ContactForm() {
  return (
    
    <section className="bg-gradient-to-r from-[#6F00D9] to-[#0504AA] pt-[100px] pb-[40px] md:py-[80px] px-[20px] md:px-[80px] lg:px-[100px]">
      <div className="">
        <div className="bg-white rounded-[24px] px-[20px] py-[40px] md:p-[80px]">
          <div className="grid md:grid-cols-2 md:gap-[60px] gap-[40px]">
            {/* Left Side - Contact Info */}
            <div>
              <h1 className="text-[32px] leading-[1.1] font-medium mb-4">
                Any Questions We are Here.
              </h1>
              <p className="text-[#7b7b7b] mb-4">
                Drop your details below, and we'll be in touch ASAP.
              </p>
              
              {/* Contact Links */}
              <div className="flex items-center gap-[20px]">
                <a href="tel:079-26309789" className="flex items-center gap-2">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone"
                    width={16}
                    height={15}
                  />
                  079-26309789
                </a>
                <div className="flex items-center gap-[6px]">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/messenger.svg"
                    alt="Messenger"
                    width={32}
                    height={32}
                  />
                </a>
                <a href="https://wa.me/079-26309789" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                  />
                </a>
              </div>
                </div>

            </div>

            {/* Right Side - Form */}
            <div>
              <form className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-[#F3F1F8] font-normal px-4 py-3 outline-none border-none focus:border-none focus:ring-0"
                  />
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="bg-[#F3F1F8] font-normal px-4 py-3 outline-none border-none focus:border-none focus:ring-0"
                  />
                </div>
                <textarea
                  placeholder="Query"
                  rows={4}
                  className="bg-[#F3F1F8] font-normal px-4 py-3 outline-none resize-none border-none focus:border-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#6F00D9] to-[#0504AA] text-white px-8 py-3 flex items-center gap-2 w-fit  transition-colors"
                >
                  Submit
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 