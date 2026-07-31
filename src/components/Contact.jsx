import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Clock, CheckCircle } from 'lucide-react'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'yasirkorai421@gmail.com',
    href: 'mailto:yasirkorai421@gmail.com',
    color: 'text-brand-primary',
    bg: 'from-brand-primary/20 to-brand-primary/5',
    border: 'border-brand-primary/20',
  },
  {
    icon: <FaWhatsapp size={22} />,
    label: 'WhatsApp',
    value: '+92 335 2267692',
    href: 'https://wa.me/923352267692',
    color: 'text-green-400',
    bg: 'from-green-400/20 to-green-400/5',
    border: 'border-green-400/20',
  },
  {
    icon: <MapPin size={22} />,
    label: 'Location',
    value: 'Kot Addu, Punjab, Pakistan',
    href: null,
    color: 'text-brand-secondary',
    bg: 'from-brand-secondary/20 to-brand-secondary/5',
    border: 'border-brand-secondary/20',
  },
  {
    icon: <Clock size={22} />,
    label: 'Response Time',
    value: 'Usually within 24 hours',
    href: null,
    color: 'text-brand-accent',
    bg: 'from-brand-accent/20 to-brand-accent/5',
    border: 'border-brand-accent/20',
  },
]

const socialLinks = [
  { icon: <FaGithub size={22} />, href: 'https://github.com/yasirkorai421-collab', label: 'GitHub', color: 'hover:bg-brand-primary hover:border-brand-primary' },
  { icon: <FaLinkedin size={22} />, href: 'https://linkedin.com/in/yasirdev', label: 'LinkedIn', color: 'hover:bg-brand-secondary hover:border-brand-secondary' },
  { icon: <FaWhatsapp size={22} />, href: 'https://wa.me/923352267692', label: 'WhatsApp', color: 'hover:bg-green-500 hover:border-green-500' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-navy-dark to-navy relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2.5s'}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-accent font-medium tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading gradient-text">Let's Work Together</h3>
            <p className="text-brand-muted mt-4 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Drop me a message and let's bring your vision to life.
            </p>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary mx-auto mt-6 rounded-full"
            />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column — Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 space-y-6"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-3 font-heading">Contact Information</h4>
              <p className="text-brand-muted leading-relaxed">
                Whether you have a question, a project in mind, or just want to say hi — I'll try my best to get back to you within 24 hours!
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-4 bg-gradient-to-br ${info.bg} backdrop-blur-sm border ${info.border} rounded-xl p-4 group transition-all duration-300`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`${info.color} flex-shrink-0`}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <p className="text-brand-muted text-xs uppercase tracking-wide mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className={`${info.color} font-medium text-sm hover:underline transition-colors`}>
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-brand-muted text-sm mb-4 uppercase tracking-wide">Connect on socials</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted ${social.color} hover:text-white transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability banner */}
            <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 border border-green-400/30 rounded-xl p-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="text-green-400 font-semibold text-sm">Currently Available</p>
                <p className="text-brand-muted text-xs">Open to freelance projects & collaborations</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-gradient p-12 rounded-2xl border border-green-400/30 shadow-xl flex flex-col items-center justify-center text-center min-h-[400px]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="text-green-400 mb-6"
                >
                  <CheckCircle size={64} />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-3">Message Sent!</h4>
                <p className="text-brand-muted max-w-sm">
                  Thank you for reaching out. I'll get back to you within 24 hours. Looking forward to working with you!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card-gradient p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-muted mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-dark/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-brand-muted/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-muted mb-2">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-dark/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-brand-muted/50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-muted mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-navy-dark/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-brand-muted/50"
                    placeholder="Project Inquiry / Collaboration"
                  />
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-brand-muted mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-navy-dark/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none placeholder:text-brand-muted/50"
                    placeholder="Tell me about your project — what you need, your timeline, and budget..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex-1 sm:flex-none sm:w-auto flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  <motion.a
                    href="https://wa.me/923352267692"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/40 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 font-medium text-sm"
                  >
                    <FaWhatsapp size={18} />
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
