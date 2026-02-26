import { useRef } from "react"
import { motion, useInView } from "framer-motion"


const ValueRow = ({ value, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })


    return (
        <motion.div
            ref={ref}
            className="flex items-start gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                className="shrink-0 flex items-center justify-center rounded-full"
                style={{
                    width: 'clamp(44px, 6vw, 54px)',
                    height: 'clamp(44px, 6vw, 54px)',
                    background: '#fef0e6',
                    color: '#e03d2f',
                }}
                whileHover={{ rotate: 360, scale: 1.1, background: '#fde0cc' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                {value.icon}
            </motion.div>

            <div className="flex-1 min-w-0">
                <motion.h3
                    className="font-bold text-gray-900 leading-tight mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1rem, 2.2vw, 1.15rem)' }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.14 + 0.1, duration: 0.5 }}
                >
                    {value.title}
                </motion.h3>
                <motion.p
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.82rem, 1.7vw, 0.9rem)', color: '#888', lineHeight: 1.7 }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.14 + 0.18, duration: 0.5 }}
                >
                    {value.desc}
                </motion.p>
            </div>
        </motion.div>
    )
}

export default ValueRow