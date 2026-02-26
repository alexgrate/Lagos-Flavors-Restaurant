import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import ChefCard from './ChefCard'
import { chefs } from '../../constants'

const MeetOurChefs = () => {
    const headingRef = useRef(null)
    const isHeadingInView = useInView(headingRef, { once: true, margin: '-60px' })

    return (
        <section
            className="w-full"
            style={{ background: '#f5f0eb', padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem)' }}
        >
            <div ref={headingRef} className='text-center mb-10 sm:mb-14'>
                <div className='overflow-hidden'>
                    <motion.h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(2rem, 6vw, 3.8rem)',
                            fontWeight: 900,
                            color: '#1a1a1a',
                            lineHeight: 1.1,
                        }}
                        initial={{ y: '105%', opacity: 0 }}
                        animate={isHeadingInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Meet Our Chefs
                    </motion.h2>
                </div>

                <motion.div 
                    className="mx-auto mt-3 rounded-full"
                    style={{ height: '3px', width: '3.5rem', background: '#1a4730', originX: 0.5 }}
                    initial={{ scaleX: 0 }}
                    animate={isHeadingInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.55, delay: 0.3 }}
                />

                <motion.p
                    className="mt-4"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)', color: '#aaa' }}
                    initial={{ opacity: 0 }}
                    animate={isHeadingInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    Hover over a chef to see their signature dish
                </motion.p>
            </div>

            <div
                className="w-full mx-auto grid gap-6 sm:gap-7"
                style={{
                    maxWidth: '1100px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                }}
            >
                {chefs.map((chef, i) => (
                    <ChefCard key={chef.name} chef={chef} index={i} />
                ))}
            </div>
        </section>
    )
}

export default MeetOurChefs