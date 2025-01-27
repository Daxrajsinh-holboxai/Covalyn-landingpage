'use client'

import { motion } from 'framer-motion'
import architecture from '../assets/arch.jpg'
import moleculeImage from '../assets/hits.jpg' // Add a new image for the second feature
import Modal from './modal'

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 space-y-20">
        {/* First Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Identifying High-Potential Molecules</h2>
            <p className="text-lg text-gray-600">
              By using high-throughput screening, virtual simulations, or fragment-based approaches, scientists identify small molecules (hits) that interact with the target. These hits act as the starting point for developing a potential drug.
            </p>
            <Modal />
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={architecture}
              alt="Features Illustration"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Second Feature */}
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
            className="rounded-xl overflow-hidden order-2 md:order-1"
          >
            <img
              src={moleculeImage}
              alt="Molecule Illustration"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold text-gray-900">Transforming Hits into Viable Leads</h2>
            <p className="text-lg text-gray-600">
            The best hits are refined into leads through chemical modifications and testing. This stage enhances potency, reduces toxicity, and improves the molecule’s stability and safety, transforming it into a drug candidate.
            </p>
            <Modal />
          </div>
        </motion.div>
      </div>
    </section>
  )
}