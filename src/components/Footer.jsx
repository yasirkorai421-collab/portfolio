import React from 'react'
import { Link } from 'react-scroll'
import { Heart, ArrowUp } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', to: 'home', isScroll: true },
      { name: 'About', to: 'about', isScroll: true },
      { name: 'Services', to: 'services', isScroll: true },
      { name: 'Projects', to: 'projects', isScroll: true },
      { name: 'Contact', to: 'contact', isScroll: true },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', isScroll: false },
      { name: 'Mobile Apps (Android & iOS)', isScroll: false },
      { name: 'Windows Desktop Apps', isScroll: false },
      { name: 'E-Commerce Solutions', isScroll: false },
      { name: 'Backend & APIs', isScroll: false },
      { name: 'UI/UX Design', isScroll: false },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { name: 'GitHub Profile', to: 'https://github.com/yasirkorai421-collab', isScroll: false, isExternal: true },
      { name: 'LinkedIn', to: 'https://linkedin.com/in/yasirdev', isScroll: false, isExternal: true },
      { name: 'WhatsApp Me', to: 'https://wa.me/923352267692', isScroll: false, isExternal: true },
      { name: 'Download CV', to: '/cv.html', isScroll: false, isExternal: true },
    ],
  },
]

const socialLinks = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/yasirkorai421-collab', label: 'GitHub', hoverBg: 'hover:bg-brand-primary hover:border-brand-primary' },
  { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/yasirdev', label: 'LinkedIn', hoverBg: 'hover:bg-brand-secondary hover:border-brand-secondary' },
  { icon: <FaFacebook size={20} />, href: 'https://m.facebook.com/story.php?story_fbid=1002989116029848&substory_index=1002989116029848&id=61591621546190&mibextid=Nif5oz', label: 'Facebook', hoverBg: 'hover:bg-brand-accent hover:border-brand-accent hover:text-navy-dark' },
  { icon: <FaWhatsapp size={20} />, href: 'https://wa.me/923352267692', label: 'WhatsApp', hoverBg: 'hover:bg-green-500 hover:border-green-500' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-t from-[#070a0f] to-navy-dark border-t border-white/10 pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-transparent to-brand-secondary/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <span className="text-3xl font-heading font-bold text-white">
                Yasir<span className="gradient-text text-glow">Dev</span>
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Building modern, beautiful, and scalable digital experiences. Let's create something amazing together.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted ${social.hoverBg} hover:text-white transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-5 font-heading text-sm uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.isScroll ? (
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        className="text-brand-muted text-sm hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-1.5 group"
                      >
                        <span className="w-0 h-px bg-brand-primary transition-all duration-300 group-hover:w-4" />
                        {link.name}
                      </Link>
                    ) : link.isExternal ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted text-sm hover:text-brand-primary transition-colors flex items-center gap-1.5 group"
                      >
                        <span className="w-0 h-px bg-brand-primary transition-all duration-300 group-hover:w-4" />
                        {link.name}
                      </a>
                    ) : link.isDownload ? (
                      <a
                        href={link.to}
                        download="Yasir_Korai_CV.pdf"
                        className="text-brand-muted text-sm hover:text-brand-primary transition-colors flex items-center gap-1.5 group"
                      >
                        <span className="w-0 h-px bg-brand-primary transition-all duration-300 group-hover:w-4" />
                        {link.name}
                      </a>
                    ) : (
                      <span className="text-brand-muted text-sm flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-brand-muted/40 rounded-full" />
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-muted">
          <p>© {currentYear} <span className="text-white font-medium">YasirDev</span>. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="text-brand-secondary animate-pulse" /> by{' '}
            <span className="gradient-text font-medium">Yasir Korai</span>
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-navy-dark transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

      </div>
    </footer>
  )
}
