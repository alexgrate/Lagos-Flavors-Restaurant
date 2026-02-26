import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import DishCard from './DishCard'
import { specials } from '../../constants'

const TodaySpecials = () => {
    const headingRef = useRef(null)
    const isHeadingInView = useInView(headingRef, { once: true, margin: "-60px" })

    return (
        <section
            className='w-full'
            style={{
                background: "#fafaf8",
                fontFamily: "'DM Sans', sans-serif",
                padding: "clamp(3rem, 8vw, 6rem) clamp(1.25rem, 6vw, 5rem)",
            }}
        >

            <div className='w-full mx-auto' style={{ maxWidth: "1200px" }}>
                <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-16 items-start'>

                    <div ref={headingRef} className='lg:sticky lg:top-24'>
                        
                        <div className='overflow-hidden'>
                            <motion.h2
                                initial={{ y: "105%", opacity: 0 }}
                                animate={isHeadingInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                                color: "#1a3d2b",
                                lineHeight: 1.08,
                                fontWeight: 900,
                                }}
                            >
                                Today's <br className='hidden sm:block'/> Specials
                            </motion.h2>
                        </div>

                        <motion.div
                            className='mt-3 mb-6 rounded-full'
                            style={{ height: "3px", background: "#e03d2f", width: "3rem", originX: 0 }}
                            initial={{ scaleX: 0 }}
                            animate={isHeadingInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1]}}
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.42, ease: "easeOut" }}
                            style={{
                                color: "#666",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                lineHeight: 1.75,
                                maxWidth: "36ch",
                        }}
                        >
                            Discover our chef's handpicked selection of authentic Nigerian dishes, prepared fresh daily with the finest local ingredients and traditional recipes passed down through generations.
                        </motion.p>

                        <motion.a
                            href="#"
                            initial={{ opacity: 0, x: -12 }}
                            animate={isHeadingInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.56 }}
                            className="inline-flex items-center gap-2 mt-6 font-semibold"
                            style={{
                                color: "#1a4730",
                                fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
                                textDecoration: "none",
                            }}
                            whileHover={{ x: 5 }}
                        >
                            View All Specials
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </motion.svg>
                        </motion.a>
                    </div>

                    <div className='flex flex-col gap-4 sm:gap-5'>
                        {specials.map((dish, i) => (
                            <DishCard key={dish.name} dish={dish} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodaySpecials