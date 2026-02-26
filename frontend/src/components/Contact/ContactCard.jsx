import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


const ContactCard = ({item, index}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    const inner = (
        <motion.div
            ref={ref}
            className="group relative bg-white rounded-2xl flex flex-col gap-4 h-full"
            style={{
                padding: 'clamp(1.4rem, 3vw, 2rem)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.06)',
                cursor: item.href ? 'pointer' : 'default',
            }}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.10)' }}
        >
            <motion.div 
                className="absolute top-0 left-6 right-6 h-px rounded-full origin-left"
                style={{ background: item.iconColor }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
            />

            <motion.div
                style={{ color: item.iconColor }}
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 16 }}
            >
                {item.icon}
            </motion.div>

            <div>
                <h3
                    className="font-bold text-gray-900 mb-1.5"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}
                >
                    {item.title}
                </h3>
                <p
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.8rem, 1.7vw, 0.875rem)', color: '#888', lineHeight: 1.6 }}
                >
                    {item.detail}
                </p>
            </div>
        </motion.div>
    )

    return item.href ? (
        <a href={item.href} className='bock no-underline h-full' target={item.href.startsWith('http') ? '_blank' : undefined} rel='noreferrer'>
            {inner}
        </a>
    ) : (
        <div className='h-full'>
            {inner}
        </div>
    )
}

export default ContactCard