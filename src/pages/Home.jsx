import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// 1. Import your images here
import img1 from '../assets/img1d.png';
import img2 from '../assets/img2b.jpg';
import img3 from '../assets/img3a.jpg';
import img4 from '../assets/img4c.jpg';

// Narrative Fade Component for smooth storytelling
const StoryBlock = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-150px" }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

// Image Placeholder Component with Parallax
const ParallaxImage = ({ altText, imageSrc }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Controls the parallax speed
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden bg-[#0A0A0C] border border-white/5 rounded-sm relative flex items-center justify-center group">
      
      {/* 3. The active image element */}
      <motion.img 
        style={{ y }} 
        src={imageSrc} 
        className="absolute inset-0 w-full h-[120%] object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" 
        alt={altText} 
      />
      
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full bg-[#050507] text-[#E2E8F0] font-sans selection:bg-white selection:text-black">
      
      {/* CHAPTER 1: The Hook (Hero) */}
      <section className="relative min-h-screen flex flex-col justify-center px-[5%] pt-20">
        <div className="absolute inset-0 z-0">
           <ParallaxImage imageSrc={img1} altText="Cinematic hero shot: Maybe a person looking thoughtfully at a futuristic city, or a highly aesthetic workspace." />
        </div>
        
        {/* Dark overlay to ensure text is readable over your future image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/80 to-transparent z-10" />

        <div className="z-20 max-w-3xl relative">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-[5.5rem] font-display font-medium leading-[1.05] mb-8 text-white tracking-tight"
          >
            Our mind is for creating. <br/>
            <span className="text-slate-500">Not storing.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light mb-12 max-w-2xl"
          >
            You have thousands of brilliant thoughts, ideas, and observations every day. Most of them vanish because you don't have the bandwidth to capture them. It's time for a second brain.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-slate-200 transition-colors"
          >
            Meet Your Jarvis
          </motion.button>
        </div>
      </section>

      {/* CHAPTER 2: The Problem (Relatable Story) */}
      <section className="py-32 px-[5%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 h-[500px] md:h-[700px]">
             <ParallaxImage imageSrc={img2} altText="A relatable image: A messy desk, someone looking overwhelmed, or abstract chaotic data turning into order." />
          </div>
          <div className="order-1 md:order-2">
            <StoryBlock>
              <h2 className="text-3xl md:text-5xl font-display text-white mb-8">We are drowning in details.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Think about your daily routine. How much mental energy do you spend just trying to remember what you're supposed to do? You read an incredible article, but a week later, you can't find the source. You make the same scheduling mistake three times in a row because you didn't notice the pattern.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                You aren't failing. You're just trying to be a hard drive when you were born to be a processor.
              </p>
            </StoryBlock>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: The Introduction of Jarvis */}
      <section className="py-32 px-[5%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <StoryBlock>
              <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Enter Jarvis.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Imagine waking up and simply saying, <i>"Jarvis, organize my day."</i> Instantly, you have the most optimal schedule, factoring in the habits you didn't even know you had. 
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Jarvis isn't just a chatbot. It is a deeply personal intelligence that observes your behavioral patterns over time. It learns how you think, adapts to your workflows, and acts as an invisible extension of yourself. Smarter, faster, and always paying attention.
              </p>
            </StoryBlock>
          </div>
          <div className="h-[500px] md:h-[700px]">
             <ParallaxImage imageSrc={img3} altText="Sleek, futuristic: Maybe a subtle glowing optic, AR glasses resting on a table, or a calm, abstract AI core." />
          </div>
        </div>
      </section>

      {/* CHAPTER 4: The Crucial Detail (Privacy & Offline) */}
      <section className="py-32 px-[5%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 h-[500px] md:h-[700px]">
             <ParallaxImage imageSrc={img4} altText="Concept of security: A sealed vault, minimalist dark aesthetic, or a standalone powerful server box." />
          </div>
          <div className="order-1 md:order-2">
            <StoryBlock>
              <h2 className="text-3xl md:text-5xl font-display text-white mb-8">Completely offline. <br/> Completely yours.</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                A second brain is useless if you can't trust it with your deepest thoughts. That's why Jarvis is built differently. 
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                No cloud servers. No corporate data mining. Your personal language model runs entirely offline. You can tell it absolutely anything without the fear of privacy invasion. It is the most secure companion you will ever have, locked safely within your own ecosystem.
              </p>
            </StoryBlock>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: The Climax (Call to Action) */}
      <section className="py-40 px-[5%] flex flex-col items-center justify-center text-center bg-gradient-to-t from-[#0A0A0C] to-[#050507] border-t border-white/5">
        <StoryBlock>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-8 tracking-tight">Evolve your workflow.</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
            Stop losing your best ideas to the friction of daily life. Let Jarvis handle the patterns, so you can handle the future.
          </p>
          <Link 
            to='/join' 
            className="inline-block px-10 py-5 border border-white text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-500"
            >
            Join The Waitlist
          </Link> 
        </StoryBlock>
      </section>

    </div>
  );
}