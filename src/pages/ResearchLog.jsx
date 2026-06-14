import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const logs = [
  {
    id: "v0.9.4",
    date: "2026.06.12",
    title: "Optimized Edge Inference Engine",
    description: "Rewrote the core inference loop in Rust, resulting in a 40% reduction in memory overhead on M-series chips and a 15% increase in generation speed.",
    type: "Core Update"
  },
  {
    id: "v0.9.1",
    date: "2026.05.28",
    title: "Local Vector DB Integration",
    description: "Successfully integrated a highly compressed local vector database. Jarvis can now index up to 1M documents locally with sub-50ms retrieval latency.",
    type: "Architecture"
  },
  {
    id: "v0.8.0",
    date: "2026.04.15",
    title: "Initial Acoustic Model Draft",
    description: "First successful test of the entirely offline speech-to-text module. Bypassing cloud-based transcription APIs for complete auditory privacy.",
    type: "Research"
  }
];

export default function ResearchLog() {
  return (
    <div className="w-full min-h-screen bg-[#050507] text-[#E2E8F0] font-sans pt-32 pb-24">
      
      <div className="px-[5%] max-w-5xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-display text-white mb-6"
        >
          Research Log
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl font-light"
        >
          Unfiltered engineering updates, model checkpoints, and architecture decisions.
        </motion.p>
      </div>

      <div className="px-[5%] max-w-5xl mx-auto">
        <div className="border-t border-white/10">
          {logs.map((log, index) => (
            <motion.div 
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-12 border-b border-white/5 flex flex-col md:flex-row gap-8 md:gap-16 group hover:bg-white/[0.02] transition-colors p-4 -mx-4 rounded-sm"
            >
              <div className="md:w-48 flex-shrink-0">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500 block mb-2">{log.date}</span>
                <span className="text-xs border border-white/10 px-2 py-1 text-slate-400 rounded-sm inline-block">{log.type}</span>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl text-white font-display group-hover:text-blue-400 transition-colors">
                    {log.title}
                  </h3>
                  <ArrowUpRight className="text-slate-600 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </div>
                <p className="text-slate-400 font-light leading-relaxed">
                  {log.description}
                </p>
                <div className="mt-6 text-xs text-slate-600 font-mono">
                  COMMIT_HASH: {log.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}