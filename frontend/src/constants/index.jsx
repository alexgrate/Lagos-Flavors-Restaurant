import { Flower, BookCheck, Heart, Vegan, Users, Locate, PhoneCall, Mail, Timer } from "lucide-react"

import Slide01 from "../assets/81a008_bacc25.avif"
import Slide02 from "../assets/34581757.avif"
import Slide03 from "../assets/3462436546.avif"

import todaySpecial01 from "../assets/2eb28cd3.jpg"
import todaySpecial02 from "../assets/cafc0de530.jpg"
import todaySpecial03 from "../assets/e74a2b980.jpg"

import testimonialspf01 from "../assets/ae0703452e.jpg"
import testimonialspf02 from "../assets/ae0703452e.jpg"
import testimonialspf03 from "../assets/ae0703452e.jpg"

import dishes01 from "../assets/2eb28cd3.jpg"
import dishes02 from "../assets/cafc0de530.jpg"
import dishes03 from "../assets/e74a2b980.jpg"
import dishes04 from "../assets/12425245.webp"
import dishes05 from "../assets/345453534532.webp"
import dishes06 from "../assets/3455452.jpg"
import dishes07 from "../assets/29fabessay.webp"
import dishes08 from "../assets/45372472.webp"
import dishes09 from "../assets/2435645432.webp"
import dishes010 from "../assets/24454654321.webp"
import dishes011 from "../assets/97676756435.webp"
import dishes012 from "../assets/ea821aac95.webp"

import journeyImg01 from "../assets/5284ca1d67c5.jpg"
import journeyImg02 from "../assets/8fc7ce63c0.jpg"
import journeyImg03 from "../assets/82ca05abb6.jpg"
import journeyImg04 from "../assets/12bb77b8b.jpg"

import chefSImg01 from "../assets/bf1ea8dbd68a.jpg"
import chefSImg02 from "../assets/5121115d90.jpg"
import chefSImg03 from "../assets/34da0b1.jpg"

import chefPImg02 from "../assets/1345236563.webp"
import chefPImg03 from "../assets/34355665123.jpg"




export const HeroSlides = [
    {
        url: Slide01,
        label: "Suya — Spiced Grilled Skewers",
    },

    {
        url: Slide02,
        label: "Jollof Rice — The Classic",
    },

    {
        url: Slide03,
        label: "Street Food — Lagos Style"
    },
]

export const navLinks = [
    { label: "Home",         href: "/"             },
    { label: "Menu",         href: "/menu"         },
    { label: "About",        href: "/about"        },
    { label: "Contact",      href: "/contact"      },
    { label: "Reservations", href: "/reservations" },
];

export const menuVariants = {
    closed: { clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)", opacity: 0 },
    open: {
        clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)",
        opacity: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

export const menuExitVariants = {
    clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.55, 0, 0.1, 1] },
};

export const linkVariants = {
    closed: { opacity: 0, x: 40 },
    open: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.15 + i * 0.07, duration: 0.45, ease: "easeOut" },
    }),
};

export const specials = [
    {
        name: "Jollof Rice Special",
        description: "Our signature smoky jollof rice with tender chicken, plantains, and coleslaw",
        price: "₦3,500",
        isSpicy: true,
        image: todaySpecial01,
    },
    {
        name: "Suya Platter",
        description: "Spicy grilled beef skewers with yaji spice, onions, tomatoes, and fresh peppers",
        price: "₦4,200",
        isSpicy: true,
        image: todaySpecial02,
    },
    {
        name: "Egusi Soup with Pounded Yam",
        description: "Rich melon seed soup with assorted meat, fish, and smooth pounded yam",
        price: "₦4,500",
        isSpicy: false,
        image: todaySpecial03,
    },
];


export const reviews = [
    {
        stars: 5,
        quote:
        '"The jollof rice here tastes exactly like my grandmother used to make! Authentic flavors and the delivery is always on time. This is now my go-to spot for Nigerian food."',
        name: "Chioma Adeleke",
        location: "Victoria Island, Lagos",
        avatar: testimonialspf01
    },
    {
        stars: 5,
        quote:
        '"Best suya in Lagos, hands down! The spice blend is perfect and the meat is always tender. I order from here at least twice a week. Highly recommend!"',
        name: "Emeka Okonkwo",
        location: "Lekki, Lagos",
        avatar: testimonialspf02
    },
    {
        stars: 5,
        quote:
        '"I love how they package the food — everything arrives hot and fresh. The egusi soup reminds me of home. Customer service is excellent too!"',
        name: "Fatima Ibrahim",
        location: "Ikeja, Lagos",
        avatar: testimonialspf03
    },
];

export const features = [
    {
        icon: <Flower />,
        title: "Locally Sourced",
        desc: "Fresh ingredients from Nigerian farms",
    },
    {
        icon: <BookCheck />,
        title: "Family Recipes",
        desc: "Authentic dishes passed through generations",
    },
    {
        icon: <Heart />,
        title: "Community Driven",
        desc: "Supporting local communities and culture",
    },
];


export const contactInfo = [
    {
        icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        ),
        text: "123 Victoria Island, Lagos, Nigeria",
    },
    {
        icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex shrink-0">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        ),
        text: "+234 800 123 4567",
    },
    {
        icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex shrink-0">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        ),
        text: "hello@lagosflavors.com",
    },
];


export const socials = [
    {
        label: 'Facebook',
        href: '#',
        icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
        ),
    },
    {
        label: 'Instagram',
        href: '#',
        icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
        ),
    },
    {
        label: 'X',
        href: '#',
        icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        ),
    },
    {
        label: 'WhatsApp',
        href: '#',
        icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        ),
    },
]

export const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export const colVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const categories = ['All', 'Rice Dishes', 'Soups', 'Grills', 'Sides', 'Drinks']

export const dishes = [
    {
        id: 1, name: 'Jollof Rice Special', category: 'Rice Dishes', price: 3500, isSpicy: true, isPopular: true, bw: true,
        desc: 'Our signature smoky jollof rice with tender chicken, plantains, and coleslaw',
        img: dishes01,
    },
    {
        id: 2, name: 'Suya Platter', category: 'Grills', price: 4200, isSpicy: true, isPopular: true, bw: true,
        desc: 'Spicy grilled beef skewers with yaji spice, onions, tomatoes, and fresh peppers',
        img: dishes02,
    },
    {
        id: 3, name: 'Egusi Soup with Pounded Yam', category: 'Soups', price: 4500, isSpicy: false, isPopular: true, bw: true,
        desc: 'Rich melon seed soup with assorted meat, fish, and smooth pounded yam',
        img: dishes03,
    },
    {
        id: 4, name: 'Pepper Soup', category: 'Soups', price: 3800, isSpicy: true, isPopular: false, bw: true,
        desc: 'Spicy aromatic broth with goat meat, herbs, and traditional spices',
        img: dishes04,
    },
    {
        id: 5, name: 'Fried Rice', category: 'Rice Dishes', price: 3200, isSpicy: false, isPopular: false, bw: true,
        desc: 'Colorful fried rice with vegetables, shrimp, and chicken',
        img: dishes05,
    },
    {
        id: 6, name: 'Moi Moi', category: 'Sides', price: 1500, isSpicy: false, isPopular: false, bw: true,
        desc: 'Steamed bean pudding with eggs, fish, and peppers',
        img: dishes06,
    },
    {
        id: 7, name: 'Asun', category: 'Grills', price: 5000, isSpicy: true, isPopular: true, bw: true,
        desc: 'Spicy grilled goat meat with peppers and onions',
        img: dishes07,
    },
    {
        id: 8, name: 'Chapman', category: 'Drinks', price: 1200, isSpicy: false, isPopular: false, bw: true,
        desc: 'Refreshing Nigerian cocktail with mixed fruits and fizzy drinks',
        img: dishes010,
    },
    {
        id: 9, name: 'Efo Riro', category: 'Soups', price: 4200, isSpicy: false, isPopular: false, bw: true,
        desc: 'Spinach stew with assorted meat, stockfish, and locust beans',
        img: dishes08,
    },
    {
        id: 10, name: 'Puff Puff', category: 'Sides', price: 1000, isSpicy: false, isPopular: false, bw: true,
        desc: 'Sweet fried dough balls, perfect as a snack or dessert',
        img: dishes09,
    },
    {
        id: 11, name: 'Zobo Drink', category: 'Drinks', price: 800, isSpicy: false, isPopular: true, bw: true,
        desc: 'Hibiscus tea infused with ginger, pineapple, and spices',
        img: dishes011,
    },
    {
        id: 12, name: 'Ofada Rice with Ayamase', category: 'Drinks', price: 4000, isSpicy: true, isPopular: false, bw: true,
        desc: 'Local unpolished rice with spicy green pepper sauce and assorted meat',
        img: dishes012,
    },
    
]

export const milestones = [
    {
        year: '2010',
        title: 'The Beginning',
        desc: 'Started as a small family kitchen in Lagos, serving authentic Nigerian dishes to our neighbors.',
        img: journeyImg01,
        side: 'left',
    },
    {
        year: '2015',
        title: 'First Restaurant',
        desc: 'Opened our first restaurant in Victoria Island, bringing traditional flavors to the heart of Lagos.',
        img: journeyImg02,
        side: 'right',
    },
    {
        year: '2020',
        title: 'Going Digital',
        desc: 'Launched online ordering and delivery service, making our food accessible across Lagos.',
        img: journeyImg03,
        side: 'left',
    },
    {
        year: '2024',
        title: 'A Lagos Institution',
        desc: "Now serving 500+ customers daily, recognized as Lagos' premier Nigerian cuisine destination.",
        img: journeyImg04,
        side: 'right',
    },
]

export const chefs = [
    {
        name: 'Chef Adebayo Ogunlesi',
        role: 'Head Chef',
        bio: '15 years crafting bold Nigerian flavours with a modern touch.',
        chefImg: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
        dishImg: chefSImg01,
        dishLabel: 'Specialty Dish',
        dishName: 'Signature Jollof Rice',
    },
    {
        name: 'Chef Ngozi Eze',
        role: 'Soup Specialist',
        bio: 'Master of traditional soups and stews passed through generations.',
        chefImg: chefPImg02,
        dishImg: chefSImg02,
        dishLabel: 'Specialty Dish',
        dishName: 'Traditional Egusi Soup',
    },
    {
        name: 'Chef Emeka Nwosu',
        role: 'Grill Master',
        bio: 'Bringing smoky perfection to every dish off the grill.',
        chefImg: chefPImg03,
        dishImg: chefSImg03,
        dishLabel: 'Specialty Dish',
        dishName: 'Authentic Suya',
    },
]

export const values = [
    {
        title: 'Passion for Authenticity',
        desc: 'Every dish is prepared using traditional methods and recipes passed down through generations, ensuring authentic Nigerian flavors in every bite.',
        icon: <Heart />,
    },
    {
        title: 'Fresh & Local',
        desc: 'We source our ingredients from local Nigerian farms and markets, supporting our community while delivering the freshest flavors.',
        icon: <Vegan />,
    },
    {
        title: 'Family Values',
        desc: 'We treat every customer like family, creating a warm and welcoming atmosphere that makes you feel at home.',
        icon: <Users />,
    },
]

export const contacts = [
    {
        title: 'Visit Us',
        detail: '123 Victoria Island, Lagos, Nigeria',
        href: 'https://maps.google.com',
        iconColor: '#1a4730',
        icon: <Locate />,
    },
    {
        title: 'Call Us',
        detail: '+234 801 234 5678',
        href: 'tel:+2348012345678',
        iconColor: '#e03d2f',
        icon: <PhoneCall />,
    },
    {
        title: 'Email Us',
        detail: 'hello@lagosflavors.com',
        href: 'mailto:hello@lagosflavors.com',
        iconColor: '#e03d2f',
        icon: <Mail />,
    },
    {
        title: 'Opening Hours',
        detail: 'Mon–Sun: 11:00 AM – 10:00 PM',
        href: null,
        iconColor: '#1a1a1a',
        icon: <Timer />,
    },
]