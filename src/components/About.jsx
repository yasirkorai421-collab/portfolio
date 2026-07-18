import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Layout, Database } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="text-brand-orange" size={24} />,
    items: ['React 19 & Next.js 15', 'TypeScript & JS', 'Tailwind CSS', 'Vite']
  },
  {
    category: 'Backend & DB',
    icon: <Server className="text-brand-orange" size={24} />,
    items: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Supabase']
  },
  {
    category: 'State & Storage',
    icon: <Database className="text-brand-orange" size={24} />,
    items: ['Zustand', 'Cloudinary', 'Upstash Redis']
  },
  {
    category: 'DevOps & Tools',
    icon: <Code2 className="text-brand-orange" size={24} />,
    items: ['Vercel & Git/GitHub', 'REST & WhatsApp APIs', 'SMS API']
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-orange font-medium tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">Engineering the Future</h3>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6 text-brand-light/80 text-lg leading-relaxed"
          >
            <p>
              I am a passionate <strong>Full-Stack Web Developer</strong> and a BSSE student at UET Lahore. Operating under my brand <strong>Yasir Dev (YD)</strong>, I build production-grade websites for local businesses in Kot Addu and beyond.
            </p>
            <p>
              My strategy involves building live, polished demos first—like fashion shops, clinic portals, and elegant marriage hall websites—and then pitching directly to clients. This proactive approach turns cold outreach into real client conversations.
            </p>
            <p>
              I specialize in the modern React ecosystem (Next.js 15, React 19) along with powerful backend tools like Prisma, Supabase, and PostgreSQL, ensuring every project is scalable and performant.
            </p>
          </motion.div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy-dark p-6 rounded-xl border border-navy-light/20 hover:border-brand-orange/50 transition-colors group"
              >
                <div className="bg-navy p-3 rounded-lg inline-block mb-4 shadow-lg group-hover:shadow-brand-orange/20 transition-all">
                  {skill.icon}
                </div>
                <h4 className="text-white font-bold mb-3 font-heading">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-brand-muted text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-brand-orange rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
