import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import ContactCard from './ContactCard'
import { contacts } from '../../constants'

const ContactCards = () => {
    const headingRef = useRef(null)
    const isHeadingInView = useInView(headingRef, { once: true, margin: '-60px' })


    return (
        <section 
            className="w-full"
            style={{ background: '#fafaf5', padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem)' }}
        >
            <div className="w-full mx-auto" style={{ maxWidth: '1100px' }}>
                <div
                    className="grid gap-4 sm:gap-5"
                    style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))' }}
                >
                    {contacts.map((item, i) => (
                        <ContactCard key={item.title} item={item} index={i} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ContactCards