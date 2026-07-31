import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Layout, Database, GraduationCap, Briefcase, Award, MapPin } from 'lucide-react'
import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa'

const skills = [
  {
    category: 'Frontend',
    icon: <Layout className="text-brand-primary" size={22} />,
    items: ['React 19 & Next.js 15', 'TypeScript & JavaScript', 'Tailwind CSS & CSS3', 'Vite & Webpack'],
    color: 'from-brand-primary/20 to-brand-primary/5',
    border: 'border-brand-primary/20',
  },
  {
    category: 'Backend & DB',
    icon: <Server className="text-brand-secondary" size={22} />,
    items: ['Node.js & Express', 'PostgreSQL & Prisma', 'Supabase & Firebase', 'REST APIs'],
    color: 'from-brand-secondary/20 to-brand-secondary/5',
    border: 'border-brand-secondary/20',
  },
  {
    category: 'Mobile & Desktop',
    icon: (
      <div className="flex items-center gap-1">
        <FaAndroid className="text-green-400" size={18} />
        <FaApple className="text-white" size={18} />
        <FaWindows className="text-sky-400" size={16} />
      </div>
    ),
    items: ['React Native (Android & iOS)', 'Electron (Windows Desktop)', 'Tauri (Lightweight Desktop)', 'Expo (Cross-Platform)'],
    color: 'from-green-400/20 to-sky-400/5',
    border: 'border-green-400/20',
  },
  {
    category: 'State & Storage',
    icon: <Database className="text-brand-accent" size={22} />,
    items: ['Zustand & Context API', 'Cloudinary (Media)', 'Upstash Redis', 'Local Storage & Cookies'],
    color: 'from-brand-accent/20 to-brand-accent/5',
    border: 'border-brand-accent/20',
  },
  {
    category: 'DevOps & Tools',
    icon: <Code2 className="text-brand-purple" size={22} />,
    items: ['Vercel & Netlify', 'Git & GitHub', 'REST & WhatsApp APIs', 'Figma & Adobe XD'],
    color: 'from-brand-purple/20 to-brand-purple/5',
    border: 'border-brand-purple/20',
  },
]

const timeline = [
  {
    year: '2023',
    icon: <GraduationCap size={16} />,
    title: 'Started BSSE at UET Lahore',
    description: 'Enrolled in Bachelor of Software Engineering, building a strong CS foundation.',
    color: 'text-brand-primary',
    dot: 'bg-brand-primary',
  },
  {
    year: '2023',
    icon: <Code2 size={16} />,
    title: 'Began Web Development Journey',
    description: 'Self-taught HTML, CSS, and JavaScript — built my first landing pages.',
    color: 'text-brand-accent',
    dot: 'bg-brand-accent',
  },
  {
    year: '2024',
    icon: <Award size={16} />,
    title: 'Mastered React & Mobile Dev',
    description: 'Deep-dived into React, Next.js, React Native for Android & iOS, and Electron for Windows apps.',
    color: 'text-brand-secondary',
    dot: 'bg-brand-secondary',
  },
  {
    year: '2024',
    icon: <Briefcase size={16} />,
    title: 'Launched Yasir Dev Brand',
    description: 'Started building production-grade demos for local businesses in Kot Addu and beyond.',
    color: 'text-brand-purple',
    dot: 'bg-brand-purple',
  },
  {
    year: '2025',
    icon: <MapPin size={16} />,
    title: 'Freelancing & Growing',
    description: 'Delivering web, mobile & desktop apps — cafes, clinics, marriage halls & e-commerce stores.',
    color: 'text-green-400',
    dot: 'bg-green-400',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-navy-dark to-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '3s'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-primary font-medium tracking-widest uppercase mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading gradient-text">Engineering the Future</h3>
            <p className="text-brand-muted mt-4 max-w-2xl mx-auto">
              Get to know the developer behind the code — my journey, skills, and what drives me to build.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>

        {/* Bio + Quick Facts */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-14">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-5 text-brand-light/80 text-lg leading-relaxed"
          >
            <div className="bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/20 rounded-2xl p-6">
              <p className="text-brand-light/90">
                I am a passionate <strong className="text-brand-primary">Full-Stack Developer</strong> and BSSE student at <strong>UET Lahore</strong>. Under my brand <strong className="gradient-text">Yasir Dev (YD)</strong>, I build production-grade web, mobile (Android & iOS), and Windows desktop applications for businesses of all sizes.
              </p>
            </div>
            <p>
              My strategy involves building live, polished demos first — like fashion shops, clinic portals, and elegant marriage hall websites — and then pitching directly to clients. This proactive approach turns cold outreach into real client conversations.
            </p>
            <p>
              I specialize in the modern React ecosystem (Next.js 15, React 19), cross-platform mobile apps with React Native (Android & iOS), Windows desktop apps with Electron & Tauri, and powerful backend tools like Prisma, Supabase, and PostgreSQL.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { label: 'Location', value: 'Kot Addu, Pakistan' },
                { label: 'Education', value: 'BSSE @ UET Lahore' },
                { label: 'Platforms', value: 'Web · Android · iOS · Windows' },
                { label: 'Status', value: '🟢 Open to Work' },
              ].map((fact) => (
                <div key={fact.label} className="bg-navy-dark/50 border border-white/10 rounded-xl p-3">
                  <p className="text-brand-muted text-xs uppercase tracking-wide">{fact.label}</p>
                  <p className="text-white font-medium text-sm mt-1">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Platform highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 grid grid-cols-1 gap-4"
          >
            {[
              {
                platforms: [{ icon: <FaAndroid size={20} className="text-green-400" />, name: 'Android' }, { icon: <FaApple size={20} className="text-white" />, name: 'iOS' }],
                title: 'Mobile App Development',
                desc: 'Cross-platform apps with React Native & Expo — a single codebase that delivers a native feel on both Android and iOS.',
                tags: ['React Native', 'Expo', 'Cross-Platform'],
                color: 'border-green-400/30 from-green-400/10',
              },
              {
                platforms: [{ icon: <FaWindows size={20} className="text-sky-400" />, name: 'Windows' }],
                title: 'Windows Desktop Apps',
                desc: 'Native-feeling desktop experiences using Electron and Tauri, powered by web technologies for fast delivery.',
                tags: ['Electron', 'Tauri', 'Desktop UI'],
                color: 'border-sky-400/30 from-sky-400/10',
              },
              {
                platforms: [{ icon: <Code2 size={20} className="text-brand-primary" />, name: 'Web' }],
                title: 'Web Applications',
                desc: 'Fast, scalable, SEO-ready web apps and e-commerce platforms built with React, Next.js, and modern backend tools.',
                tags: ['React', 'Next.js', 'Node.js'],
                color: 'border-brand-primary/30 from-brand-primary/10',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className={`bg-gradient-to-br ${item.color} to-transparent border rounded-xl p-5 flex items-start gap-4 transition-all duration-300`}
              >
                <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                  {item.platforms.map((p) => (
                    <div key={p.name} title={p.name}>{p.icon}</div>
                  ))}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-base">{item.title}</h4>
                  <p className="text-brand-muted text-sm leading-relaxed mb-2">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-brand-light">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid — full width */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-bold text-white mb-6 font-heading text-center"
          >
            Tech Stack & Tools
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${skill.color} backdrop-blur-sm p-5 rounded-xl border ${skill.border} hover:border-white/30 transition-all duration-300 group hover:shadow-xl hover:shadow-brand-primary/10 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-navy-dark/50 backdrop-blur-sm p-2.5 rounded-lg inline-block mb-3 shadow-lg relative z-10"
                >
                  {skill.icon}
                </motion.div>
                <h4 className="text-white font-bold mb-2 font-heading text-sm relative z-10">{skill.category}</h4>
                <ul className="space-y-1.5 relative z-10">
                  {skill.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + i * 0.04 }}
                      className="text-brand-muted text-xs flex items-center gap-2 group-hover:text-brand-light transition-colors"
                    >
                      <span className="w-1 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">My Journey</h3>
            <p className="text-brand-muted mt-2">From student to professional — the milestones that shaped me.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content card */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-navy-light/30 border border-white/10 hover:border-brand-primary/30 rounded-xl p-5 transition-all duration-300 group"
                    >
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className={`${item.color} opacity-80`}>{item.icon}</span>
                        <span className={`text-xs font-bold ${item.color} bg-white/5 px-2 py-0.5 rounded-full`}>{item.year}</span>
                      </div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-brand-muted text-sm">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6">
                    <div className={`w-4 h-4 ${item.dot} rounded-full shadow-lg ring-4 ring-navy-dark`} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
