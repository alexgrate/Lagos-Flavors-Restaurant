import { useInView, motion } from 'framer-motion'
import React, { useRef } from 'react'

const DishCard = ({ dish, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { oncee: true, margin: "-60px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(0,0,0,0.09)" }}
            className="group bg-white rounded-2xl overflow-hidden"
            style={{
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
        >
            <div className='flex items-center gap-4 sm:gap-5 p-4 sm:p-5'>
                <motion.div>
                    <div
                        className='rounded-full overflow-hidden'
                        style={{
                            width: "clamp(80px, 14vw, 110px)",
                            height: "clamp(80px, 14vw, 110px)",
                            border: "3px solid #f5f0eb",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                        }}
                    >
                        <img 
                            src={dish.image} 
                            alt={dish.name}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                </motion.div>

                <div className='flex-1 min-w-0'>
                    <h3
                        className='font-bold text-gray-900 leading-tight'
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)",
                        }}
                    >
                        {dish.name}
                    </h3>

                    <p
                        className="mt-1 leading-snug"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(0.78rem, 1.8vw, 0.875rem)",
                            color: "#999",
                            lineHeight: 1.55,
                        }}
                    >
                        {dish.description}
                    </p>

                    <div className='mt-3 flex items-center justify-between gap-3'>
                        <motion.span
                            className="inline-block font-bold rounded-full px-4 py-1.5"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "clamp(0.82rem, 2vw, 0.92rem)",
                                background: "#fef3e8",
                                color: "#c97d10",
                                border: "1px solid rgba(201,125,16,0.18)",
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {dish.price}
                        </motion.span>

                        {dish.isSpicy && (
                            <motion.span
                                className="flex items-center gap-1 font-semibold text-sm shrink-0"
                                style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: "#c0392b",
                                }}
                                initial={{ opacity: 0, x: 10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.13 + 0.35, duration: 0.4 }}
                            >
                                🌶️ Spicy
                            </motion.span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default DishCard