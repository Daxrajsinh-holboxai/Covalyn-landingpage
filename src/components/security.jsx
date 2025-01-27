'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'AI-Enhanced Target Selection',
    description: 'Identify the most promising biological targets with AI’s ability to analyze complex datasets and predict therapeutic relevance. Our technology helps prioritize targets that have the highest likelihood of success in pre-clinical trials.'
  },
  {
    icon: Shield,
    title: 'Streamlined Hit Identification',
    description: 'Reduce the time and cost of hit identification by leveraging AI to screen vast chemical libraries. Our platform predicts high-affinity compounds and eliminates non-viable candidates early in the process.'
  },
  {
    icon: Lock,
    title: 'Lead Optimization with AI',
    description: 'Optimize lead compounds for efficacy, safety, and manufacturability using AI-driven predictive models. Our tools ensure that only the best candidates move forward in the pipeline.'
  },
  {
    icon: FileCheck,
    title: 'Accelerating Pre-Clinical Insights',
    description: 'AI provides actionable insights by integrating data from diverse sources, including literature, clinical trials, and experimental results. This accelerates decision-making and reduces trial-and-error cycles.'
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
