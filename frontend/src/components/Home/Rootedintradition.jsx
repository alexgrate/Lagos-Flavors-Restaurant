import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import IntraditionImg from "../../assets/d45bfef650689.jpg"

import FeatureItem from './FeatureItem'

import { features } from '../../constants'

const Rootedintradition = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            className="w-full relative overflow-hidden"
            style={{
                background: "#e03d2f",
                padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 4rem)",
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            <div
                className='absolute inset-0 pointer-events-none opacity-[0.07]'
                style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <motion.div 
                className='absolute top-0 right-0 rounded-full pointer-events-none'
                style={{
                    width: "clamp(200px, 35vw, 500px)",
                    height: "clamp(200px, 35vw, 500px)",
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "eaeInOut" }}
            />

            <div className='relative w-full mx-auto' style={{ maxWidth: "1200px" }}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -60, scale: 0.96 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                        style={{ borderRadius: "1.25rem", overflow: "hidden" }}
                    >
                        <motion.div
                            className="relative overflow-hidden"
                            style={{
                                borderRadius: "1.25rem",
                                boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
                                aspectRatio: "4/3",
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <img src={IntraditionImg} alt="Chef preparing authentic Nigerian dishes" className='w-full h-full object-cover' style={{ filter: "brightness(0.92)" }} />
                            <div 
                                className='absolute inset-0'
                                style={{
                                    boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.2)",
                                    borderRadius: "1.25rem",
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    <div className='flex flex-col gap-7'>
                        <div className='overflow-hidden'>
                            <motion.h2
                                initial={{ y: "100%", opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
                                    color: "#ffffff",
                                    fontWeight: 900,
                                    lineHeight: 1.1,
                                }}
                            >
                                Rooted in Tradition,{" "}
                                <span style={{ fontStyle: "italic" }}>Crafted</span>
                                <br />with Love
                            </motion.h2>
                        </div>

                        <motion.div 
                            className="rounded-full"
                            style={{
                                height: "2px",
                                background: "rgba(255,255,255,0.3)",
                                originX: 0,
                            }}
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        />

                        <div className='flex flex-col gap-6'>
                            {features.map((feature, i) => (
                                <FeatureItem 
                                    key={feature.title}
                                    feature={feature}
                                    index={i}
                                    sectionInView={isInView}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Rootedintradition