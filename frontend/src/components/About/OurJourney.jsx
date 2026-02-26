import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { milestones } from '../../constants'


function GrowingLine() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.15'] })
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <div
        ref={ref}
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px"
        style={{ zIndex: 1 }}
        >
        <div className="absolute inset-0" style={{ background: 'rgba(26,61,43,0.13)' }} />
        <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 origin-top"
            style={{ scaleY, background: '#1a3d2b' }}
        />
        </div>
    )
}

function Dot({ isInView }) {
    return (
        <motion.div 
            className='flex shrink-0 rounded-ful'
            style={{ width: 22, height: 22, background: '#e03d2f', boxShadow: '0 0 0 6px rgba(2224, 61, 47, 0.15)', zIndex: 10 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 18, delay: 0.2 }}
        />
    )
}

function Card({ item, isInView, isLeft }) {
    return (
        <motion.div
            className="w-full bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.07)', border: '1px solid rgba(0,0,0,0.05)' }}
            initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className={`px-6 sm:px-8 pt-7 pb-5 ${isLeft ? 'sm:text-right' : 'text-left'}`}>
                <motion.span
                    className="inline-block rounded-full px-4 py-1 text-sm font-bold mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif", background: '#fef0e6', color: '#c0392b' }}
                    initial={{ opacity: 0, y: -8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25, duration: 0.4 }}
                >
                    {item.year}
                </motion.span>
                <motion.h3
                    className="font-bold text-gray-900 leading-tight mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.32, duration: 0.5 }}
                >
                    {item.title}
                </motion.h3>
                <motion.p
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.8rem, 1.7vw, 0.9rem)', color: '#888', lineHeight: 1.65 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {item.desc}
                </motion.p>
            </div>
            <motion.div
                className="mx-4 mb-4 rounded-xl overflow-hidden"
                style={{ height: 'clamp(160px, 18vw, 230px)' }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.44, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.img 
                    src={item.img} alt={item.title}
                    className='w-full h-full object-cover'
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                />
            </motion.div>
        </motion.div>
    )
}

function Milestone({ item }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    const isLeft = item.side === 'left'

    return (
        <div ref={ref} style={{ marginBottom: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
            <div className='flex gap-4 md:hidden'>
                <div className='flex flex-col items-center shrink-0' style={{ paddingTop: '0.35rem' }}>
                    <motion.div
                        className="rounded-full flex shrink-0"
                        style={{ width: 16, height: 16, background: '#e03d2f', boxShadow: '0 0 0 4px rgba(224,61,47,0.15)' }}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ type: 'spring', stiffness: 350, delay: 0.15 }}
                    />
                    <div className='flex-1 w-px mt-2' style={{ background: 'rgba(26,61, 43, 0.15)', minHeight: 32 }} />
                </div>

                <div className='flex-1 min-w-0'>
                    <Card item={item} isInView={isInView} isLeft={false} />
                </div>
            </div>

            <div className='hidden md:flex items-center' style={{ gap: 0}}>
                <div style={{ width: '50%', paddingRight: 'clamp(2rem, 4vw, 4rem)', display: 'flex', justifyContent: 'flex-end' }}>
                    {isLeft
                        ? <Card item={item} isInView={isInView} isLeft={true} />
                        : <div />
                    }
                </div>
                <Dot isInView={isInView} />
                <div style={{ width: '50%', paddingLeft: 'clamp(2rem, 4vw, 4rem)', display: 'flex', justifyContent: 'flex-start' }}>
                    {!isLeft
                        ? <Card item={item} isInView={isInView} isLeft={false} />
                        : <div />
                    }
                </div>
            </div>
        </div>
    )
}



const OurJourney = () => {
    const headingRef = useRef(null)
    const isHeadingInView = useInView(headingRef, { once: true, margin: '-60px' })

    return (
        <section
            className='w-full overflow-hidden'
            style={{ background: '#fff', padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 3rem)' }}
        >
            <div ref={headingRef} className='text-center mb-10 sm:mb-16'>
                <div className='overflow-hidden'>
                    <motion.h2
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900, color: '#1a3d2b', lineHeight: 1.1 }}
                        initial={{ y: '105%', opacity: 0 }}
                        animate={isHeadingInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Our Journey
                    </motion.h2>
                </div>
                <motion.div 
                    className="mx-auto mt-3 rounded-full"
                    style={{ width: '3rem', height: '3px', background: '#e03d2f', originX: 0.5 }}
                    initial={{ scaleX: 0 }}
                    animate={isHeadingInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.55, delay: 0.3 }}
                />
            </div>

            <div className='relative w-full mx-auto' style={{ maxWidth: '1100px' }}>
                <div className='hidden md:block'>
                    <GrowingLine />
                </div>

                <div className='md:hidden absolute top-0 bottom-0 w-px' style={{ left: 8, background: 'rgba(26, 61, 43, 0.13)' }} />
                {milestones.map((item) => (
                    <Milestone key={item.year} item={item} />
                ))}
            </div>
        </section>
    )
}

export default OurJourney