import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Briefcase, Star, Globe } from 'lucide-react'
import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa'

const PlatformIcon = () => (
  <div className="grid grid-cols-2 gap-1">
    <Globe size={12} className="text-brand-primary" />
    <FaAndroid size={12} className="text-green-400" />
    <FaApple size={12} className="text-white" />
    <FaWindows size={12} className="text-sky-400" />
  </div>
)

const stats = [
  {
    icon: <PlatformIcon />,
    value: 4,
    suffix: '',
    label: 'Platforms Supported',
    sublabel: 'Web · Android · iOS · Windows',
    color: 'text-brand-primary',
    bg: 'from-brand-primary/20 to-brand-primary/5',
    border: 'border-brand-primary/30',
  },
  {
    icon: <Briefcase size={28} />,
    value: 10,
    suffix: '+',
    label: 'Projects Completed',
    color: 'text-brand-secondary',
    bg: 'from-brand-secondary/20 to-brand-secondary/5',
    border: 'border-brand-secondary/30',
  },
  {
    icon: <Users size={28} />,
    value: 5,
    suffix: '+',
    label: 'Happy Clients',
    color: 'text-brand-accent',
    bg: 'from-brand-accent/20 to-brand-accent/5',
    border: 'border-brand-accent/30',
  },
  {
    icon: <Star size={28} />,
    value: 2,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-brand-purple',
    bg: 'from-brand-purple/20 to-brand-purple/5',
    border: 'border-brand-purple/30',
  },
]

function CountUp({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`relative bg-gradient-to-br ${stat.bg} backdrop-blur-sm border ${stat.border} rounded-2xl p-6 text-center group overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <motion.div
                whileHover={stat.sublabel ? {} : { rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className={`${stat.color} inline-flex items-center justify-center mb-4 relative z-10`}
              >
                {stat.icon}
              </motion.div>

              <div className={`text-3xl md:text-4xl font-bold font-heading ${stat.color} mb-1 relative z-10`}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-brand-muted text-sm font-medium relative z-10">{stat.label}</p>
              {stat.sublabel && (
                <p className="text-brand-muted/60 text-xs mt-1 relative z-10">{stat.sublabel}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
