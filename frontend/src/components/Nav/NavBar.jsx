import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../../constants'

const CART_COUNT = 3;

const NavBar = ({ menuOpen, setMenuOpen, activeIndex, setActiveIndex }) => {
    const [mounted, setMounted] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
        const currentPath = window.location.pathname
        const matchedIndex = navLinks.findIndex(({ href }) => {
            if (href === '/') return currentPath === '/'
            return currentPath.startsWith(href)
        })
        if (matchedIndex !== -1) setActiveIndex(matchedIndex)
    }, [])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            className='fixed top-0 left-0 right-0 z-50 transition-all duration-500'
            style={{
                background: scrolled ? "rgba(10, 8, 6, 0.82)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.25)" : "none",
            }}
            initial={{ opacity: 0, y: -28 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
            <div className='flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5'>

                <a href="/" className='flex items-center gap-2.5 shrink-0 z-50 no-underline'>
                    <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 flex shrink-0">
                        <line x1="6" y1="6" x2="30" y2="30" stroke="#e03d2f" strokeWidth="3.5" strokeLinecap="round"/>
                        <line x1="30" y1="6" x2="6" y2="30" stroke="#e03d2f" strokeWidth="3.5" strokeLinecap="round"/>
                    </svg>
                    <div>
                        <div className='font-display text-white text-lg sm:text-xl font-bold leading-none tracking-wide'>
                            Lagos Flavors
                        </div>
                        <div className='font-body text-white/50 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-light mt-0.5'>
                            Authentic Cuisine
                        </div>
                    </div>
                </a>

                <ul className='hidden md:flex items-center gap-7 lg:gap-8 font-body'>
                    {navLinks.map(({ label, href }, i) => {
                        const isActive = i === activeIndex;
                        return (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={() => setActiveIndex(i)}
                                    className='relative text-sm font-medium transition-colors duration-200 no-underline pb-0.5'
                                    style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.7)" }}
                                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#fff" }}
                                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.7)" }}
                                >
                                    {label}
                                    <motion.span
                                        className="absolute bottom-0 left-0 right-0 h-px rounded-full"
                                        style={{ background: "#fff" }}
                                        initial={false}
                                        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className='flex items-center gap-3 sm:gap-4 z-50'>

                    <button className='hidden md:block text-white/80 hover:text-white transition-colors'>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>

                    <a href="/cart" className="relative text-white/80 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" strokeLinecap="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"/>
                            <path strokeWidth="2" d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2, type: "spring", stiffness: 400, damping: 15 }}
                            className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center font-body font-bold text-white text-[9px] leading-none"
                            style={{ background: "#e03d2f" }}
                        >
                            {CART_COUNT}
                        </motion.span>
                    </a>

                    <motion.a
                        href="/cart"
                        className="hidden md:block font-body text-sm font-semibold text-white px-5 py-2.5 rounded-full no-underline"
                        style={{ background: "#1a8a3e" }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Order Now
                    </motion.a>

                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        className='md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 z-50'
                        aria-label='Toggle menu'
                    >
                        <motion.span
                            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-0.5 bg-white rounded-full origin-center"
                        />
                        <motion.span
                            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            className="block w-5 h-0.5 bg-white rounded-full"
                        />
                        <motion.span
                            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-0.5 bg-white rounded-full origin-center"
                        />
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}

export default NavBar