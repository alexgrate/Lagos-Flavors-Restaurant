import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const CtaSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })


    return (
        <section
            ref={ref}
            className="w-full relative overflow-hidden flex items-center justify-center"
            style={{
                background: "linear-gradient(135deg, #e8490f 0%, #d44000 40%, #c0392b 100%)",
                padding: "clamp(4rem, 10vw, 8rem) clamp(1.25rem, 6vw, 4rem)",
                fontFamily: "'DM Sans', sans-serif",
                minHeight: "clamp(220px, 30vw, 340px)",
            }}
        >
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                    className="absolute rounded-full"
                    style={{
                        width: "clamp(300px, 50vw, 700px)",
                        height: "clamp(300px, 50vw, 700px)",
                        background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
                        top: "-30%", left: "-10%",
                    }}
                    animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    className="absolute rounded-full"
                    style={{
                        width: "clamp(200px, 35vw, 500px)",
                        height: "clamp(200px, 35vw, 500px)",
                        background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                        bottom: "-20%", right: "-5%",
                    }}
                    animate={{ scale: [1, 1.2, 1], x: [0, -15, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                <div
                    className="absolute inset-0 opacit-[0.06]"
                    style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
            </div>
            
            <div className="relative z-10 flex flex-col items-center gap-8 w-full" style={{ maxWidth: "900px" }}>
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "105%", opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 6vw, 4.2rem)",
                            color: "#ffffff",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Ready to Experience Lagos?
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.92 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.button
                        className="relative font-bold text-[#c0392b] bg-white rounded-full overflow-hidden"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                            padding: "clamp(0.9rem, 2.5vw, 1.1rem) clamp(2.5rem, 6vw, 4rem)",
                            boxShadow: "0 0 0 3px rgba(255,255,255,0.25), 0 12px 40px rgba(0,0,0,0.2)",
                            letterSpacing: "0.01em",
                        }}
                        whileHover={{ scale: 1.06, boxShadow: "0 0 0 4px rgba(255,255,255,0.4), 0 20px 50px rgba(0,0,0,0.25)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <motion.span 
                            className="absolute inset-0 rounded-full"
                            style={{ background: "rgba(192,57,43,0.06)", originX: 0.5, originY: 0.5 }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                        <span className="relative z-10">Start Your Order</span>
                    </motion.button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 }: {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(0.78rem, 1.8vw, 0.875rem)",
                        color: "rgba(255,255,255,0.55)",
                        letterSpacing: "0.05em",
                    }}
                >
                    Free delivery on your first order · 30-minute guarantee
                </motion.p>
            </div>
        </section>
    )
}

export default CtaSection