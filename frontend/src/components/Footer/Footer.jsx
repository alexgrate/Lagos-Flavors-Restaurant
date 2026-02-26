import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { colVariants, containerVariants, navLinks, contactInfo, socials } from "../../constants";

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (email.trim()) { setSubmitted(true); }
    };

    return (
        <footer
            ref={ref}
            className="w-full relative overflow-hidden"
            style={{
                background: "#b84012",
                fontFamily: "'DM Sans', sans-serif",
            }}
        >

        <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            }}
        />

        <motion.div
            className="relative"
            style={{ padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 5vw, 4rem)" }}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div
                className="w-full mx-auto grid gap-10 sm:gap-12"
                style={{
                    maxWidth: "1200px",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                }}
            >

            <motion.div variants={colVariants} className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">

                    <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 flexs hrink-0">
                        <line x1="6" y1="6" x2="30" y2="30" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
                        <line x1="30" y1="6" x2="6" y2="30" stroke="#fff" strokeWidth="3.5" strokeLinecap="round"/>
                    </svg>
                    <div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", lineHeight: 1 }}>
                        Lagos Flavors
                        </div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "3px" }}>
                        Authentic Cuisine
                        </div>
                    </div>
                </div>

                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)", lineHeight: 1.7, fontStyle: "italic", maxWidth: "26ch" }}>
                    Bringing the authentic taste of Nigeria to your doorstep, one delicious meal at a time.
                </p>

                <div className="flex items-center gap-2.5 flex-wrap">
                    {socials.map(({ label, icon }) => (
                        <motion.a
                            key={label}
                            href="#"
                            aria-label={label}
                            className="flex items-center justify-center rounded-full text-white"
                            style={{
                                width: "clamp(34px, 5vw, 40px)",
                                height: "clamp(34px, 5vw, 40px)",
                                background: "rgba(255,255,255,0.15)",
                                border: "1px solid rgba(255,255,255,0.2)",
                            }}
                            whileHover={{ scale: 1.12, background: "rgba(255,255,255,0.25)" }}
                            whileTap={{ scale: 0.93 }}
                            transition={{ type: "spring", stiffness: 350, damping: 20 }}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={colVariants}>
                <h4
                    className="font-bold tracking-widest uppercase mb-5"
                    style={{ color: "#fff", fontSize: "clamp(0.72rem, 1.6vw, 0.8rem)", letterSpacing: "0.15em" }}
                >
                    Quick Links
                </h4>
                <ul className="flex flex-col gap-3">
                    {navLinks.map(({ label, href }, i) => (
                        <motion.li key={label}
                            initial={{ opacity: 0, x: -12 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                        >
                            <motion.a
                                href={href}
                                className="group flex items-center gap-2"
                                style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(0.875rem, 1.9vw, 0.95rem)", textDecoration: "none" }}
                                whileHover={{ x: 5, color: "#fff" }}
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            >
                                <motion.span
                                    className="w-0 group-hover:w-3 h-px rounded-full transition-all duration-300"
                                    style={{ background: "#fff" }}
                                />
                                {label}
                            </motion.a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div variants={colVariants}>
                <h4
                    className="font-bold tracking-widest uppercase mb-5"
                    style={{ color: "#fff", fontSize: "clamp(0.72rem, 1.6vw, 0.8rem)", letterSpacing: "0.15em" }}
                >
                    Contact Us
                </h4>
                <ul className="flex flex-col gap-4">
                    {contactInfo.map(({ icon, text }) => (
                        <li key={text} className="flex items-start gap-3">
                        <span style={{ color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{icon}</span>
                        <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.82rem, 1.8vw, 0.9rem)", lineHeight: 1.5 }}>{text}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            <motion.div variants={colVariants}>
                <h4
                    className="font-bold tracking-widest uppercase mb-2"
                    style={{ color: "#fff", fontSize: "clamp(0.72rem, 1.6vw, 0.8rem)", letterSpacing: "0.15em" }}
                >
                    Stay Updated
                </h4>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.8rem, 1.7vw, 0.875rem)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Subscribe to get special offers and updates
                </p>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 rounded-2xl px-4 py-3"
                        style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" className="w-5 h-5 flex shrink-0">
                        <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span style={{ color: "#fff", fontSize: "0.875rem" }}>You're subscribed!</span>
                    </motion.div>
                ) : (
                    <div className="flex rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)" }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            placeholder="Your email"
                            className="flex-1 bg-transparent outline-none px-4 py-3 text-sm"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: "#fff",
                                fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)",
                            }}
                        />
                        <motion.button
                            onClick={handleSubmit}
                            className="flex items-center justify-center px-4 shrink-0"
                            style={{ background: "#1a4730" }}
                            whileHover={{ background: "#1f5c3a" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>
                        </motion.button>
                    </div>
                )}
            </motion.div>

            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
                borderTop: "1px solid rgba(255,255,255,0.12)",
                padding: "clamp(1rem, 3vw, 1.5rem) clamp(1.25rem, 5vw, 4rem)",
            }}
        >
            <div
                className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
                style={{ maxWidth: "1200px" }}
            >
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.75rem, 1.6vw, 0.82rem)" }}>
                © 2024 Lagos Flavors. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                <motion.a
                    key={item}
                    href="#"
                    style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.75rem, 1.6vw, 0.82rem)", textDecoration: "none" }}
                    whileHover={{ color: "rgba(255,255,255,0.9)" }}
                >
                    {item}
                </motion.a>
                ))}
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "clamp(0.72rem, 1.5vw, 0.78rem)" }}>
                Designed by Alex
            </p>
            </div>
        </motion.div>
        </footer>
    );
}