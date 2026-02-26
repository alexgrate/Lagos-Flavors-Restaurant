import { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

import ReviewCard from './ReviewCard';
import { reviews } from '../../constants';

const Testimonials = () => {
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true, margin: "-60px" });

    return (
        <section
            className="w-full relative overflow-hidden"
            style={{
                background: "#1a1a1a",
                padding: "clamp(3.5rem, 9vw, 7rem) clamp(1.25rem, 6vw, 5rem)",
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                <motion.div 
                    className="absolute rounded-full"
                    style={{
                        width: "clamp(300px, 50vw, 700px)",
                        height: "clamp(300px, 50vw, 700px)",
                        background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
                        top: "-20%",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                    animate={{ scale: [1, 1.12, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: "clamp(200px, 30vw, 400px)",
                        height: "clamp(200px, 30vw, 400px)",
                        background: "radial-gradient(circle, rgba(224,61,47,0.05) 0%, transparent 70%)",
                        bottom: "-10%",
                        right: "5%",
                    }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
            </div>

            <div className='relative w-full mx-auto' style={{ maxWidth: "1200px" }}>

                <div ref={headingRef} className='text-center mb-10 sm:mb-14'>
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%", opacity: 0 }}
                            animate={isHeadingInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2rem, 6vw, 3.75rem)",
                                color: "#ffffff",
                                fontWeight: 900,
                                lineHeight: 1.1,
                            }}
                        >
                            What Lagos is Saying
                        </motion.h2>
                    </div>

                    <motion.div
                        className="mx-auto mt-4 rounded-full"
                        style={{
                            height: "3px",
                            width: "clamp(2.5rem, 6vw, 4rem)",
                            background: "linear-gradient(90deg, #f59e0b, #e03d2f)",
                            originX: 0.5,
                        }}
                        initial={{ scaleX: 0 }}
                        animate={isHeadingInView ? { scaleX: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                </div>

                <div className='grid gap-5 sm:gap-6' style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr)"}}>
                    {reviews.map((review, i) => (
                        <ReviewCard key={review.name} review={review} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials