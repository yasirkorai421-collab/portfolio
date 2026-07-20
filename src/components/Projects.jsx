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
    <section id="projects" className="py-24 bg-navy-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-orange font-medium tracking-widest uppercase mb-2">My Work</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">Featured Projects</h3>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-navy rounded-2xl overflow-hidden border border-navy-light/30 hover:border-brand-orange/50 transition-all duration-300 shadow-lg hover:shadow-brand-orange/10 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-3 font-heading">{project.title}</h4>
                <p className="text-brand-muted mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-navy-light/50 text-brand-light rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.github} className="text-brand-muted hover:text-white transition-colors" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.demo} className="text-brand-muted hover:text-brand-orange transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
          >
            <a href="https://github.com/yasirkorai421-collab" target="_blank" rel="noreferrer" className="inline-block border-b border-brand-orange text-brand-orange hover:text-white hover:border-white transition-colors pb-1">
              View more on GitHub
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
