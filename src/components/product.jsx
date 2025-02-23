'use client'

import { motion } from 'framer-motion'
import tabluar from '../assets/tabular.jpg'
import Modal from './modal'

export default function Product() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={tabluar}
              alt="Dashboard Preview"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Precision in Target Identification and Validation</h2>
            <p className="text-lg text-gray-600">
            Target selection is the foundational step in drug discovery. Researchers identify and validate proteins, genes, or pathways involved in a disease. This ensures that the drug will address the root cause of the condition.
            </p>
            <Modal />
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}