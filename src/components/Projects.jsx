import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Eye, Smartphone } from 'lucide-react'
import { FaGithub, FaAndroid, FaApple, FaWindows } from 'react-icons/fa'

const projects = [
  {
    title: "Leo's Cafe",
    description: "A modern, interactive website for a cafe featuring an elegant design, beautiful menu navigation, and a smooth customer experience that brings the warmth of the cafe to the web.",
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Web Design', 'UI/UX', 'Responsive'],
    github: 'https://github.com/yasirkorai421-collab/Leo-s-Cafe',
    demo: 'https://leo-s-cafe.vercel.app',
    category: 'Business',
    highlight: false,
  },
  {
    title: 'Fashion Shop',
    description: 'A sleek online fashion retail platform showcasing curated collections with a minimalist aesthetic, product filtering, and a seamless shopping experience.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'E-Commerce', 'Tailwind CSS', 'State Mgmt'],
    github: 'https://github.com/yasirkorai421-collab/fashion-shop',
    demo: 'https://fashion-shop-lac-gamma.vercel.app',
    category: 'E-Commerce',
    highlight: true,
  },
  {
    title: 'Medical Center',
    description: 'A comprehensive healthcare portal designed for patient management, appointment scheduling, and critical facility information — professional and easy to navigate.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Healthcare', 'Responsive', 'Forms'],
    github: 'https://github.com/yasirkorai421-collab/medical-center',
    demo: 'https://medical-center-olive.vercel.app',
    category: 'Healthcare',
    highlight: false,
  },
  {
    title: 'Marriage Hall',
    description: 'A premium booking and gallery platform for a marriage hall, highlighting luxury decor, grand capacity, and a polished booking flow that converts visitors into clients.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'Booking', 'Gallery'],
    github: 'https://github.com/yasirkorai421-collab/marriage-hall',
    demo: 'https://marriage-hall-datg.vercel.app',
    category: 'Events',
    highlight: false,
  },
  {
    title: 'YasirDev Portfolio',
    description: 'The very portfolio you are looking at! Built with React, Framer Motion and Tailwind CSS — featuring smooth animations, scroll interactions, and a fully responsive design.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Framer Motion', 'Tailwind', 'Vite'],
    github: 'https://github.com/yasirkorai421-collab/portfolio',
    demo: 'https://yasir-dev-kot-addu.vercel.app',
    category: 'Portfolio',
    highlight: true,
    platformIcon: null,
  },
  {
    title: 'Cross-Platform Mobile App',
    description: 'A React Native application targeting both Android & iOS — featuring smooth navigation, local storage, REST API integration, and a polished mobile-first UI design.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    tags: ['React Native', 'Expo', 'Android', 'iOS'],
    github: 'https://github.com/yasirkorai421-collab',
    demo: 'https://github.com/yasirkorai421-collab',
    category: 'Apps',
    highlight: false,
    platformIcon: (
      <div className="flex items-center gap-1">
        <FaAndroid size={14} className="text-green-400" />
        <FaApple size={14} className="text-white" />
      </div>
    ),
  },
]

const categories = ['All', 'E-Commerce', 'Healthcare', 'Business', 'Events', 'Apps', 'Portfolio']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-secondary font-medium tracking-widest uppercase mb-2">My Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading gradient-text">Featured Projects</h3>
            <p className="text-brand-muted mt-4 max-w-2xl mx-auto">
              A showcase of real-world projects — from local business websites to full-featured e-commerce platforms.
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white shadow-lg shadow-brand-primary/30 scale-105'
                  : 'bg-white/5 text-brand-muted border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className={`group card-gradient rounded-2xl overflow-hidden border transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-primary/20 flex flex-col h-full relative ${
                  project.highlight ? 'border-brand-primary/40 hover:border-brand-primary/70' : 'border-white/10 hover:border-brand-primary/40'
                }`}
              >
                {project.highlight && (
                  <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Featured
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent group-hover:from-navy-dark/80 group-hover:via-transparent transition-all duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Category badge on image */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
                    <div className="bg-navy-dark/80 backdrop-blur-sm border border-white/20 text-brand-muted text-xs px-2.5 py-1 rounded-full">
                      {project.category}
                    </div>
                    {project.platformIcon && (
                      <div className="bg-navy-dark/80 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full flex items-center gap-1">
                        {project.platformIcon}
                      </div>
                    )}
                  </div>

                  {/* Quick action overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 bg-brand-primary text-navy-dark px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                    >
                      <Eye size={16} /> Live Demo
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2 font-heading group-hover:gradient-text transition-colors">{project.title}</h4>
                  <p className="text-brand-muted text-sm mb-5 flex-grow group-hover:text-brand-light transition-colors leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-white/5 backdrop-blur-sm text-brand-light rounded-full border border-white/10 hover:bg-gradient-to-r hover:from-brand-primary/20 hover:to-brand-secondary/20 hover:border-brand-primary/30 transition-all cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    <motion.a 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github} 
                      className="text-brand-muted hover:text-brand-primary transition-colors flex items-center gap-1.5 text-sm" 
                      aria-label="GitHub Repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={18} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demo} 
                      className="text-brand-muted hover:text-brand-secondary transition-colors flex items-center gap-1.5 text-sm" 
                      aria-label="Live Demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        
        <div className="mt-16 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/yasirkorai421-collab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brand-primary/50 text-brand-primary rounded-full hover:bg-brand-primary hover:text-navy-dark transition-all duration-300 font-semibold group"
            >
              <FaGithub size={20} />
              <span>View All Projects on GitHub</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
