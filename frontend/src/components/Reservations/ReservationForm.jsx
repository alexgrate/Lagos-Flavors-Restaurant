import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

function getUpcomingDays(count = 21) {
    const days = []
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    for (let i = 0; i < count; i++) {
        const d = new Date(today)
        d.setDate(today.getDate() + i)
        days.push({
            key: d.toISOString().split('T')[0],
            dayName: dayNames[d.getDay()],
            date: d.getDate(),
            isToday: i === 0,
        })
    }
    return days
}

const DAYS = getUpcomingDays(21)

const TIMES = [
    '11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM',
    '2:00 PM','2:30 PM','5:00 PM','5:30 PM','6:00 PM','6:30 PM',
    '7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM',
]

function SectionHeading({ children, isInView, delay = 0 }) {
    return (
        <motion.h2
            className="font-bold mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)', color: '#1a1a1a' }}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.h2>
    )
}

function Field({ label, type = 'text', placeholder, name, value, onChange, textarea, maxLength, rows = 5 }) {
    const [focused, setFocused] = useState(false)
    const count = value?.length || 0
    const base = {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 'clamp(0.82rem, 1.8vw, 0.9rem)',
        border: `1.5px solid ${focused ? '#2d5a27' : 'rgba(0,0,0,0.12)'}`,
        borderRadius: '0.65rem',
        padding: '0.75rem 1rem',
        width: '100%',
        outline: 'none',
        color: '#1a1a1a',
        background: '#fff',
        boxShadow: focused ? '0 0 0 3px rgba(45,90,39,0.08)' : 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        resize: 'none',
    }
    return (
        <div className="flex flex-col gap-1.5">
        <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#333' }}>
            {label}
        </label>
        {textarea ? (
            <>
            <textarea
                name={name} value={value} onChange={onChange}
                placeholder={placeholder} rows={rows} maxLength={maxLength}
                style={base}
                onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            />
            {maxLength && (
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: '#bbb', textAlign: 'right' }}>
                {count}/{maxLength}
                </span>
            )}
            </>
        ) : (
            <input
            type={type} name={name} value={value} onChange={onChange}
            placeholder={placeholder} style={base}
            onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
            />
        )}
        </div>
    )
}

const ReservationForm = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    const [party, setParty]     = useState(2)
    const [selDate, setSelDate] = useState(null)
    const [selTime, setSelTime] = useState(null)
    const [form, setForm]       = useState({ name: '', email: '', phone: '', notes: '' })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading]     = useState(false)

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => { setLoading(false); setSubmitted(true) }, 1800)
    }

    const weeks = []
    for (let i = 0; i < DAYS.length; i += 7) weeks.push(DAYS.slice(i, i + 7))

    const btnBase = {
        fontFamily: "'DM Sans', sans-serif",
        border: '1.5px solid rgba(0,0,0,0.09)',
        borderRadius: '0.65rem',
        cursor: 'pointer',
        transition: 'all 0.18s',
    }
    return (
        <section
            style={{ background: '#f5f0eb', padding: 'clamp(2.5rem, 7vw, 5rem) clamp(1rem, 5vw, 3rem)', minHeight: '100vh' }}
        > 
            <div className="w-full mx-auto" style={{ maxWidth: '900px' }}>
                <AnimatePresence mode='wait'>
                    {submitted ? (
                        <motion.div
                            key="success"
                            className="bg-white rounded-3xl flex flex-col items-center justify-center text-center"
                            style={{ padding: 'clamp(3rem, 8vw, 6rem) 2rem', boxShadow: '0 8px 48px rgba(0,0,0,0.08)' }}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                        >
                            <motion.div
                                className="flex items-center justify-center rounded-full mb-6"
                                style={{ width: 72, height: 72, background: '#2d5a27' }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
                            >
                                <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                            </motion.div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 900, color: '#1a1a1a' }}>
                                Reservation Confirmed!
                            </h2>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#888', marginTop: '0.75rem', maxWidth: 400, lineHeight: 1.65, fontSize: '0.9rem' }}>
                                We've received your booking for <strong style={{ color: '#2d5a27' }}>{party} {party === 1 ? 'guest' : 'guests'}</strong> on <strong style={{ color: '#2d5a27' }}>{selDate}</strong> at <strong style={{ color: '#2d5a27' }}>{selTime}</strong>. See you soon!
                            </p>
                            <motion.button
                                onClick={() => { setSubmitted(false); setSelDate(null); setSelTime(null); setForm({ name:'', email:'', phone:'', notes:'' }) }}
                                className="mt-7 text-sm font-semibold underline"
                                style={{ color: '#2d5a27', fontFamily: "'DM Sans', sans-serif" }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Make another reservation
                            </motion.button>
                        </motion.div>
                    ): (
                        <motion.div
                            key="form"
                            ref={ref}
                            className="bg-white rounded-3xl"
                            style={{ padding: 'clamp(1.8rem, 5vw, 3rem)', boxShadow: '0 8px 48px rgba(0,0,0,0.08)' }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <SectionHeading isInView={isInView} delay={0.05}>Party Size</SectionHeading>
                                    <motion.div
                                        className="flex flex-wrap gap-3"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.12, duration: 0.5 }}
                                    >
                                        {[1,2,3,4,5,6,7,8].map((n, i) => (
                                            <motion.button
                                                key={n}
                                                type="button"
                                                onClick={() => setParty(n)}
                                                className="flex items-center justify-center rounded-full font-bold"
                                                style={{
                                                    ...btnBase,
                                                    width: 'clamp(48px, 8vw, 64px)',
                                                    height: 'clamp(48px, 8vw, 64px)',
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                                                    background: party === n ? '#2d5a27' : '#f0efed',
                                                    color: party === n ? '#fff' : '#333',
                                                    border: party === n ? '1.5px solid #2d5a27' : '1.5px solid transparent',
                                                    boxShadow: party === n ? '0 4px 16px rgba(45,90,39,0.25)' : 'none',
                                                }}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                transition={{ delay: 0.1 + i * 0.04, type: 'spring', stiffness: 300, damping: 18 }}
                                                whileHover={{ scale: 1.08 }}
                                                whileTap={{ scale: 0.94 }}
                                            >
                                                {n}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                </div>

                                <div className='mb-10'>
                                    <SectionHeading isInView={isInView} delay={0.1}>Select Date</SectionHeading>

                                    <motion.div
                                        className="flex flex-col gap-2"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.18, duration: 0.5 }}
                                    >
                                        {weeks.map((week, wi) => (
                                            <div key={wi} className="grid grid-cols-7 gap-2">
                                                {week.map(({ key, dayName, date, isToday }, di) => {
                                                    const isSelected = selDate === key
                                                    return (
                                                        <motion.button
                                                            key={key}
                                                            type="button"
                                                            onClick={() => setSelDate(key)}
                                                            className="flex flex-col items-center justify-center rounded-xl py-2 sm:py-3"
                                                            style={{
                                                                ...btnBase,
                                                                background: isSelected ? '#2d5a27' : isToday ? '#edf3ec' : '#f7f6f4',
                                                                color: isSelected ? '#fff' : '#1a1a1a',
                                                                border: isSelected ? '1.5px solid #2d5a27' : isToday ? '1.5px solid rgba(45,90,39,0.25)' : '1.5px solid rgba(0,0,0,0.06)',
                                                                boxShadow: isSelected ? '0 4px 16px rgba(45,90,39,0.2)' : 'none',
                                                            }}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                                                            transition={{ delay: 0.18 + wi * 0.06 + di * 0.02 }}
                                                            whileHover={{ scale: 1.05, y: -2 }}
                                                            whileTap={{ scale: 0.96 }}
                                                        >
                                                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.58rem, 1.4vw, 0.72rem)', fontWeight: 500, opacity: isSelected ? 0.8 : 0.55, marginBottom: 2 }}>
                                                                {dayName}
                                                            </span>
                                                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)', fontWeight: 700 }}>
                                                                {date}
                                                            </span>
                                                        </motion.button>
                                                    )
                                                })}
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                <div className="mb-10">
                                    <SectionHeading isInView={isInView} delay={0.2}>Select Time</SectionHeading>
                                    <motion.div
                                        className="grid gap-2"
                                        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 130px), 1fr))' }}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.26, duration: 0.5 }}
                                    >
                                        {TIMES.map((t, i) => {
                                            const isSelected = selTime === t
                                            return (
                                                <motion.button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => setSelTime(t)}
                                                    className="text-center py-2.5 rounded-xl font-medium"
                                                    style={{
                                                        ...btnBase,
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: 'clamp(0.78rem, 1.8vw, 0.875rem)',
                                                        background: isSelected ? '#2d5a27' : '#f7f6f4',
                                                        color: isSelected ? '#fff' : '#333',
                                                        border: isSelected ? '1.5px solid #2d5a27' : '1.5px solid rgba(0,0,0,0.06)',
                                                        boxShadow: isSelected ? '0 4px 14px rgba(45,90,39,0.2)' : 'none',
                                                    }}
                                                    initial={{ opacity: 0, scale: 0.93 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                    transition={{ delay: 0.24 + i * 0.025 }}
                                                    whileHover={{ scale: 1.04, y: -2 }}
                                                    whileTap={{ scale: 0.96 }}
                                                >
                                                    {t}
                                                </motion.button>
                                            )
                                        })}
                                    </motion.div>
                                </div>

                                <div className="mb-8">
                                <SectionHeading isInView={isInView} delay={0.3}>Your Information</SectionHeading>
                                    <motion.div
                                        className="flex flex-col gap-4"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.35, duration: 0.5 }}
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <Field label="Full Name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
                                            <Field label="Email Address" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} />                                            </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <Field label="Phone Number" type="tel" name="phone" placeholder="+234 800 123 4567" value={form.phone} onChange={handleChange} />
                                        </div>
                                        <Field
                                            label="Special Requests (Optional)"
                                            name="notes"
                                            placeholder="Any dietary restrictions or special occasions?"
                                            value={form.notes}
                                            onChange={handleChange}
                                            textarea
                                            maxLength={500}
                                            rows={5}
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="flex justify-center"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.45, duration: 0.5 }}
                                >
                                    <motion.button
                                        type="submit"
                                        className="flex items-center gap-2.5 font-bold text-white rounded-full"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                                            background: '#2d5a27',
                                            padding: 'clamp(0.85rem, 2vw, 1rem) clamp(2rem, 5vw, 3.5rem)',
                                            boxShadow: '0 4px 24px rgba(45,90,39,0.3)',
                                            letterSpacing: '0.01em',
                                        }}
                                        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(45,90,39,0.35)' }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                                    >
                                        {loading ? (
                                        <motion.svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
                                            animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}>
                                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round"/>
                                        </motion.svg>
                                        ) : 'Confirm Reservation'}
                                    </motion.button>
                                </motion.div>
                            </form>
                        </motion.div>

                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default ReservationForm