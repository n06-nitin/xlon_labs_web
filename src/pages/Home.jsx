import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Brain, Activity, Eye, Code, Paintbrush, BookOpen } from 'lucide-react';

// Reusable fade-in component for smooth storytelling
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="w-full bg-[#050507] text-[#E2E8F0] font-sans selection:bg-white selection:text-black">
      
      {/* 1. HERO: The Hook */}
      <section className="relative h-screen flex flex-col justify-center px-[5%] overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-slate-800/30 blur-[150px] rounded-full mix-blend-screen" />
        </motion.div>

        <div className="z-10 max-w-5xl">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="text-slate-400 font-bold tracking-[0.3em] uppercase text-xs mb-8"
          >
            Xlon Labs Architecture
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-[6rem] font-display font-medium leading-[1.1] mb-8 text-white tracking-tight"
          >
            Evolution is no longer biological.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light"
          >
            Introducing the Individual Assistant System (IAS). An offline, hyper-secure extension of your consciousness.
          </motion.p>
        </div>
      </section>

      {/* 2. THE PROBLEM: Reality Check */}
      <section className="py-32 px-[5%] border-t border-slate-900 bg-gradient-to-b from-[#050507] to-[#0A0A0C]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-10 leading-tight">
              You are a supercomputer running on legacy hardware.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 leading-relaxed mb-6">
              Humanity operates on patterns, yet we are blind to them. We repeat mistakes, exhaust our mental bandwidth on trivial scheduling, and lose critical insights because our biological memory overwrites itself.
            </p>
            <p className="text-xl text-slate-400 leading-relaxed">
              We process data linearly in an exponential world. The bottleneck isn't information; it is our capacity to retain and connect it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. THE SOLUTION: Jarvis Core Mechanics */}
      <section className="py-32 px-[5%] max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-xs tracking-[0.2em] text-slate-500 uppercase mb-16 border-b border-slate-800 pb-4">Core Infrastructure</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6">
              <Shield className="w-10 h-10 text-white" strokeWidth={1} />
              <h3 className="text-3xl font-display text-white">Absolute Privacy. Strictly Offline.</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Your mind is not a dataset for the cloud. IAS operates entirely locally. No telemetry, no external servers, no corporate data mining. It is a sealed vault of your thoughts, accessible only by you. Tell it anything.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-6">
              <Activity className="w-10 h-10 text-white" strokeWidth={1} />
              <h3 className="text-3xl font-display text-white">The Pattern Engine.</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                It watches. It learns. It adapts. IAS identifies the behavioral loops you cannot see. By analyzing your choices, it predicts friction, corrects anti-patterns, and optimizes your daily architecture before you even wake up.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col gap-6">
              <Eye className="w-10 h-10 text-white" strokeWidth={1} />
              <h3 className="text-3xl font-display text-white">Invisible Integration.</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                No intrusive screens. Delivered seamlessly through AR optics and bone-conduction audio. It is a quiet observer and an instant consultant, bridging the gap between thought and execution without breaking your focus.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col gap-6">
              <Brain className="w-10 h-10 text-white" strokeWidth={1} />
              <h3 className="text-3xl font-display text-white">The Second Brain.</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Read deeply, research endlessly, and never lose a concept. IAS creates an interconnected web of your accumulated knowledge, surfacing the exact insight you need, precisely when you need it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. THE APPLICATION: Cross-Profession Utility */}
      <section className="py-32 px-[5%] border-t border-slate-900 bg-[#020202]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-20 text-center">Built for the Builders.</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, role: "The Engineer", desc: "Instantly recall documentation. Let IAS identify architectural anti-patterns in your codebase before they compound." },
              { icon: BookOpen, role: "The Researcher", desc: "Cross-reference thousands of papers in milliseconds. Find the hidden connections in data that biological fatigue misses." },
              { icon: Paintbrush, role: "The Creative", desc: "Offload the mechanical logistics of your workflow. Preserve 100% of your cognitive bandwidth for pure artistry." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="p-8 border border-slate-800 bg-[#0A0A0C] hover:bg-[#111115] transition-colors duration-500 rounded-sm">
                  <item.icon className="w-8 h-8 text-slate-300 mb-6" strokeWidth={1.5} />
                  <h4 className="text-xl font-display text-white mb-3">{item.role}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: The Future */}
      <section className="py-40 px-[5%] flex flex-col items-center justify-center text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl font-display text-white mb-8 tracking-tight">Meet Your Jarvis.</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            The infrastructure is built. The next leap in human potential is ready for deployment.
          </p>
          <button className="bg-white text-black px-10 py-4 font-display text-sm uppercase tracking-[0.2em] font-bold hover:bg-slate-200 transition-colors">
            Initiate Sequence
          </button>
        </FadeIn>
      </section>

    </div>
  );
}