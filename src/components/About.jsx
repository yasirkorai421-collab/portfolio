import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Layout, Database } from 'lucide-react'

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="text-brand-primary" size={24} />,
    items: ['React 19 & Next.js 15', 'TypeScript & JS', 'Tailwind CSS', 'Vite'],
    color: 'from-brand-primary/20 to-brand-primary/5'
  },
  {
    category: 'Backend & DB',
    icon: <Server className="text-brand-secondary" size={24} />,
    items: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'Supabase'],
    color: 'from-brand-secondary/20 to-brand-secondary/5'
  },
  {
    category: 'State & Storage',
    icon: <Database className="text-brand-accent" size={24} />,
    items: ['Zustand', 'Cloudinary', 'Upstash Redis'],
    color: 'from-brand-accent/20 to-brand-accent/5'
  },
  {
    category: 'DevOps & Tools',
    icon: <Code2 className="text-brand-purple" size={24} />,
    items: ['Vercel & Git/GitHub', 'REST & WhatsApp APIs', 'SMS API'],
    color: 'from-brand-purple/20 to-brand-purple/5'
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-navy-dark to-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '3s'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-primary font-medium tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading gradient-text">Engineering the Future</h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent mx-auto mt-6 rounded-full"
            />
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
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${skill.color} backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 group hover:shadow-xl hover:shadow-brand-primary/10 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-navy-dark/50 backdrop-blur-sm p-3 rounded-lg inline-block mb-4 shadow-lg group-hover:shadow-brand-primary/30 transition-all relative z-10"
                >
                  {skill.icon}
                </motion.div>
                <h4 className="text-white font-bold mb-3 font-heading group-hover:gradient-text transition-colors relative z-10">{skill.category}</h4>
                <ul className="space-y-2 relative z-10">
                  {skill.items.map((item, i) => (
                    <motion.li 
                      key={item} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="text-brand-muted text-sm flex items-center gap-2 group-hover:text-brand-light transition-colors"
                    >
                      <span className="w-1 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full group-hover:w-2 group-hover:h-2 transition-all" />
                      {item}
                    </motion.li>
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
