import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { ArrowRight, Download } from 'lucide-react'
import { profileImage } from '../assets/images.js'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-light/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-brand-orange font-medium tracking-wider uppercase mb-4 tracking-widest">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight">
              Hi, I'm <span className="text-glow text-brand-orange">Yasir Korai</span>
              <br />
              <span className="text-3xl md:text-5xl text-brand-light/80 block mt-4 min-h-[60px]">
                I build{' '}
                <TypeAnimation
                  sequence={[
                    'modern React apps.',
                    2000,
                    'interactive UIs.',
                    2000,
                    'e-commerce platforms.',
                    2000,
                    'digital experiences.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-white"
                  repeat={Infinity}
                />
              </span>
            </h1>
            
            <p className="text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Passionate developer dedicated to creating exceptional digital experiences. 
              I specialize in turning complex problems into elegant, efficient, and user-friendly solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/cv.png"
                download="Yasir_Korai_CV.png"
                className="px-6 py-3 border border-brand-light/20 text-brand-light rounded-full hover:bg-brand-light/5 transition-all duration-300 font-medium w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-none relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-4 border-brand-orange/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-4 border-dashed border-brand-light/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image container */}
              <div className="absolute inset-8 bg-navy-light rounded-full overflow-hidden shadow-2xl shadow-brand-orange/20 border-4 border-brand-orange/50">
                 <img 
                   src={profileImage} 
                   alt="Yasir Korai" 
                   className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                 />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
