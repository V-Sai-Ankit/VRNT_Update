import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotificationSidebar from './components/layout/NotificationSidebar';
import Hero from './components/sections/Hero';
import VedaVruksham from './components/sections/VedaVruksham';
import Mission from './components/sections/Mission';
import Activities from './components/sections/Activities';
import VedasPage from './components/sections/Vedas';
import Pariksha from './components/sections/Pariksha';
import Trustees from './components/sections/Trustees';
import DonatePage from './components/sections/Donate';
import ContactPage from './components/sections/Contact';
import Mahotsav from './components/sections/Mahotsav';
import ParikshaResultPage from './components/sections/ParikshaResult';
import Announcement from './components/sections/Announcement';
import GalleryPage from './components/sections/Gallery';
import History from './components/sections/History';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle special navigation logic
  const handleNavigate = (page: string) => {
    if (page === 'poorthy-circular') {
      navigate('/announcements?view=poorthy-sept');
    } else if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
  };

  // Helper to check active route for styling menu items
  const isCurrentPage = (path: string) => {
    if (path === 'home' && location.pathname === '/') return true;
    return location.pathname === `/${path}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-serif p-0 md:px-5 md:pb-5 overflow-x-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navbar />

      {/* Sidebar Navigation */}
      <div 
        className={`fixed left-0 top-[200px] z-[1200] flex flex-col items-stretch bg-[#0e2245] border border-[#08152b] shadow-lg rounded-r-md overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'w-[220px]' : 'w-[88px]'
        }`}
      >
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`bg-[#1a365d] text-white border-none border-b border-[#08152b] cursor-pointer flex items-center justify-center gap-2 font-sans font-bold uppercase transition-all duration-300 w-full shrink-0 ${
            isMenuOpen ? 'h-11 text-sm tracking-wider' : 'h-10 text-[11px] tracking-wide'
          }`}
        >
          <span>☰</span>
          <span>MENU</span>
        </button>
        
        <div className={`shrink-0 border-b border-[#08152b] ${isMenuOpen ? 'p-3 bg-[#0b1b38]' : 'p-2 bg-[#1a365d]/50'}`}>
          <button 
            onClick={() => window.open('https://vrnt-app.onrender.com/#/login', '_blank', 'noopener,noreferrer')}
            className={`bg-[#ff7f5c] hover:bg-[#ff9173] text-[#e2e8f0] hover:text-white text-center no-underline font-sans font-bold uppercase tracking-wider rounded-md transition-all border-none cursor-pointer flex items-center justify-center w-full ${
              isMenuOpen ? 'py-2.5 text-[12px] px-4' : 'py-3.5 text-[10px] tracking-wide px-1'
            }`}
          >
            Login Here
          </button>
        </div>
        
        {isMenuOpen ? (
          <div className="flex flex-col gap-1.5 p-3 pb-6 overflow-y-auto no-scrollbar max-h-[calc(100vh-280px)] flex-grow">
            <button onClick={() => handleNavigate('home')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('home') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Home</button>
            <button onClick={() => handleNavigate('mission')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('mission') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Mission</button>
            <button onClick={() => handleNavigate('activities')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('activities') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Activities</button>
            <button onClick={() => handleNavigate('vedas')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('vedas') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Vedas</button>
            <button onClick={() => handleNavigate('pariksha')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('pariksha') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Pariksha</button>
            <button onClick={() => handleNavigate('gallery')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('gallery') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Gallery</button>
            <button onClick={() => handleNavigate('history')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('history') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>History</button>
            <button onClick={() => handleNavigate('trustees')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('trustees') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Trustees</button>
            <button onClick={() => handleNavigate('donate')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('donate') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Donate</button>
            <button onClick={() => handleNavigate('contact')} className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('contact') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Contact</button>
            <button 
              onClick={() => handleNavigate('announcements')}
              className={`block text-left w-full no-underline py-2.5 px-4 font-sans font-bold text-sm rounded-md cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${
                isCurrentPage('announcements') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'
              }`}
            >
              Announcements
            </button>
          </div>
        ) : (
          <div className="h-2 w-full shrink-0" />
        )}
      </div>

      <button 
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="fixed bottom-6 right-6 bg-[#1a365d] text-white border border-[#222] cursor-pointer z-[1200] text-xl rounded-full h-14 w-14 flex items-center justify-center shadow-2xl hover:bg-[#224273] hover:scale-105 transition-all duration-200"
      >
        🔔
      </button>

      <div 
        className="flex transition-all duration-300 ease-in-out pl-[19px]"
        style={{ 
          marginTop: '200px',
          paddingLeft: isMenuOpen ? '239px' : '107px',
          paddingRight: isDrawerOpen ? '398px' : '19px'
        }}
      >
        <main className="flex-grow w-full pr-0 transition-all duration-300">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <VedaVruksham isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />
              </>
            } />
            <Route path="/mission" element={<Mission isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/activities" element={<Activities isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/vedas" element={
              <VedasPage 
                isMenuOpen={isMenuOpen} 
                isDrawerOpen={isDrawerOpen} 
                subView={searchParams.get('view') || 'list'}
                setSubView={(val) => setSearchParams(val ? { view: val } : {})}
              />
            } />
            <Route path="/pariksha" element={<Pariksha isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/gallery" element={<GalleryPage isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/history" element={<History isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/trustees" element={<Trustees isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/donate" element={<DonatePage isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/contact" element={<ContactPage isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/mahotsav" element={<Mahotsav isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />} />
            <Route path="/pariksha-result" element={
              <ParikshaResultPage 
                isMenuOpen={isMenuOpen} 
                isDrawerOpen={isDrawerOpen} 
                setCurrentPage={handleNavigate} 
              />
            } />
            <Route path="/announcements" element={
              <Announcement 
                isMenuOpen={isMenuOpen} 
                isDrawerOpen={isDrawerOpen} 
                setCurrentPage={handleNavigate} 
                subView={searchParams.get('view')}
                setSubView={(val) => setSearchParams(val ? { view: val } : {})}
              />
            } />
            <Route path="*" element={
              <>
                <Hero />
                <VedaVruksham isMenuOpen={isMenuOpen} isDrawerOpen={isDrawerOpen} />
              </>
            } />
          </Routes>
        </main>

        <NotificationSidebar 
          isOpen={isDrawerOpen} 
          onClose={() => setIsDrawerOpen(false)}
          setCurrentPage={handleNavigate} 
        />
      </div>

      <Footer />
    </div>
  );
}