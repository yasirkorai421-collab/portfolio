import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: "Leo's Cafe",
    description: 'A modern, interactive website for a cafe featuring an elegant design and user-friendly menu navigation.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Web Design', 'UI/UX'],
    github: 'https://github.com/yasirkorai421-collab/Leo-s-Cafe',
    demo: 'https://leo-s-cafe.vercel.app'
  },
  {
    title: 'Fashion Shop',
    description: 'An online fashion retail platform showcasing collections with a sleek, minimalist aesthetic.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'E-Commerce', 'Tailwind CSS'],
    github: 'https://github.com/yasirkorai421-collab/fashion-shop',
    demo: 'https://fashion-shop-lac-gamma.vercel.app'
  },
  {
    title: 'Medical Center',
    description: 'A comprehensive healthcare portal designed for patient management and providing critical facility information.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Healthcare', 'Responsive'],
    github: 'https://github.com/yasirkorai421-collab/medical-center',
    demo: 'https://medical-center-olive.vercel.app'
  },
  {
    title: 'Marriage Hall',
    description: 'A premium booking and gallery platform for a marriage hall, highlighting luxury decor and grand capacity.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'Booking'],
    github: 'https://github.com/yasirkorai421-collab/marriage-hall',
    demo: 'https://marriage-hall-datg.vercel.app'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-orange font-medium tracking-widest uppercase mb-2">My Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">Featured Projects</h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-brand-orange mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-navy rounded-2xl overflow-hidden border border-navy-light/30 hover:border-brand-orange/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-brand-orange/20 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent group-hover:from-navy-dark/80 group-hover:via-transparent transition-all duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-brand-orange/10 z-[5]"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-brand-orange transition-colors">{project.title}</h4>
                <p className="text-brand-muted mb-6 flex-grow group-hover:text-brand-light transition-colors">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-navy-light/50 text-brand-light rounded-full hover:bg-brand-orange hover:text-navy-dark transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <motion.a 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github} 
                    className="text-brand-muted hover:text-white transition-colors" 
                    aria-label="GitHub Repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo} 
                    className="text-brand-muted hover:text-brand-orange transition-colors" 
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
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
              className="inline-block border-b-2 border-brand-orange text-brand-orange hover:text-white hover:border-white transition-all duration-300 pb-1 font-medium"
            >
              View more on GitHub
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
