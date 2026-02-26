import React, { useEffect, useRef, useState } from 'react'
import { motion, stagger, useAnimation, useInView } from 'framer-motion'

const stats = [
    { value: 500, suffix: "+", label: "Happy Customers" },
    { value: 100, suffix: "+", label: "Authentic Dishes" },
    { value: 15,  suffix: "",  label: "Min Avg Delivery" },
    { value: 4.9, suffix: "★", label: "Rating", isDecimal: true },
];

function CountUp({target, suffix, isDecimal, trigger}) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!trigger) return;
        const duration = 2000;
        const steps = 80;
        const intervalMs = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = isDecimal
            ? parseFloat((eased * target).toFixed(1))
            : Math.floor(eased * target);
        setCount(current);
        if (step >= steps) { setCount(target); clearInterval(timer); }
        }, intervalMs);

        return () => clearInterval(timer);
    }, [trigger, target, isDecimal]);

    return (
        <span>
            {isDecimal ? count.toFixed(1) : count}
            {suffix}
        </span>
    )
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.92 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
}

const StatSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-60px"})
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) controls.start("visible")
    }, [isInView, controls])

    return (
        <section
            ref={ref}
            className='w-full relative overflow-hidden'
            style={{ background: "#f7f2ed", fontFamily: "'DM Sans', sans-serif" }}
        >
            <motion.div
                className="absolute top-0 left-0 h-0.5 w-full origin-left"
                style={{ background: "linear-gradient(90deg, #e8490f, #f97316, #e8490f)" }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
                <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                    <motion.div
                        className="absolute rounded-full"
                        style={{
                            width: "clamp(200px, 40vw, 500px)",
                            height: "clamp(200px, 40vw, 500px)",
                            background: "radial-gradient(circle, rgba(232,73,15,0.05) 0%, transparent 70%)",
                            top: "-20%", left: "-10%",
                        }}
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                        className="absolute rounded-full"
                        style={{
                            width: "clamp(150px, 30vw, 400px)",
                            height: "clamp(150px, 30vw, 400px)",
                            background: "radial-gradient(circle, rgba(232,73,15,0.04) 0%, transparent 70%)",
                            bottom: "-20%", right: "-5%",
                        }}
                        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                </div>

                <motion.div
                    className='relative grid grid-cols-2 lg:grid-cols-4'
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {stats.map(({ value, suffix, label, isDecimal }, i) => (
                        <motion.div
                            key={label}
                            variants={itemVariants}
                            className='group relative flex flex-col items-center justify-center text-center cursor-default'
                            style={{
                                padding: "clamp(2rem, 5vw, 3.5rem) clamp(1rem, 3vw, 2rem)",
                            }}
                        >
                            <motion.div 
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "linear-gradient(135deg, rgba(232,73,15,0.04), rgba(249,115,22,0.03))" }}
                            />

                            {i < stats.length - 1 && (
                                <motion.span
                                    className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
                                    style={{ width: "1px", height: "45%", background: "rgba(0,0,0,0.1)" }}
                                    initial={{ scaleY: 0 }}
                                    animate={isInView ? { scaleY: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                />
                            )}

                            {i < 2 && (
                                <motion.span
                                    className="absolute bottom-0 left-[10%] lg:hidden"
                                    style={{ width: "80%", height: "1px", background: "rgba(0,0,0,0.08)" }}
                                    initial={{ scaleX: 0 }}
                                    animate={isInView ? { scaleX: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                />
                            )}

                            {i === 0 && (
                                <motion.span
                                    className="absolute right-0 top-[10%] lg:hidden"
                                    style={{ width: "1px", height: "80%", background: "rgba(0,0,0,0.08)" }}
                                    initial={{ scaleY: 0 }}
                                    animate={isInView ? { scaleY: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                />
                            )}
                            {i === 2 && (
                                <motion.span
                                    className="absolute right-0 top-[10%] lg:hidden"
                                    style={{ width: "1px", height: "80%", background: "rgba(0,0,0,0.08)" }}
                                    initial={{ scaleY: 0 }}
                                    animate={isInView ? { scaleY: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                />
                            )}


                            <motion.div
                                className="font-bold leading-none mb-2 relative"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(2rem, 6vw, 3.75rem)",
                                    color: "#e8490f",
                                }}
                                whileHover={{ scale: 1.08 }}
                                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                            >
                                <motion.span 
                                    className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                                    style={{ background: "#e8490f" }}
                                />
                                <CountUp target={value} suffix={suffix} isDecimal={isDecimal} trigger={isInView} />
                            </motion.div>

                            <motion.p
                                className="font-normal leading-snug"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "clamp(0.78rem, 2vw, 0.95rem)",
                                    color: "#999",
                                    letterSpacing: "0.01em",
                                }}
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                            >
                                {label}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full origin-right"
                style={{ background: "linear-gradient(90deg, #e8490f, #f97316, #e8490f)" }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />

        </section>
    )
}

export default StatSection