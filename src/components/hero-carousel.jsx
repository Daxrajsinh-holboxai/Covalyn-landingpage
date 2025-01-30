'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.jpeg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const slides = [
  {
    title: "Optimizes Clinical Data Management for Cost-Effective Trials and Research Analysis.",
    metricLabel: "Cut In clinical trial data processing",
    image: p1
  },
  {
    title: "Streamlines and Accelerates Processes in Drug Research and Development.",
    description: "AI-powered document analysis for legal teams",
    metricLabel: "Boost In drug discovery speed",
    image: p2
  },
  {
    title: "Drives Cost-Efficiency in Drug Development Through AI-Driven Innovation.",
    description: "Streamline pharmaceutical research and development",
    metricLabel: "Reduction In drug development costs",
    image: p3
  },
  {
    title: "Simplifies Compliance Documentation to Enhance Regulatory Efficiency and Accuracy.",
    description: "Automated contract review and risk assessment",
    metricLabel: "Speeds up In compliance documentation ",
    image: p4
  },
  {
    title: "Enhances Pharmacovigilance by Automating Adverse Event Detection and Reporting.",
    description: "Saves 40% in adverse event reporting time",
    metricLabel: "Saving in adverse event reporting time",
    image: p5
  },
  {
    title: "Boosts Research and Development Efficiency Through Advanced AI Integration.",
    description: "Improves R&D efficiency by 45%",
    metricLabel: "Improvement In R&D efficiency",
    image: p6
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prev => !prev); // Toggle the modal state
    setIsPlaying(prev => !prev); // Toggle carousel play state independently
    setIsLoading(false); // Reset loading state
  }, []);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection)
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length)
  }, [])

  const toggleIsPlaying = () => {
    setIsPlaying((prev) => !prev)
  }

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [isPlaying, paginate])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="relative w-full overflow-hidden bg-black to-white">

      <div className="absolute inset-0 bg-black opacity-5" />
      <div className="relative container mx-auto px-4 pt-20 pb-20">

        <div className="mx-auto text-center mb-16 pt-24 md:pt-32">
        <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
>
   GenAI
  <br />
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
  Transforming Pre-Clinical Trials
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Achieve faster, safer, and cost-effective drug discovery with AI-driven precision.
          </motion.p>
        </div>

        <div className="relative max-w-[5xl] mx-auto h-[500px] lg:h-[400px]">
  <AnimatePresence initial={false} custom={direction}>
    <motion.div
      key={currentSlide}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
      className="absolute inset-0 grid lg:grid-cols-2 gap-8"
    >
      {/* Carousel Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2 h-[250px] lg:h-full">
        <motion.img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Carousel Text */}
      <div className="space-y-6 flex flex-col justify-center order-2 lg:order-1 h-full">
        <div className="pt-2">
          <div className="text-6xl md:text-7xl font-bold text-white">
            {slides[currentSlide].metric}
          </div>
          <div className="text-xs md:text-sm font-semibold text-gray-300 mt-2">
            {slides[currentSlide].metricLabel.toUpperCase()}
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          {slides[currentSlide].title}
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-md hover:shadow-lg max-w-[200px]"
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Navigation Arrows at Left and Right Corners */}
  <button
    className="absolute top-1/2 -translate-y-1/2 left-[-50px] w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={() => paginate(-1)}
  >
    <ChevronLeft className="w-5 h-5" />
  </button>
  <button
    className="absolute top-1/2 -translate-y-1/2 right-[-50px] w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    onClick={() => paginate(1)}
  >
    <ChevronRight className="w-5 h-5" />
  </button>

  {/* Slidebar Indicators */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => {
          setDirection(index > currentSlide ? 1 : -1);
          setCurrentSlide(index);
        }}
        className={`w-2.5 h-2.5 rounded-full focus:outline-none ${
          index === currentSlide ? "bg-blue-500" : "bg-gray-300 hover:bg-gray-400"
        }`}
      />
    ))}
  </div>
</div>

      </div>
    </div>
  );
}
