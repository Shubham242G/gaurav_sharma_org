'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const books = [
  {
    id: 1,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    summary: "The definitive book on value investing. Written by Warren Buffett's mentor, it teaches timeless principles for successful stock market investing.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&fit=crop&monochrome=1" // Replace with real book covers
  },
  {
    id: 2,
    title: "Principles",
    author: "Ray Dalio",
    summary: "Life and work principles from the founder of Bridgewater Associates, one of the world's largest hedge funds. A blueprint for success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&monochrome=1"
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    summary: "Tiny changes, remarkable results. The practical guide to building good habits and breaking bad ones that has helped millions.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&fit=crop&monochrome=1"
  },
  {
    id: 4,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    summary: "Nobel Prize winner's groundbreaking work on decision-making and behavioral economics. Explores System 1 and System 2 thinking.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&fit=crop&monochrome=1"
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    summary: "A brief history of humankind. From the Stone Age to Silicon Age, explores how Homo Sapiens came to dominate the world.",
    image: "https://images.unsplash.com/photo-1469362047596-9e4e69a8b4ea?w=400&fit=crop&monochrome=1"
  },
  {
    id: 6,
    title: "Poor Charlie's Almanack",
    author: "Charlie Munger",
    summary: "Warren Buffett's partner shares multidisciplinary mental models for better thinking and decision-making. Wisdom distilled.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&fit=crop&monochrome=1"
  }
];

export default function RecommendedBooks() {
  const [selectedBook, setSelectedBook] = useState(books[0]);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/20 to-black/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Gaurav Sharma's
          </h2>
          <h3 className="text-4xl md:text-5xl font-light text-gray-300 tracking-tight">
            Recommended Reads
          </h3>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Carefully curated books that shaped Gaurav's thinking and success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBook.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {selectedBook.title}
                </h3>
                <p className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                  {selectedBook.author}
                </p>
                <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
                  {selectedBook.summary}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Book Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
              {books.map((book, index) => (
                <motion.div
                  key={book.id}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -20,
                    zIndex: 10 
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl border-4 border-transparent hover:border-white/30 transition-all duration-500"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Grayscale Image */}
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.span
                      className="text-white/90 text-sm font-medium px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      View Details
                    </motion.span>
                  </div>

                  {/* Active book indicator */}
                  {selectedBook.id === book.id && (
                    <motion.div
                      className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                      layoutId="activeBookIndicator"
                      initial={false}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <div className="w-3 h-3 bg-[#c48e53] rounded-full shadow-md" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Slider Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              {books.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedBook(books[index])}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedBook.id === books[index].id 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
