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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Track screen resize for desktop vs mobile rendering
  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.innerWidth < 1024;
      setIsMobile(mobileCheck);
      if (!mobileCheck) {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle navigation
  const handleNavigate = (page: string) => {
    if (page === 'poorthy-circular') {
      navigate('/announcements?view=poorthy-sept');
    } else if (page === 'home') {
      navigate('/');
    } else {
      navigate(`/${page}`);
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const isCurrentPage = (path: string) => {
    if (path === 'home' && location.pathname === '/') return true;
    return location.pathname === `/${path}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-serif p-0 md:px-5 md:pb-5 overflow-x-hidden w-full">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Navbar />

      {/* ------------------------------------------------------------- */}
      {/* 1. MOBILE SIDEBAR (< 1024px)                                  */}
      {/* ------------------------------------------------------------- */}
      {isMobile ? (
        <aside 
          className={`fixed left-0 z-[1300] flex flex-col items-stretch bg-[#0e2245] border-r border-[#bf953f]/40 shadow-2xl transition-all duration-300 ease-out 
            top-[210px] sm:top-[240px] h-[calc(100vh-210px)] sm:h-[calc(100vh-240px)]
            ${isMenuOpen ? 'w-[120px]' : 'w-[44px]'}`}
        >
          {/* Toggle Button Header */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-[#08152b] hover:bg-[#132c54] text-[#fcf6ba] border-b border-[#bf953f]/30 py-2 px-1 flex items-center justify-center gap-1.5 font-sans font-bold uppercase transition-all duration-200 cursor-pointer shrink-0"
            aria-label="Toggle Menu"
          >
            <span className="text-xs">{isMenuOpen ? '☰' : '☰'}</span>
            {isMenuOpen && <span className="text-[10px] tracking-wider">MENU</span>}
          </button>

          {/* Closed State for MENU */}
          {!isMenuOpen && (
            <div className="flex-grow flex flex-col items-center justify-start gap-3 py-2 select-none">
              <div 
                onClick={() => setIsMenuOpen(true)}
                className="cursor-pointer text-[#fcf6ba]/80 hover:text-[#fcf6ba] transition-colors py-1 px-0.5 text-center"
              >
                <span className="text-[9px] font-sans font-bold tracking-tight uppercase block leading-none">
                  MENU
                </span>
              </div>

              {/* Vertical Letter-by-Letter LOGIN HERE */}
              <button 
                onClick={() => window.open('https://vrnt-app.onrender.com/#/login', '_blank', 'noopener,noreferrer')}
                className="bg-[#ff7f5c] hover:bg-[#ff9173] text-white border-none rounded px-1.5 py-2 text-[8px] leading-[1.1] font-sans font-extrabold uppercase cursor-pointer shadow transition-all flex flex-col items-center justify-center text-center tracking-normal"
              >
                <span>L</span><span>O</span><span>G</span><span>I</span><span>N</span>
                <span className="my-1 text-[5px] opacity-0">-</span>
                <span>H</span><span>E</span><span>R</span><span>E</span>
              </button>
            </div>
          )}
          
          {/* Expanded State */}
          {isMenuOpen && (
            <>
              <div className="shrink-0 border-b border-[#08152b] p-1.5 bg-[#0b1b38]">
                <button 
                  onClick={() => window.open('https://vrnt-app.onrender.com/#/login', '_blank', 'noopener,noreferrer')}
                  className="bg-[#ff7f5c] hover:bg-[#ff9173] text-[#e2e8f0] hover:text-white text-center no-underline font-sans font-bold uppercase rounded py-1 text-[9px] px-1 transition-all border-none cursor-pointer flex items-center justify-center w-full"
                >
                  Login Here
                </button>
              </div>
              
              <div className="flex flex-col gap-0.5 p-1 pb-6 overflow-y-auto no-scrollbar max-h-[calc(100vh-280px)] flex-grow">
                <button onClick={() => handleNavigate('home')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('home') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Home</button>
                <button onClick={() => handleNavigate('mission')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('mission') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Mission</button>
                <button onClick={() => handleNavigate('activities')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('activities') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Activities</button>
                <button onClick={() => handleNavigate('vedas')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('vedas') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Vedas</button>
                <button onClick={() => handleNavigate('pariksha')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('pariksha') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Pariksha</button>
                <button onClick={() => handleNavigate('gallery')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('gallery') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Gallery</button>
                <button onClick={() => handleNavigate('history')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('history') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>History</button>
                <button onClick={() => handleNavigate('trustees')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('trustees') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Trustees</button>
                <button onClick={() => handleNavigate('donate')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('donate') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Donate</button>
                <button onClick={() => handleNavigate('contact')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('contact') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Contact</button>
                <button onClick={() => handleNavigate('announcements')} className={`block text-left w-full no-underline py-1 px-1.5 font-sans font-bold text-[10px] rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('announcements') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Announcements</button>
              </div>
            </>
          )}
        </aside>
      ) : (
        /* ------------------------------------------------------------- */
        /* 2. DESKTOP SIDEBAR (>= 1024px) - Larger Typography & Spacing  */
        /* ------------------------------------------------------------- */
        <aside 
          className={`fixed left-0 z-[1300] flex flex-col items-stretch bg-[#0e2245] border-r border-[#bf953f]/40 shadow-2xl transition-all duration-300 ease-out 
            top-[200px] h-[calc(100vh-200px)] ${isMenuOpen ? 'w-[220px]' : 'w-[88px]'}`}
        >
          {/* Top Toggle Header Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-[#08152b] hover:bg-[#132c54] text-[#fcf6ba] border-b border-[#bf953f]/30 py-3 px-2 flex items-center justify-center gap-2 font-sans font-bold uppercase transition-all duration-200 cursor-pointer shrink-0"
            aria-label="Toggle Menu"
          >
            <span className="text-base">{isMenuOpen ? '✕' : '☰'}</span>
            <span className="text-xs tracking-wider">MENU</span>
          </button>

          {/* CLOSED STATE: Elongated full-width Login Here button with larger text */}
          {!isMenuOpen ? (
            <div className="flex-grow flex items-start justify-center pt-2.5 p-1.5 select-none w-full box-border">
              <button 
                onClick={() => window.open('https://vrnt-app.onrender.com/#/login', '_blank', 'noopener,noreferrer')}
                className="bg-[#ff7f5c] hover:bg-[#ff9173] text-white text-center no-underline font-sans font-extrabold uppercase rounded py-3.5 px-1 text-sm tracking-wide transition-all border-none cursor-pointer flex items-center justify-center w-full shadow-md leading-tight"
              >
                Login Here
              </button>
            </div>
          ) : (
            /* OPEN STATE: Login Button + Full Directory with larger text */
            <>
              <div className="shrink-0 border-b border-[#08152b] p-2 bg-[#0b1b38]">
                <button 
                  onClick={() => window.open('https://vrnt-app.onrender.com/#/login', '_blank', 'noopener,noreferrer')}
                  className="bg-[#ff7f5c] hover:bg-[#ff9173] text-white text-center no-underline font-sans font-bold uppercase rounded py-2 text-sm px-2 transition-all border-none cursor-pointer flex items-center justify-center w-full shadow-sm"
                >
                  Login Here
                </button>
              </div>
              
              <div className="flex flex-col gap-1 p-2 pb-6 overflow-y-auto no-scrollbar flex-grow">
                <button onClick={() => handleNavigate('home')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('home') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Home</button>
                <button onClick={() => handleNavigate('mission')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('mission') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Mission</button>
                <button onClick={() => handleNavigate('activities')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('activities') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Activities</button>
                <button onClick={() => handleNavigate('vedas')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('vedas') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Vedas</button>
                <button onClick={() => handleNavigate('pariksha')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('pariksha') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Pariksha</button>
                <button onClick={() => handleNavigate('gallery')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('gallery') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Gallery</button>
                <button onClick={() => handleNavigate('history')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('history') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>History</button>
                <button onClick={() => handleNavigate('trustees')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('trustees') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Trustees</button>
                <button onClick={() => handleNavigate('donate')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('donate') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Donate</button>
                <button onClick={() => handleNavigate('contact')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('contact') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Contact</button>
                <button onClick={() => handleNavigate('announcements')} className={`block text-left w-full no-underline py-2 px-3 font-sans font-bold text-base rounded cursor-pointer transition-colors whitespace-nowrap bg-transparent border-none ${isCurrentPage('announcements') ? 'bg-[#203c70] text-white' : 'text-[#b0c4de] hover:text-white hover:bg-white/5'}`}>Announcements</button>
              </div>
            </>
          )}
        </aside>
      )}

      {/* Floating Notification Bell Button */}
      <button 
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="fixed bottom-6 right-6 bg-[#1a365d] text-white border border-[#222] cursor-pointer z-[1200] text-lg md:text-xl rounded-full h-12 w-12 md:h-14 md:w-14 flex items-center justify-center shadow-2xl hover:bg-[#224273] hover:scale-105 transition-all duration-200"
      >
        🔔
      </button>

      {/* Main Page Content Wrapper */}
      <div 
        className={`w-full max-w-[1440px] mx-auto box-border transition-all duration-300 ease-in-out ${
          isMobile 
            ? (isMenuOpen ? 'pt-[210px] sm:pt-[240px] pl-[124px] pr-2' : 'pt-[210px] sm:pt-[240px] pl-[48px] pr-2')
            : (isMenuOpen ? 'pt-[200px] pl-[220px] pr-0' : 'pt-[200px] pl-[88px] pr-0')
        }`}
        style={{ 
          paddingRight: !isMobile ? (isDrawerOpen ? '398px' : '19px') : undefined
        }}
      >
        <main className="w-full max-w-full overflow-x-hidden pt-0 transition-all duration-300">
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