import { motion } from 'framer-motion';

const jobs = [
  {
    title: "Systems Software Engineer",
    team: "Core Infrastructure",
    location: "Remote",
    type: "Full-Time"
  },
  {
    title: "Machine Learning Engineer (Edge)",
    team: "Model Optimization",
    location: "Remote",
    type: "Full-Time"
  },
  {
    title: "Applied AI Researcher",
    team: "Cognitive Architecture",
    location: "Remote",
    type: "Full-Time"
  }
];

export default function Careers() {
  return (
    <div className="w-full min-h-screen bg-[#050507] text-[#E2E8F0] font-sans pt-32 pb-24">
      
      <section className="px-[5%] max-w-5xl mx-auto mb-24 text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-7xl font-display text-white mb-8 tracking-tight">
            Build the brain.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
            We are a highly concentrated team of engineers obsessed with local compute and human cognition. No bureaucracy. No agile coaches. Just hard problems and deep work.
          </p>
        </motion.div>
      </section>

      <section className="px-[5%] max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="bg-[#0A0A0C] border border-white/5 rounded-sm p-8 md:p-12 mb-16"
        >
          <h2 className="text-2xl text-white font-display mb-6">Our Operating Principles</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400 font-light">
            <li className="flex flex-col gap-2">
              <span className="text-white font-medium">01. Output over Optics</span>
              We don't care about your hours. We care about the elegance and performance of your code.
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-white font-medium">02. Uncompromising Privacy</span>
              If a feature requires cloud processing for user data, the feature is fundamentally broken.
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-white font-medium">03. Extreme Ownership</span>
              You build it, you test it, you ship it, you maintain it. 
            </li>
          </ul>
        </motion.div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-8 border-b border-white/10 pb-4">Open Requisitions</h3>
          
          <div className="flex flex-col gap-4">
            {jobs.map((job, idx) => (
              <motion.a 
                href="#"
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-white/[0.01] border border-white/[0.02] hover:border-white/20 transition-all duration-300 rounded-sm cursor-pointer"
              >
                <div>
                  <h4 className="text-xl text-white font-display mb-2">{job.title}</h4>
                  <div className="flex gap-4 text-xs tracking-wider uppercase text-slate-500 font-mono">
                    <span>{job.team}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <button className="px-6 py-3 border border-slate-700 text-xs uppercase tracking-[0.2em] text-slate-300 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500">
                    Apply
                  </button>
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm font-light">
              Don't see a perfect fit? Send your GitHub/portfolio to <a href="mailto:sys@xlon.com" className="text-slate-300 hover:text-white underline decoration-white/30 underline-offset-4">sys@xlon.com</a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}