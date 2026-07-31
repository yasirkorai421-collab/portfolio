import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { ArrowRight, Download } from 'lucide-react'
import { profileImage } from '../assets/images.js'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-navy-dark/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-primary font-medium tracking-wider uppercase mb-4 tracking-widest"
            >
              Welcome to my portfolio
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight"
            >
              {"Hi, I'm "}
              <span className="gradient-text text-glow inline-block hover:scale-110 transition-transform duration-300 cursor-default">
                Yasir Korai
              </span>
              <br />
              <span className="text-3xl md:text-5xl text-brand-light/80 block mt-4 min-h-[60px]">
                {"I build "}
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
                  className="gradient-text font-bold"
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-brand-muted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Passionate developer dedicated to creating exceptional digital experiences.
              I specialize in turning complex problems into elegant, efficient, and user-friendly solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group cursor-pointer hover:scale-105 active:scale-95 transition-all"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/cv.png"
                download="Yasir_Korai_CV.png"
                className="px-6 py-3 border-2 border-brand-primary/50 text-brand-light rounded-full hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-300 font-medium w-full sm:w-auto flex items-center justify-center gap-2 hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-brand-primary/40 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-4 border-dashed border-brand-secondary/30 rounded-full"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-8 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 rounded-full overflow-hidden shadow-2xl shadow-brand-primary/30 border-4 border-transparent hover:border-brand-primary transition-all duration-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 animate-pulse" />
                <img
                  src={profileImage}
                  alt="Yasir Korai"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 relative z-10"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}