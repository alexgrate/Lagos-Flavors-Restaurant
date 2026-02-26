import { useRef } from "react";
import { motion, useInView } from "framer-motion";


const FeatureItem = ({ feature, index, sectionInView }) => {
    return (
        <motion.div
            className="flex items-start gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div
                className="flex shrink-0 items-center justify-center rounded-full"
                style={{
                    width: "clamp(40px, 6vw, 52px)",
                    height: "clamp(40px, 6vw, 52px)",
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(4px)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.25)",
                }}
                whileHover={{ rotate: 360, scale: 1.12, background: "rgba(255, 255, 255, 0.28)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {feature.icon}
            </motion.div>

            <div className="pt-1">
                <h3
                    className="font-bold text-white leading-tight"
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                    }}
                >
                    {feature.title}
                </h3>
                <p
                    className="mt-0.5"
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(0.8rem, 1.8vw, 0.92rem)",
                        color: "rgba(255,255,255,0.78)",
                        lineHeight: 1.55,
                    }}
                >
                    {feature.desc}
                </p>
            </div>
        </motion.div>
    )
}

export default FeatureItem