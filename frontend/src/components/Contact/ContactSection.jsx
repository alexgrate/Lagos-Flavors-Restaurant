import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

import { socials } from '../../constants'

function InputField({ label, type = 'text', placeholder, name, value, onChange, textarea }) {
    const [focused, setFocused] = useState(false)

    const sharedStyle = {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 'clamp(0.82rem, 1.8vw, 0.9rem)',
        background: '#fafaf8',
        border: `1.5px solid ${focused ? '#1a4730' : 'rgba(0,0,0,0.12)'}`,
        borderRadius: '0.75rem',
        padding: '0.75rem 1rem',
        width: '100%',
        outline: 'none',
        color: '#1a1a1a',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: focused ? '0 0 0 3px rgba(26,71,48,0.08)' : 'none',
        resize: 'none',
    }

    return (
        <div className="flex flex-col gap-1.5">
        <label
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#555' }}
        >
            {label}
        </label>
        {textarea ? (
            <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={5}
            style={sharedStyle}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            />
        ) : (
            <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={sharedStyle}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            />
        )}
        </div>
    )
}

const ContactSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => { setLoading(false); setSent(true) }, 1600)
    }


    return (
        <section
            className="w-full"
            style={{ background: '#fff', padding: 'clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem)' }}
        >

            <div ref={ref} className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start" style={{ maxWidth: '1100px' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className='mb-7'>
                        <h2
                            className="font-bold text-gray-900 leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 900 }}
                        >
                            Send Us a Message
                        </h2>
                        <p
                            className="mt-2"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.82rem, 1.8vw, 0.9rem)', color: '#888', lineHeight: 1.65 }}
                        >
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <AnimatePresence mode='wait' >
                        {sent ? (
                            <motion.div
                                key="success"
                                className="flex flex-col items-center justify-center text-center rounded-2xl py-16 px-8"
                                style={{ background: '#f0faf4', border: '1.5px solid rgba(26,71,48,0.15)' }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <motion.div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                    style={{ background: '#1a4730' }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
                                >
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                </motion.div>
                                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 800, color: '#1a4730' }}>Message Sent!</h3>
                                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: '#555', marginTop: '0.5rem' }}>
                                    Thank you for reaching out. We'll be in touch shortly.
                                </p>
                                <button
                                    onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                                    className="mt-5 text-sm font-semibold underline"
                                    style={{ color: '#1a4730', fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div  className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField label="Full Name" name="name" placeholder="Emeka Okonkwo" value={form.name} onChange={handleChange} />
                                    <InputField label="Email Address" type="email" name="email" placeholder="emeka@email.com" value={form.email} onChange={handleChange} />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField label="Phone Number" type="tel" name="phone" placeholder="+234 801 234 5678" value={form.phone} onChange={handleChange} />
                                    <InputField label="Subject" name="subject" placeholder="Reservation enquiry…" value={form.subject} onChange={handleChange} />
                                </div>

                                <InputField label="Message" name="message" placeholder="Tell us how we can help…" value={form.message} onChange={handleChange} textarea />

                                <motion.button
                                    type="submit"
                                    className="w-full font-bold text-white rounded-xl flex items-center justify-center gap-2"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                        background: '#1a4730',
                                        padding: 'clamp(0.85rem, 2vw, 1rem)',
                                        letterSpacing: '0.02em',
                                    }}
                                    whileHover={{ scale: 1.02, background: '#235e3f' }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                                >
                                {loading ? (
                                    <motion.svg 
                                        className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                                        animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                    >
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
                                    </motion.svg>
                                ) : (
                                    <>
                                        Send Message
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                        </svg>
                                    </>
                                )}
                                </motion.button>

                                <div className="pt-3 border-t mt-1" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
                                    <p className="font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', color: '#1a1a1a' }}>
                                        Follow Us
                                    </p>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        {socials.map(({ label, href, icon }) => (
                                        <motion.a
                                            key={label}
                                            href={href}
                                            aria-label={label}
                                            className="flex items-center justify-center rounded-full text-gray-600"
                                            style={{
                                                width: 40, height: 40,
                                                background: '#f3f4f6',
                                                border: '1px solid rgba(0,0,0,0.08)',
                                            }}
                                            whileHover={{ rotate: 360, scale: 1.1, background: '#e8f0ec', color: '#1a4730' }}
                                            whileTap={{ scale: 0.92 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                        >
                                            {icon}
                                        </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div
                    className="w-full rounded-2xl overflow-hidden"
                    style={{
                        height: 'clamp(340px, 55vw, 600px)',
                        boxShadow: '0 8px 48px rgba(0,0,0,0.10)',
                        border: '1px solid rgba(0,0,0,0.06)',
                    }}
                    initial={{ opacity: 0, x: 50, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    <iframe
                        title="Lagos Flavors Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286165858956!2d3.4219!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x9217e7d07e9e0af6!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection