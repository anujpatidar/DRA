'use client'
import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { number: '5', label: 'Decades' },
  { number: '22', label: 'States' },
  { number: '3', label: 'Continents' },
  { number: '4500', label: 'Employees' },
  { number: '850M', label: 'USD Revenue' },
  { number: '2000', label: 'Fleet machinery' },
  { number: 'AA', label: 'care rating' },
];

export default function StatsStrip() {
  // Use CSS variables for animation instead of JS-calculated values
  return (
    <div className="w-full py-[40px] overflow-hidden">
      {/* CSS for the infinite scroll animation */}
      <style jsx>{`
        .scroll-container {
          display: flex;
          width: max-content;
        }
        
        .stats-item {
          display: flex;
          align-items: center;
          padding: 0 40px;
          white-space: nowrap;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      <div className="scroll-container animate-scroll">
        {/* First set of stats */}
        {stats.map((stat, index) => (
          <div key={`set1-${index}`} className="stats-item">
            <div className="text-center">
              <div className="text-[32px] font-bold text-[#252525]">
                {stat.number}
              </div>
              <div className="text-[14px] text-[#252525]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
        
        {/* Duplicate set for continuous scrolling */}
        {stats.map((stat, index) => (
          <div key={`set2-${index}`} className="stats-item">
            <div className="text-center">
              <div className="text-[32px] font-bold text-[#252525]">
                {stat.number}
              </div>
              <div className="text-[14px] text-[#252525]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
        
        {/* Third set for safety */}
        {stats.map((stat, index) => (
          <div key={`set3-${index}`} className="stats-item">
            <div className="text-center">
              <div className="text-[32px] font-bold text-[#252525]">
                {stat.number}
              </div>
              <div className="text-[14px] text-[#252525]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}