import { motion } from 'framer-motion';

const StoryBlock = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function Missions() {
  return (
    <div className="w-full min-h-screen bg-[#050507] text-[#E2E8F0] font-sans pt-32 pb-24 selection:bg-white selection:text-black">
      
      <section className="px-[5%] max-w-5xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-6 block">Directive 01</span>
          <h1 className="text-5xl md:text-7xl font-display font-medium leading-[1.05] text-white tracking-tight mb-8">
            Decentralize Cognition.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light max-w-3xl">
            We are building a future where intelligence is not monopolized by massive server farms, but distributed locally to the individual. Total privacy, absolute ownership, and zero latency.
          </p>
        </motion.div>
      </section>

      <section className="px-[5%] max-w-5xl mx-auto space-y-24">
        <StoryBlock>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-12">
            <div className="md:col-span-4">
              <h3 className="text-2xl text-white font-display">Local First</h3>
            </div>
            <div className="md:col-span-8 text-lg text-slate-400 font-light leading-relaxed">
              Cloud computing creates dependency and introduces catastrophic privacy vectors. Our primary mission is compressing advanced cognitive models to run natively on consumer hardware. Your data never leaves your silicon.
            </div>
          </div>
        </StoryBlock>

        <StoryBlock>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-12">
            <div className="md:col-span-4">
              <h3 className="text-2xl text-white font-display">Asymmetric Memory</h3>
            </div>
            <div className="md:col-span-8 text-lg text-slate-400 font-light leading-relaxed">
              Current systems forget context the moment the session ends. We are engineering persistent, offline vector databases that allow your personal agent to recall a conversation from years ago in milliseconds, forming a true digital hippocampus.
            </div>
          </div>
        </StoryBlock>

        <StoryBlock>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/5 pt-12 border-b pb-12">
            <div className="md:col-span-4">
              <h3 className="text-2xl text-white font-display">Compute Efficiency</h3>
            </div>
            <div className="md:col-span-8 text-lg text-slate-400 font-light leading-relaxed">
              Intelligence should not require a power plant. We are optimizing inference engines at the bare-metal level to maximize tokens-per-second while minimizing thermal throttling and battery drain on edge devices.
            </div>
          </div>
        </StoryBlock>
      </section>

    </div>
  );
}