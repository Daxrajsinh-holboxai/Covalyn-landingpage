'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Precision-Driven Target Selection',
    points: [
      'Most viable druggable pathways',
      'Higher clinical success rates',
      'Reduced costly missteps'
    ]
  },
  {
    icon: Shield,
    title: 'Rapid and Scalable Hit Identification',
    points: [
      'Faster identification of high-potential compounds',
      'Reduced screening costs and time',
      'Streamlined drug discovery process'
    ]
  },
  {
    icon: Lock,
    title: 'Maximized Efficacy and Safety',
    points: [
      'Superior drug efficacy',
      'Minimized toxicity risks',
      'Optimized therapeutic impact'
    ]
  },
  {
    icon: FileCheck,
    title: 'Actionable, Data-Driven Insights',
    points: [
      'Informed, evidence-backed decision making',
      'Uncovered hidden opportunities',
      'Accelerated market-ready solutions'
    ]
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Accelerate Drug Development with GenAI
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <ul className="text-gray-600 list-disc list-outside pl-5 text-left mx-auto w-fit">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
