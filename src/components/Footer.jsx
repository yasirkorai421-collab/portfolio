import React from 'react'
import { Link } from 'react-scroll'
import { Heart } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-navy-dark to-navy border-t border-white/10 pt-16 pb-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <span className="text-3xl font-heading font-bold text-white">
                Yasir<span className="gradient-text text-glow">Dev</span>
              </span>
            </Link>
            <p className="text-brand-muted max-w-sm">
              Building modern, beautiful, and scalable digital experiences. Let's create something amazing together.
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/yasirkorai421-collab" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 backdrop-blur-sm border border-brand-primary/30 flex items-center justify-center text-brand-light hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 cursor-pointer relative z-50"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yasirdev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/5 backdrop-blur-sm border border-brand-secondary/30 flex items-center justify-center text-brand-light hover:bg-brand-secondary hover:text-white hover:border-brand-secondary transition-all duration-300 cursor-pointer relative z-50"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="https://m.facebook.com/story.php?story_fbid=1002989116029848&substory_index=1002989116029848&id=61591621546190&mibextid=Nif5oz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 backdrop-blur-sm border border-brand-accent/30 flex items-center justify-center text-brand-light hover:bg-brand-accent hover:text-navy-dark hover:border-brand-accent transition-all duration-300 cursor-pointer relative z-50"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a 
              href="https://wa.me/923352267692" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-purple/5 backdrop-blur-sm border border-brand-purple/30 flex items-center justify-center text-brand-light hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300 cursor-pointer relative z-50"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-muted">
          <p>© {currentYear} YasirDev. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <Heart size={14} className="text-brand-secondary" /> by YasirDev
          </p>
        </div>
      </div>
    </footer>
  )
}
