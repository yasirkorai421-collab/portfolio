import React from 'react'
import { Link } from 'react-scroll'
import { Heart } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark border-t border-navy-light/20 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <span className="text-3xl font-heading font-bold text-white">
                Yasir<span className="text-brand-orange text-glow">Dev</span>
              </span>
            </Link>
            <p className="text-brand-muted max-w-sm">
              Building modern, beautiful, and scalable digital experiences. Let's create something amazing together.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/yasirkorai421-collab" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-brand-light hover:bg-brand-orange hover:text-navy-dark transition-all duration-300">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/yasirdev" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-brand-light hover:bg-brand-orange hover:text-navy-dark transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="https://m.facebook.com/story.php?story_fbid=1002989116029848&substory_index=1002989116029848&id=61591621546190&mibextid=Nif5oz" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-brand-light hover:bg-brand-orange hover:text-navy-dark transition-all duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="https://wa.me/923352267692" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-brand-light hover:bg-brand-orange hover:text-navy-dark transition-all duration-300">
              <FaWhatsapp size={20} />
            </a>
          </div>
          
        </div>

        <div className="border-t border-navy-light/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-muted">
          <p>© {currentYear} YasirDev. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <Heart size={14} className="text-brand-orange" /> by YasirDev
          </p>
        </div>
      </div>
    </footer>
  )
}
