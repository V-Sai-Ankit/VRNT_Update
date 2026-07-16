import React from 'react';
import { User } from 'lucide-react';

interface TrusteesPageProps {
  isMenuOpen: boolean;
  isDrawerOpen: boolean;
}

export default function TrusteesPage({ isMenuOpen, isDrawerOpen }: TrusteesPageProps) {
  const bothClosed = !isMenuOpen && !isDrawerOpen;

  const trusteesList = [
    { name: "S SWAMINATHAN", role: "EXECUTIVE TRUSTEE" },
    { name: "CHALLA VISWANATHA SASTRY", role: "SRIKARYAM - SHRI KANCHI KAMAKOTI PEETHAM" },
    { name: "ARVIND SUBRAMANIAN", role: "MANAGER, SHRI KANCHI KAMAKOTI PEETHAM" },
    { name: "G VEERARAGHAVAN", role: "TREASURER" },
    { name: "G MURALIDHARAN", role: "TRUSTEE" },
    { name: "MAGANTY SATYANARAYANA MURTHY", role: "TRUSTEE" },
    { name: "R RAMAKRISHNAN", role: "TRUSTEE" },
    { name: "SANKARAN R", role: "TRUSTEE" },
    { name: "SANKARANARAYANAN SWAMINATHAN", role: "TRUSTEE" },
    { name: "V JAYARAMAN", role: "TRUSTEE" },
    { name: "VISWANATHAN K", role: "TRUSTEE" }
  ];

  return (
    <div className="w-full flex flex-col gap-8 pb-12">
      {/* Page Header */}
      <section className="mt-2 border-t border-[#222] pt-6">
        <h2 
          className="font-serif font-bold text-[#8b2b22] m-0 underline decoration-[#bf953f] decoration-4 underline-offset-12"
          style={{ fontSize: bothClosed ? '48px' : '40px' }}
        >
          List of Trustees
        </h2>
        <p 
          className="italic text-gray-600 mt-6 font-serif"
          style={{ fontSize: bothClosed ? '18px' : '15px' }}
        >
          Dedicated individuals overseeing the mission of Veda Rakshana Nidhi Trust.
        </p>
      </section>

      {/* Two-Column Grid matching screenshots */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
        {trusteesList.map((trustee, idx) => (
          <div 
            key={idx} 
            className="bg-[#f7f4eb] border border-[#222]/80 rounded-xl p-5 flex items-center gap-4 shadow-2xs hover:shadow-sm transition-shadow"
          >
            {/* Round User Icon Container */}
            <div className="bg-[#fffdf9] border border-[#e5dcc6] text-[#bf953f] rounded-full p-3 flex items-center justify-center shrink-0 shadow-inner">
              <User className="h-6 w-6" strokeWidth={1.5} />
            </div>

            {/* Content Context Block */}
            <div className="flex flex-col gap-1 min-w-0">
              <h4 className="font-serif font-bold text-[#171717] m-0 text-lg md:text-xl tracking-wide uppercase truncate">
                {trustee.name}
              </h4>
              <span className="font-sans text-xs font-bold tracking-wider text-[#bf953f] uppercase">
                {trustee.role}
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}