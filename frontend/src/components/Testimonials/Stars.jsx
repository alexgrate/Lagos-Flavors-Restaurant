import React from 'react'
import { motion } from 'framer-motion'


const Stars = ({ count }) => {
    return (
        <div className='flex items-center gap-1'>
            {Array.from({ length: count }).map((_, i) => (
                <motion.svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="#f59e0b"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    initial={{ opacity: 0, scale: 0, rotate: -30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 16 }}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
            ))}
        </div>
    )
}

export default Stars