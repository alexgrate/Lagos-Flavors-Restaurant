import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"

function useInViewOnce(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1, rootMargin: '-30px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
  return visible
}

const DishCard = ({ dish, index, onAdd }) => {
  const ref = useRef(null)
  const isInView = useInViewOnce(ref)
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    if (onAdd) onAdd()
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }


  return (
    <motion.div
      ref={ref}
      className="group relative bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{
        boxShadow: '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        border: '1px solid rgba(0,0,0,0.06)',
      }}
      initial={{ opacity: 0, y: 44, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, boxShadow: '0 12px 48px rgba(0,0,0,0.12)' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className='relative overflow-hidden' style={{ height: 'clamp(180px, 22vw, 240px)' }}>
        <motion.img 
          src={dish.img}
          alt={dish.name}
          className='w-full h-full object-cover'
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        {dish.bw && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'rgba(255,255,255,0)',
              backdropFilter: 'grayscale(1)',
              WebkitBackdropFilter: 'grayscale(1)',
            }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
        )}

        {dish.isPopular && (
          <motion.div
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold"
            style={{ background: '#c0392b', fontFamily: "'DM Sans', sans-serif" }}
            initial={{ opacity: 0, scale: 0.7, x: 8 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ delay: (index % 4) * 0.1 + 0.35, type: 'spring', stiffness: 300 }}
          >
            Popular
          </motion.div>
        )}

        <div 
          className='absolute bottom-0 left-0 right-0 h-10 pointer-events-none'
          style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.07), transparent)' }}
        />
      </div>

      <div className='flex flex-col flex-1 p-4 sm:p-5 gap-2'>
        <h3 
          className='font-bold text-gray-900 leading-tight'
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}
        >
          {dish.name}
        </h3>
        <p
          className='flex-1 leading-snug'
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.75rem, 1.6vw, 0.83rem)', color: '#9a9a9a', lineHeight: 1.55 }}
        >
          {dish.desc}
        </p>

        <div className="flex items-center justify-between mt-2 pt-2" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className='flex items-center gap-1.5'>
            <span 
              className="font-bold"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1rem, 2.2vw, 1.15rem)', color: '#c0392b' }}
            >
              ₦{dish.price.toLocaleString()}
            </span>
            {dish.isSpicy && (
              <motion.span
                className='text-base leading-none'
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              >
                🌶️
              </motion.span>
            )}
          </div>

          <motion.button
            onClick={handleAdd}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
            style={{ background: '#1a4730' }}
            whileHover={{ scale: 1.12, background: '#235e3f' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            <AnimatePresence mode='wait'>
              {added ? (
                <motion.svg key="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4"
                  initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              ) : (
                <motion.svg key="plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="w-4 h-4"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                >
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )}


export default DishCard