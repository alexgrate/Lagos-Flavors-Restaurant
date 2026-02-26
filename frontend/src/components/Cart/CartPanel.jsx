import { useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const fmt = (n) => `₦${n.toLocaleString()}`

const CartItem = ({ item, onInc, onDec, onRemove, index }) => (
    <motion.div
        className="flex items-center gap-3 py-4"
        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40, scale: 0.95 }}
        transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        layout
    >
        <img 
            src={item.img} 
            alt={item.name} 
            className='w-16 h-16 rounded-xl object-cover shrink-0'
            style={{ border: '1px solid rgba(0, 0, 0, 0.06)' }}
        />
        <div className='flex-1 min-w-0'>
            <p className="font-bold text-gray-900 truncate" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem' }}>
                {item.name}
            </p>
            <p className="font-bold mt-0.5" style={{ color: '#c0392b', fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem' }}>
                {fmt(item.price)}
            </p>
            <div className='flex items-center gap-2 mt-2'>
                <motion.button
                    onClick={() => onDec(item.id)}
                    className="w-7 h-7 rounded-full border flex items-center justify-center text-gray-600 font-bold"
                    style={{ border: '1.5px solid rgba(0,0,0,0.14)' }}
                    whileHover={{ scale: 1.12, background: '#f5f5f3' }}
                    whileTap={{ scale: 0.9 }}
                >
                    -
                </motion.button>
                <motion.span
                    key={item.qty}
                    initial={{ scale: 1.4, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-bold text-gray-900 w-5 text-center"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem' }}
                >
                    {item.qty}
                </motion.span>

                <motion.button
                    onClick={() => onInc(item.id)}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: '#1a4730' }}
                    whileHover={{ scale: 1.12, background: '#235e3f' }}
                    whileTap={{ scale: 0.9 }}
                >
                    +
                </motion.button>
            </div>
        </div>

        <motion.button
            onClick={() => onRemove(item.id)}
            className="shrink-0 p-2 rounded-full"
            whileHover={{ scale: 1.1, background: '#fff0f0' }}
            whileTap={{ scale: 0.9 }}
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth={2} strokeLinecap="round" className="w-4 h-4">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                <path d="M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
            </svg>
        </motion.button>
    </motion.div>
)

const CartPanel = ({ cartItems, onInc, onDec, onRemove, onCheckout }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            className="bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.07)' }}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="px-6 pt-6 pb-4" style={{ borderBottom: '1px solid rgba(0,0,0,0.07)' }}>
                <div className="flex items-center justify-between">
                    <h2 className="font-bold text-gray-900 text-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        Your Cart
                    </h2>
                    <AnimatePresence>
                        {cartItems.length > 0 && (
                            <motion.span
                                key="badge"
                                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                style={{ background: '#c0392b', fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {cartItems.reduce((s, i) => s + i.qty, 0)}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="px-6" style={{ maxHeight: '340px', overflowY: 'auto' }}>
                <AnimatePresence mode="popLayout">
                    {cartItems.length === 0 ? (
                        <motion.div
                            key="empty"
                            className="flex flex-col items-center justify-center py-12 text-center"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        >
                            <span className="text-4xl mb-3">🛒</span>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#aaa', fontSize: '0.875rem' }}>Your cart is empty</p>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#ccc', fontSize: '0.78rem', marginTop: '0.25rem' }}>Add some delicious dishes!</p>
                        </motion.div>
                    ) : (
                        cartItems.map((item, i) => (
                            <CartItem key={item.id} item={item} index={i} onInc={onInc} onDec={onDec} onRemove={onRemove} />
                        ))
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {cartItems.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 overflow-hidden"
                    >
                        <div className="pt-4 flex flex-col gap-2.5" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                            <div className="flex items-center justify-between">
                                <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#888', fontSize: '0.875rem' }}>Subtotal</span>
                                <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#333', fontSize: '0.875rem', fontWeight: 600 }}>{fmt(subtotal)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#888', fontSize: '0.875rem' }}>Delivery Fee</span>
                                <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#333', fontSize: '0.875rem', fontWeight: 600 }}>{fmt(DELIVERY_FEE)}</span>
                            </div>
                            <div className="flex items-center justify-between pt-3 mt-1" style={{ borderTop: '1.5px solid rgba(0,0,0,0.08)' }}>
                                <span className="font-bold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem' }}>Total</span>
                                <motion.span
                                    key={total}
                                    initial={{ scale: 1.2, color: '#c0392b' }}
                                    animate={{ scale: 1, color: '#111' }}
                                    className="font-bold"
                                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.15rem' }}
                                >
                                    {fmt(total)}
                                </motion.span>
                            </div>

                            <motion.button
                                onClick={onCheckout}
                                className="mt-3 w-full py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2"
                                style={{ background: '#1a4730', fontFamily: "'DM Sans', sans-serif" }}
                                whileHover={{ scale: 1.02, background: '#235e3f' }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Proceed to Delivery
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default CartPanel