import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { menuVariants, menuExitVariants, navLinks, linkVariants } from '../../constants'

const MobileNavBar = ({ menuOpen, setMenuOpen, activeIndex, setActiveIndex }) => {
    useEffect(() => {

        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.touchAction = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [menuOpen]);

    return (
        <AnimatePresence>
            {menuOpen && (
                <motion.div
                    className='fixed inset-0 z-40 md:hidden flex flex-col'
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit={menuExitVariants}
                    style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a08 50%, #0a0a0a 100%)" }}
                >
                    <div className='absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none'
                        style={{ background: "radial-gradient(circle, rgba(224,61,47,0.18) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
                    />
                    <div className='absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none'
                        style={{ background: "radial-gradient(circle, rgba(26,138,62,0.12) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
                    />

                    <div className="absolute inset-0 pointer-events-none opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "repeat", backgroundSize: "128px",
                        }}
                    />

                    <div className='relative flex flex-col justify-between h-full px-7 pt-24 pb-10'>

                        <nav>
                            <ul className='space-y-0'>
                                {navLinks.map(({ label, href }, i) => {
                                    const isActive = i === activeIndex;
                                    return (
                                        <motion.li
                                            key={label}
                                            custom={i}
                                            variants={linkVariants}
                                            initial="closed"
                                            animate="open"
                                        >
                                            <a
                                                href={href}
                                                onClick={() => {
                                                    setActiveIndex(i);
                                                    setMenuOpen(false);
                                                }}
                                                className='group w-full flex items-center gap-4 py-3.5 border-b border-white/[0.07] no-underline'
                                            >
                                                <span
                                                    className='font-body text-[10px] font-semibold tracking-widest uppercase flex shrink-0 transition-colors duration-200'
                                                    style={{ color: isActive ? "#e03d2f" : "rgba(255,255,255,0.25)" }}
                                                >
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>

                                                <span
                                                    className="font-display transition-all duration-200 group-hover:translate-x-1.5"
                                                    style={{
                                                        fontSize: "clamp(1.9rem, 9vw, 2.8rem)",
                                                        color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                                                        lineHeight: 1.1,
                                                    }}
                                                >
                                                    {label}
                                                </span>

                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.span
                                                            className='ml-auto w-2 h-2 rounded-full flex shrink-0'
                                                            style={{ background: "#e03d2f" }}
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            exit={{ scale: 0 }}
                                                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.4 }}
                            className='space-y-4'
                        >
                            <div className="flex items-center gap-3 border border-white/15 rounded-2xl px-4 py-3 backdrop-blur-sm bg-white/5 focus-within:border-white/30 transition-colors duration-200">
                                <svg className="w-4 h-4 flex shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "rgba(255,255,255,0.35)" }}>
                                    <circle cx="11" cy="11" r="7" strokeWidth="2"/>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <input type="text" placeholder='Search dishes, drinks...' className='bg-transparent outline-none border-none w-full font-body text-sm text-white/80 placeholder-white/30' />
                            </div>

                            <a href="/cart" className="flex items-center justify-between px-4 py-3 rounded-2xl no-underline" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <div className='flex items-center gap-3'>
                                    <div className='relative'>
                                        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeWidth="2" strokeLinecap="round" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                                            <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2"/>
                                            <path strokeWidth="2" d="M16 10a4 4 0 01-8 0"/>
                                        </svg>
                                        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center font-body font-bold text-white text-[9px]" style={{ background: "#e03d2f" }}>3</span>
                                    </div>
                                    <span className='font-body text-white/50 text-sm'>3 items in cart</span>
                                </div>
                                <span className='font-body text-white/70 text-sm font-semibold'>View →</span>
                            </a>

                            <motion.a
                                href="/cart"
                                className="w-full font-body font-semibold text-white py-4 rounded-2xl text-base tracking-wide flex items-center justify-center no-underline"
                                style={{ background: "linear-gradient(135deg, #e03d2f, #c0392b)" }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Order Now — Fast Delivery
                            </motion.a>

                            <p className="font-body text-white/20 text-xs text-center tracking-widest uppercase">
                                From Lagos, with love 🇳🇬
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileNavBar