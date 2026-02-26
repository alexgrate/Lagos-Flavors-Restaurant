import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { values } from '../../constants'
import ValueRow from './ValueRow'
import WhyChooseUsImg from "../../assets/6658e05b85b0c1.jpg"

const WhyChooseUs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    return (
        <section
            ref={ref}
            className='w-full'
            style={{ background: '#fff', padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem)' }}
        >
            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center" style={{ maxWidth: '1100px' }}>
                <motion.div
                    className='relative w-full overflow-hidden rounded-2xl'
                    style={{ aspectRatio: '4/3', boxShadow: '0 8px 48px rgba(0, 0, 0, 0.12)' }}
                    initial={{ opacity: 0, x: -60, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.img 
                        src={WhyChooseUsImg}
                        alt="Lagos Flavors kitchen team"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div 
                        className='absolute inset-0 rounded-2xl pointer-events-none'
                        style={{ boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.08)'}}
                    />
                </motion.div>

                <div className='flex flex-col gap-8 sm:gap-10'>
                    {values.map((value, i) => (
                        <ValueRow key={values.title} value={value} index={i} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default WhyChooseUs