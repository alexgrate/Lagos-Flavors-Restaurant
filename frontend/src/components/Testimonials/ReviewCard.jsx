import { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

import Stars from './Stars';

const ReviewCard = ({ review, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 56, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, boxShadow: "0 28px 64px rgba(0,0,0,0.18)" }}
            className="group relative flex flex-col justify-between bg-white rounded-3xl overflow-hidden"
            style={{
                padding: "clamp(1.5rem, 4vw, 2rem)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                minHeight: "320px",
            }}
        >

            <motion.div
                className="absolute top-0 left-0 right-0 h-0.75 origin-left"
                style={{ background: "linear-gradient(90deg, #f59e0b, #e03d2f)" }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />

            <div
                className="absolute top-4 right-5 font-serif text-7xl leading-none pointer-events-none select-none"
                style={{ color: "rgba(245,158,11,0.08)", fontFamily: "'Playfair Display', serif" }}
            >
                "
            </div>

            <div className='flex flex-col gap-4'>
                
                <Stars count={review.stars} />

                <p
                    className="leading-relaxed"
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(0.875rem, 2vw, 1rem)",
                        color: "#222",
                        fontStyle: "italic",
                        lineHeight: 1.75,
                    }}
                >
                    {review.quote}
                </p>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <motion.div
                    className="flex shrink-0 rounded-full overflow-hidden"
                    style={{
                        width: "clamp(40px, 8vw, 52px)",
                        height: "clamp(40px, 8vw, 52px)",
                        border: "2px solid #f5f0eb",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    }}
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <img src={review.avatar} alt={review.name} className='w-full h-full object-cover' />
                </motion.div>
                <div>
                    <p
                        className="font-bold leading-tight"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(0.875rem, 2vw, 0.95rem)",
                            color: "#111",
                        }}
                    >
                        {review.name}
                    </p>
                    <p
                        style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(0.75rem, 1.6vw, 0.82rem)",
                        color: "#999",
                        marginTop: "2px",
                        }}
                    >
                        {review.location}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ReviewCard