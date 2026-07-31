import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { profileImage } from '../assets/images.js'

const socialLinks = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/yasirkorai421-collab', label: 'GitHub', color: 'hover:text-brand-primary' },
  { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/yasirdev', label: 'LinkedIn', color: 'hover:text-brand-secondary' },
  { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/923352267692', label: 'WhatsApp', color: 'hover:text-green-400' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">

      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{animationDelay: '2s'}} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-navy-dark/80" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(0,217,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-brand-primary text-sm font-medium tracking-wider">Available for Freelance Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-primary font-medium tracking-widest uppercase mb-4"
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
                    'Android & iOS apps.',
                    2000,
                    'Windows desktop apps.',
                    2000,
                    'e-commerce platforms.',
                    2000,
                    'full-stack solutions.',
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
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
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-brand-primary/50 text-brand-light rounded-full hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-300 font-medium w-full sm:w-auto flex items-center justify-center gap-2 hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <Download size={18} />
                View / Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <span className="text-brand-muted text-sm">Follow me:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-brand-muted ${social.color} transition-colors duration-200`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
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

              {/* Rotating rings */}
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

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-2 left-1/2 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(0,217,255,0.8)] -translate-x-1/2" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2"
              >
                <div className="absolute bottom-2 right-4 w-2 h-2 bg-brand-secondary rounded-full shadow-[0_0_8px_rgba(255,107,157,0.8)]" />
              </motion.div>

              {/* Profile image container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-8 rounded-full overflow-hidden shadow-2xl shadow-brand-primary/30 border-4 border-brand-primary/30 hover:border-brand-primary/60 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 z-10" />
                <img
                  src={profileImage}
                  alt="Yasir Korai - Full Stack Developer"
                  className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-700"
                />
              </motion.div>

              {/* Floating badge — Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -right-4 top-12 bg-navy-dark border border-brand-primary/40 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm"
              >
                <p className="text-brand-primary font-bold text-lg leading-none">2+</p>
                <p className="text-brand-muted text-xs">Years Exp.</p>
              </motion.div>

              {/* Floating badge — Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -left-4 bottom-16 bg-navy-dark border border-brand-secondary/40 rounded-xl px-3 py-2 shadow-xl backdrop-blur-sm"
              >
                <p className="text-brand-secondary font-bold text-lg leading-none">10+</p>
                <p className="text-brand-muted text-xs">Projects</p>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-16 text-brand-muted"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} className="text-brand-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}