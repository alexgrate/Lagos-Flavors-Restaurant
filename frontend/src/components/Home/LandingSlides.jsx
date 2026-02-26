import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

import { HeroSlides } from '../../constants'

const LandingSlides = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HeroSlides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])


    return (
        <div className='relative w-full bg-black' style={{ minHeight: "100svh"}}>

            <div>
                <AnimatePresence>
                    <motion.div
                        key={currentSlide}
                        className='absolute inset-0 w-full h-full'
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                    >
                        <img 
                            src={HeroSlides[currentSlide].url} 
                            alt={HeroSlides[currentSlide].label} 
                            className='w-full h-full object-cover' 
                            style={{ minHeight: "100svh" }}
                        />

                        <div className='absolute inset-0 bg-linear-to-r from-black/85 via-to-black/20' />
                        <div className='absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/45 ' />
                    </motion.div>
                </AnimatePresence>

                <div 
                    className='absolute inset-0 pointer-events-none z-10 opacity-[0.18]'
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "128px",
                    }}
                />
            </div>
            
            <div className='relative z-20 flex flex-col justify-center' style={{ minHeight: "100svh", padding: "6rem 1.25rem 5rem" }}>
                <div className='w-full' style={{ maxWidth: "min(48rem, 90vw)", marginLeft: "clamp(1.25rem, 5vw, 5rem)" }}>
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={mounted ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    >
                        <span className='inline-block font-body text-white/90 text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase border border-white/30 rounded-full px-4 py-1.5 mb-5 sm:mb-6 backdrop-blur-sm bg-white/5'>
                            Authentic Lagos Flavors
                        </span>
                    </motion.div>

                    <motion.h1
                        className="font-display text-white leading-[1.05] mb-4 sm:mb-5"
                        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", textShadow: "0 2px 40px rgba(0,0,0,0.6)" }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={mounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
                    >
                        Taste the Soul<br className="sm:hidden" /> of Nigeria
                    </motion.h1>

                    <motion.p
                        className="font-body text-white/80 font-light mb-8 sm:mb-10 leading-relaxed"
                        style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)", maxWidth: "28rem" }}
                        initial={{ opacity: 0, y: 25 }}
                        animate={mounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
                    >
                        From Jollof to Suya, delivered to your door in 30 minutes
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap items-center gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={mounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
                    >
                        <motion.button
                            className="font-body font-semibold text-white rounded-full text-sm tracking-wide"
                            style={{
                                background: "#e03d2f",
                                padding: "clamp(0.7rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2rem)",
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Explore Menu
                        </motion.button>

                        <motion.button
                            className="font-body font-medium text-white rounded-full text-sm border border-white/40 backdrop-blur-sm flex items-center gap-2.5 bg-white/5"
                            style={{
                                padding: "clamp(0.7rem, 2vw, 0.875rem) clamp(1rem, 3vw, 1.5rem)",
                            }}
                            whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.75)" }}
                            whileTap={{ scale: 0.97 }}
                        >
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black ml-0.5" viewBox="0 0 10 10" fill="currentColor">
                            <polygon points="2,1 9,5 2,9"/>
                            </svg>
                        </span>
                        Watch Our Story
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-3"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ delay: 1.3 }}
            >
                {HeroSlides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        aria-label={`Slide ${i + 1}`}
                    >
                        <motion.div
                        className="rounded-full"
                        animate={{
                            width: i === currentSlide ? "2rem" : "0.5rem",
                            background: i === currentSlide ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.35)",
                        }}
                        style={{ height: "0.5rem" }}
                        transition={{ duration: 0.4 }}
                        />
                    </button>
                ))}
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                key={currentSlide}
                className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-30 font-body text-white/45 text-[10px] tracking-widest uppercase hidden md:block"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.5 }}
                >
                {HeroSlides[currentSlide].label}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default LandingSlides