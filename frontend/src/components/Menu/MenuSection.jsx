import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from "framer-motion"

import { dishes, categories } from '../../constants'
import DishCard from './DishCard'

const MenuSection = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const [search, setSearch] = useState('')
    const filterRef = useRef(null)
    const isFilterInView = useInView(filterRef)

    const filtered = dishes.filter(d => {
        const matchCat = activeCategory === 'All' || d.category === activeCategory
        const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.desc.toLowerCase().includes(search.toLowerCase())
        return matchCat && matchSearch
    })
    return (
        <section
            className='w-full'
            style={{ background: '#fafaf8', padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 5vw, 4rem)', fontFamily: "'DM Sans', sans-serif" }}
        >
            <div className='w-full mx-auto' style={{ maxWidth: '1200px' }}>
                <motion.div
                    ref = {filterRef}
                    className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10'
                    initial={{ opacity: 0, y: 24 }}
                    animate={isFilterInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className='flex items-center gap-2 flex-wrap'>
                        {categories.map((cat, i) => {
                            const isActive = cat == activeCategory
                            return (
                                <motion.button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className='font-body font-semibold rounded-full transition-colors duration-200'
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 'clamp(0.78rem, 1.7vw, 0.875rem)',
                                        padding: '0.45rem clamp(0.85rem, 2vw, 1.2rem)',
                                        color: isActive ? '#fff' : '#555',
                                        background: isActive ? '#1a4730' : 'transparent',
                                        border: `1.5px solid ${isActive ? '#1a4730' : 'rgba(0,0,0,0.14)'}`,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={isFilterInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: i * 0.055 }}
                                >
                                    {cat}
                                </motion.button>
                            )
                        })}
                    </div>

                    <motion.div
                        className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5"
                        style={{
                            border: '1.5px solid rgba(0,0,0,0.10)',
                            boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
                            minWidth: 'clamp(180px, 28vw, 280px)',
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isFilterInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <svg className="w-4 h-4 flex shrink-0" fill="none" stroke="#c0c0c0" strokeWidth={2} viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="bg-transparent w-full text-gray-700"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(0.78rem, 1.7vw, 0.875rem)' }}
                        />
                        <AnimatePresence>
                            {search && (
                                <motion.button
                                    onClick={() => setSearch('')}
                                    className='text-gray-400 hover:text-gray-600'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ type: 'spring', stiffness: 400 }}
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                        <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" /><line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
                                    </svg>
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

                <AnimatePresence mode="wait">
                    {filtered.length > 0? (
                        <motion.div
                            key={activeCategory + search}
                            className='grid gap-5 sm:gap-6'
                            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))' }}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filtered.map((dish, i) => (
                                <DishCard key={dish.id} dish={dish} index={i} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div key="empty" className="flex flex-col items-center justify-center py-20 text-center"
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        >
                            <span className="text-5xl mb-4">🍽️</span>
                            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#aaa' }}>
                                No dishes found for <strong style={{ color: '#666' }}>"{search}"</strong>
                            </p>
                            <button
                                onClick={() => { setSearch(''); setActiveCategory('All') }}
                                className="mt-4 text-sm font-semibold underline"
                                style={{ color: '#1a4730', fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default MenuSection