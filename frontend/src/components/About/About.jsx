import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Menubg from "../../assets/888c31_d324668.avif"
import OurJourney from './OurJourney'
import MeetOurChefs from './MeetOurChefs'
import WhyChooseUs from './WhyChooseUs'

const About = () => {
    const ref = useRef(null)
    const { scrollY } = useScroll()

    const imageY = useTransform(scrollY, [0, 500], [0, 100])
    const titleY = useTransform(scrollY, [0, 400], [0, 50])
    const overlayOpacity = useTransform(scrollY, [0, 300], [0.48, 0.68])

    return (
        <>
            <div 
                ref={ref}
                className='relative w-full overflow-hidden'
                style={{ height: "clamp(360px, 38vw, 500px)" }}
            >
                <motion.div
                    className='absolute w-full'
                    style={{ y: imageY, height: "145%", top: "-22%" }}
                >
                    <img src={Menubg} alt="Nigerian spices" className='w-full h-full object-cover' />
                </motion.div>

                <motion.div 
                    className='absolute inset-0'
                    style={{ background: "#000", opacity: overlayOpacity }}
                />

                <div 
                    className='absolute inset-0'
                    style={{
                        background: "linear-gradient(110deg, rgba(140, 45, 0, 0.35) 0%, rgba(60, 15, 0, 0.25) 100%)", mixBlendMode: "multiply",
                    }}
                />

                <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='overflow-hidden'>
                        <motion.h1
                            className='font-display text-white text-center'
                            style={{
                                fontSize: "clamp(2.4rem, 8vw, 6rem)",
                                fontWeight: 900,
                                lineHeight: 1,
                                letterSpacing: "-0.01em",
                                textShadow: "0 2px 40px rgba(0,0,0,0.45)",
                                y: titleY,
                            }}
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Our Story
                        </motion.h1>
                    </div>
                </div>


            </div>

            <OurJourney />
            <MeetOurChefs />
            <WhyChooseUs />
        </>
    )
}

export default About