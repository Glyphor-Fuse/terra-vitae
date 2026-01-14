import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/motion/Reveal';
import { SignatureInteraction } from '../components/effects/SignatureInteraction';
import { LuArrowRight } from 'react-icons/lu';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#121212] font-sans overflow-x-hidden selection:bg-[#C18C5D] selection:text-white">
      {/* Fonts & Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Inter:wght@100;300;900&display=swap');
        
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        .glass-nav {
          background: rgba(249, 247, 242, 0.7);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(193, 140, 93, 0.1);
        }
      `}</style>

      {/* Custom Cursor */}
      <div 
        className="fixed w-5 h-5 border border-[#C18C5D] rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-linear hidden md:block"
        style={{ 
          left: 0, 
          top: 0, 
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)` 
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-nav px-8 py-6 flex justify-between items-center">
        <div className="text-xs tracking-[0.4em] font-black uppercase text-[#1D3557]">Aetheria</div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-light">
          <a href="#" className="hover:text-[#C18C5D] transition-colors">The Sanctuary</a>
          <a href="#" className="hover:text-[#C18C5D] transition-colors">Experiences</a>
          <a href="#" className="hover:text-[#C18C5D] transition-colors">Our Ethos</a>
        </div>
        <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#C18C5D]">Inquire</a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-40 px-8 flex flex-col items-center">
        <Reveal width="100%" className="mb-12">
          <div className="w-full flex justify-between items-end">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C18C5D] mb-2">Established in Puglia, Italy</span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C18C5D] mb-2">01 / 04</span>
          </div>
        </Reveal>
        
        <Reveal>
          <h1 className="font-serif text-center text-[clamp(4rem,15vw,12rem)] leading-[0.85] font-black uppercase tracking-[-0.02em]">
            <span className="block">Silent</span>
            <span className="block italic font-light ml-24 md:ml-48">Luxury</span>
          </h1>
        </Reveal>

        <Reveal width="100%" className="max-w-6xl mt-20 relative">
          <div className="w-full h-[600px] overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000" 
               alt="Amalfi Coast Landscape" 
               className="w-full h-full object-cover grayscale-[20%] brightness-90"
             />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-[#F9F7F2] p-12 max-w-md hidden md:block">
            <p className="text-lg font-light leading-relaxed">
              An intimate retreat carved into the limestone cliffs of the Southern Adriatic. Where the sun meets the soul.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Narrative Section */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <Reveal>
              <h2 className="font-serif text-6xl md:text-8xl leading-none mb-8 tracking-[-0.02em]">
                Find your <br/><span className="italic font-light">inner still.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-xl font-light leading-relaxed text-gray-600 mb-12">
                Aetheria is not just a destination; it is a sensory reconnection. We specialize in Ayurvedic-inspired Mediterranean rituals, hyper-local gastronomy, and deep silence.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <button className="relative px-10 py-4 border border-[#C18C5D] overflow-hidden group transition-colors duration-400 hover:text-white text-[#121212]">
                <span className="absolute inset-0 w-0 bg-[#C18C5D] transition-all duration-400 ease-out group-hover:w-full -z-10"></span>
                <span className="relative z-10 tracking-[0.3em] text-[10px] uppercase">Explore the Rituals</span>
              </button>
            </Reveal>
          </div>
          <div className="flex flex-col gap-8">
            <Reveal delay={0.3}>
              <div className="h-80 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" 
                  alt="Wellness Treatment"
                />
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="h-[500px] ml-12 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1518115391078-f6bd10f6575a?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out group-hover:scale-110" 
                  alt="Italian Villa Interior"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full Screen Immersive Parallax */}
      <section className="relative h-screen overflow-hidden">
        <SignatureInteraction type="parallax" className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Infinity Pool"
          />
        </SignatureInteraction>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white z-10">
          <div className="text-center">
            <Reveal>
              <h3 className="font-serif text-2xl uppercase tracking-[1em] mb-4">The Infinity Pool</h3>
              <div className="w-1 bg-white h-24 mx-auto"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-60 px-8 text-center bg-[#1D3557] text-[#F9F7F2]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.5em] mb-12 block opacity-50">The Experience</span>
            <h2 className="font-serif text-5xl md:text-7xl italic font-light leading-tight tracking-[-0.02em]">
              "The Mediterranean is not just a sea, it is a philosophy of light and time."
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-20 items-start">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Location</h4>
              <p className="font-light text-gray-600 leading-relaxed">Litoranea Salentina, <br/>73014 Gallipoli LE, <br/>Italy</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Inquiries</h4>
              <p className="font-light text-gray-600 leading-relaxed">concierge@aetheria.it<br/>+39 0833 1234567</p>
            </div>
            <div className="flex flex-col items-end">
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Newsletter</h4>
              <div className="flex border-b border-[#C18C5D] w-full">
                <input type="text" placeholder="Email Address" className="bg-transparent py-4 outline-none w-full font-light placeholder:text-gray-400" />
                <button className="uppercase text-[10px] tracking-widest px-4 hover:text-[#C18C5D] transition-colors">Join</button>
              </div>
            </div>
          </div>
          <div className="mt-40 pt-12 border-t border-gray-200 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-400"> 2024 Aetheria Wellness</span>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-400">
              <a href="#" className="hover:text-[#C18C5D] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#C18C5D] transition-colors">Privacy</a>
            </div>
          </div>
        </Reveal>
      </footer>
    </div>
  );
};

export default Index;
