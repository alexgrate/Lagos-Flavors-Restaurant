import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


const ChefCard = ({ chef, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
  
    return (
        <motion.div
            ref={ref}
            className="w-full"
            style={{ perspective: '1000px' }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                className="relative w-full"
                style={{
                    transformStyle: 'preserve-3d',
                    aspectRatio: '3/4',
                    cursor: 'pointer',
                }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        background: '#fff',
                        boxShadow: '0 4px 32px rgba(0,0,0,0.09)',
                        border: '1px solid rgba(0,0,0,0.05)',
                    }}
                >
                    <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
                        <img 
                            src={chef.chefImg}
                            alt={chef.name}
                            className="w-full h-full object-cover object-top"
                            style={{ transition: 'transform 0.6s ease' }}
                        />
                    </div>

                    <div className="px-5 py-4 text-center" style={{ background: '#fff' }}>
                        <h3
                            className="font-bold text-gray-900 leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 2.2vw, 1.2rem)' }}
                        >
                            {chef.name}
                        </h3>
                        <p
                            className="mt-1 font-semibold"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.78rem, 1.6vw, 0.875rem)', color: '#1a4730' }}
                        >
                            {chef.role}
                        </p>
                    </div>
                </div>

                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-end"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        boxShadow: '0 8px 48px rgba(0,0,0,0.18)',
                    }}
                >
                    <img
                        src={chef.dishImg}
                        alt={chef.dishName}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)' }}
                    />

                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: '#1a4730' }} />

                    <div className="relative z-10 px-6 pb-7 pt-4">
                        <p
                            className="uppercase tracking-widest mb-1"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', color: 'rgba(255,255,255,0.65)', letterSpacing: '0.18em' }}
                        >
                            {chef.dishLabel}
                        </p>
                        <h3
                            className="font-bold text-white leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.25rem, 3vw, 1.6rem)' }}
                        >
                            {chef.dishName}
                        </h3>
                        <p
                            className="mt-1.5"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.55 }}
                        >
                            {chef.bio}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ChefCard