'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, X, FileText } from 'lucide-react';

export default function LeadGeneration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', company: '' });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="w-8 h-8 text-blue-300" />
                <span className="text-blue-300 font-medium">Free Resource</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                2026 Enterprise Hardware Selection Guide
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Comprehensive insights on choosing the right hardware infrastructure for your business. 
                Includes performance benchmarks, TCO analysis, and implementation roadmaps.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <span>50+ pages of expert analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <span>Industry-specific recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <span>2026 technology roadmap included</span>
                </li>
              </ul>
            </motion.div>

            {/* Right CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="bg-white rounded-lg p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Get Your Free Copy
                </h3>
                <p className="text-gray-600 mb-6">
                  Enter your details below and we&apos;ll send the guide to your inbox.
                </p>
                
                {/* Inline Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Get the Guide
                  </button>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Download Guide
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download Now
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
