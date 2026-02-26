import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { dishes } from '../../constants'
import DishCard from '../Menu/DishCard'
import CartPanel from './CartPanel'

const CartPage = ({ cartItems = [], onAdd, onInc, onDec, onRemove, onCheckout }) => {
    const headerRef = useRef(null)
    const isHeaderInView = useInView(headerRef, { once: true })

    return (
        <div style={{ background: '#fafaf8', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif" }}>
            <div
                className='mx-auto w-full'
                style={{ maxWidth: '1200px', padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 4rem)' }}
            >
                <motion.div
                    ref={headerRef}
                    className='mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className='font-bold text-gray-900' style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1.5rem, 4vw, 2.1rem)' }}>Add Items to Your Order</h1>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#9a9a9a', fontSize: '0.9rem', marginTop: '0.4rem' }}>Browse our menu and add your favorites</p>
                </motion.div>

                <div className='flex gap-8 items-start' style={{ flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 520px', minWidth: 0 }}>
                        <div className='grid gap-5' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))' }}>
                            {dishes.map((dish, i) => (
                                <DishCard key={dish.id} dish={dish} index={i} onAdd={onAdd} />
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: '0 0 clamp(280px, 30vw, 360px)', position: 'sticky', top: '100px' }}>
                        <CartPanel 
                            cartItems={cartItems}
                            onInc={onInc}
                            onDec={onDec}
                            onRemove={onRemove}
                            onCheckout={onCheckout}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartPage