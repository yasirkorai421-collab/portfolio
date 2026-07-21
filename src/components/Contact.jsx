import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-orange font-medium tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">Let's Work Together</h3>
            <div className="w-16 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div>
              <h4 className="text-2xl font-bold text-white mb-6 font-heading">Contact Information</h4>
              <p className="text-brand-muted mb-8 leading-relaxed">
                Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-navy-dark p-3 rounded-lg text-brand-orange shadow-md">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Email</h5>
                  <p className="text-brand-muted hover:text-brand-orange transition-colors cursor-pointer">hello@yasirdev.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-navy-dark p-3 rounded-lg text-brand-orange shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Location</h5>
                  <p className="text-brand-muted">Kot Addu, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-navy-dark p-3 rounded-lg text-brand-orange shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">WhatsApp</h5>
                  <a href="https://wa.me/923352267692" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-orange transition-colors cursor-pointer">03352267692</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-navy-dark p-8 rounded-2xl border border-navy-light/20 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-muted mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-navy-light/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-muted mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-navy-light/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-brand-muted mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-navy border border-navy-light/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
