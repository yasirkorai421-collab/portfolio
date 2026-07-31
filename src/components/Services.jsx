import React from 'react'
import { motion } from 'framer-motion'
import { Globe, ShoppingCart, Smartphone, Palette, Database, Zap, Monitor, Tablet } from 'lucide-react'
import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa'

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'Crafting fast, responsive, and beautiful websites using the latest React & Next.js technologies with clean, maintainable code.',
    features: ['React / Next.js', 'Responsive Design', 'SEO Optimized'],
    color: 'text-brand-primary',
    bg: 'from-brand-primary/20 to-brand-primary/5',
    border: 'border-brand-primary/30',
    shadow: 'hover:shadow-brand-primary/20',
  },
  {
    icon: <ShoppingCart size={32} />,
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with product management, cart, checkout, and payment integration for local and global businesses.',
    features: ['Product Management', 'Secure Payments', 'Inventory Tracking'],
    color: 'text-brand-secondary',
    bg: 'from-brand-secondary/20 to-brand-secondary/5',
    border: 'border-brand-secondary/30',
    shadow: 'hover:shadow-brand-secondary/20',
  },
  {
    icon: <Database size={32} />,
    title: 'Backend & APIs',
    description: 'Robust server-side solutions with Node.js, PostgreSQL, Supabase and REST APIs to power your applications at scale.',
    features: ['Node.js / Express', 'PostgreSQL & Supabase', 'REST APIs'],
    color: 'text-brand-accent',
    bg: 'from-brand-accent/20 to-brand-accent/5',
    border: 'border-brand-accent/30',
    shadow: 'hover:shadow-brand-accent/20',
  },
  {
    icon: (
      <div className="flex items-center gap-1.5">
        <FaAndroid size={28} />
        <FaApple size={26} />
      </div>
    ),
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications for Android & iOS built with React Native — a single codebase that looks and feels native on every device.',
    features: ['React Native', 'Android & iOS', 'Cross-Platform'],
    color: 'text-green-400',
    bg: 'from-green-400/20 to-green-400/5',
    border: 'border-green-400/30',
    shadow: 'hover:shadow-green-400/20',
  },
  {
    icon: <FaWindows size={30} />,
    title: 'Windows App Development',
    description: 'Native and cross-platform desktop applications for Windows using Electron and Tauri — bringing web technologies to powerful desktop experiences.',
    features: ['Electron / Tauri', 'Windows Native UX', 'Desktop Deployment'],
    color: 'text-sky-400',
    bg: 'from-sky-400/20 to-sky-400/5',
    border: 'border-sky-400/30',
    shadow: 'hover:shadow-sky-400/20',
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually stunning interfaces that keep users engaged and drive conversions — for web, mobile, and desktop apps.',
    features: ['Modern UI Design', 'User Research', 'Interactive Prototypes'],
    color: 'text-brand-purple',
    bg: 'from-brand-purple/20 to-brand-purple/5',
    border: 'border-brand-purple/30',
    shadow: 'hover:shadow-brand-purple/20',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Business Portals',
    description: 'Custom portals for clinics, restaurants, marriage halls and local businesses — built to convert visitors into customers.',
    features: ['Custom Admin Panels', 'Booking Systems', 'Client Dashboards'],
    color: 'text-orange-400',
    bg: 'from-orange-400/20 to-orange-400/5',
    border: 'border-orange-400/30',
    shadow: 'hover:shadow-orange-400/20',
  },
  {
    icon: <Zap size={32} />,
    title: 'Performance & SEO',
    description: 'Optimizing your web presence for search engines and lightning-fast performance scores that Google loves.',
    features: ['Core Web Vitals', 'On-page SEO', 'Speed Optimization'],
    color: 'text-yellow-400',
    bg: 'from-yellow-400/20 to-yellow-400/5',
    border: 'border-yellow-400/30',
    shadow: 'hover:shadow-yellow-400/20',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-navy to-navy-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-brand-secondary/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-brand-accent font-medium tracking-widest uppercase mb-2">What I Offer</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading gradient-text">My Services</h3>
            <p className="text-brand-muted mt-4 max-w-2xl mx-auto">
              From web to mobile to desktop — I build complete digital solutions for every platform, tailored to your unique business needs.
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

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {[
            { icon: <Globe size={16} />, label: 'Web', color: 'text-brand-primary border-brand-primary/30 bg-brand-primary/10' },
            { icon: <FaAndroid size={16} />, label: 'Android', color: 'text-green-400 border-green-400/30 bg-green-400/10' },
            { icon: <FaApple size={16} />, label: 'iOS', color: 'text-white border-white/30 bg-white/10' },
            { icon: <FaWindows size={16} />, label: 'Windows', color: 'text-sky-400 border-sky-400/30 bg-sky-400/10' },
          ].map((p) => (
            <div key={p.label} className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${p.color}`}>
              {p.icon}
              {p.label}
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-gradient-to-br ${service.bg} backdrop-blur-sm border ${service.border} rounded-2xl p-7 overflow-hidden hover:shadow-2xl ${service.shadow} transition-all duration-500`}
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className={`${service.color} mb-5 relative z-10`}
              >
                {service.icon}
              </motion.div>

              <h4 className="text-lg font-bold font-heading text-white mb-2 relative z-10">
                {service.title}
              </h4>

              <p className="text-brand-muted text-sm leading-relaxed mb-5 group-hover:text-brand-light transition-colors relative z-10">
                {service.description}
              </p>

              <ul className="space-y-1.5 relative z-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-brand-muted group-hover:text-brand-light transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.color.replace('text-', 'bg-')}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
