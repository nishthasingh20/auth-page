'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthComponent() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="w-full bg-gradient-to-br from-purple-50 via-lavender-50 to-pink-50 flex items-center justify-center p-4 overflow-hidden relative"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Subtle Background Gradient */}

      {/* Main Container */}
      <div className="relative w-full max-w-5xl h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative w-full h-full flex">
          
          {/* Left Panel - Sign In/Sign Up Form */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-white flex items-center justify-center p-8 z-10"
            animate={{
              x: isSignUp ? 0 : '100%',
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <div className="w-full max-w-sm">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-700">WebsiteName</span>
              </div>

              <AnimatePresence mode="wait">
                {!isSignUp ? (
                  <motion.div
                    key="signin"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-purple-500 mb-3">
                      Sign in to OurWebsite
                    </h2>

                    {/* Social Login */}
                    <div className="flex gap-3 my-4">
                      <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                          <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                          <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                          <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                        </svg>
                      </button>
                      <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">or use your email account:</p>

                    {/* Form Inputs */}
                    <div className="space-y-2.5">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full max-w-xs px-4 py-2 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all pl-10 text-sm"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full max-w-xs px-4 py-2 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all pl-10 text-sm"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>

                    <button className="text-gray-400 text-xs hover:text-purple-400 transition-colors mt-2 cursor-pointer">
                      Forgot your password?
                    </button>

                    <button className="w-full max-w-xs mt-4 py-2 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-500 hover:shadow-lg transform hover:scale-105 transition-all text-sm cursor-pointer">
                      SIGN IN
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-bold text-purple-500 mb-3">
                      Create Account
                    </h2>

                    {/* Social Login */}
                    <div className="flex gap-3 my-4">
                      <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                          <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                          <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                          <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                        </svg>
                      </button>
                      <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all hover:scale-110 cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">or use your email for registration:</p>

                    {/* Form Inputs */}
                    <div className="space-y-2.5">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full max-w-xs px-4 py-2 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all pl-10 text-sm"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full max-w-xs px-4 py-2 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all pl-10 text-sm"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Create Password"
                          className="w-full max-w-xs px-4 py-2 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all pl-10 text-sm"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>

                    <button className="w-full max-w-xs mt-4 py-2 bg-purple-500 text-white rounded-full font-bold hover:bg-purple-500 hover:shadow-lg transform hover:scale-105 transition-all text-sm cursor-pointer">
                      SIGN UP
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Panel - Sliding Overlay */}
          <motion.div
            className="absolute top-0 w-1/2 h-full bg-purple-500 flex items-center justify-center p-8 z-20 overflow-hidden"
            animate={{
              x: isSignUp ? '100%' : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {/* Decorative Shapes on Overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-3xl"
                animate={{
                  rotate: [0, 45, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-2xl"
                animate={{
                  rotate: [45, 90, 45],
                  x: [-50, -60, -50],
                  y: [-50, -40, -50],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            <div className="relative text-center text-white">
              <AnimatePresence mode="wait">
                {isSignUp ? (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-3xl font-bold mb-3">Welcome Back!</h1>
                    <p className="text-white/90 mb-6 max-w-xs mx-auto text-sm">
                      Already a user? Sign In here!
                    </p>
                    <button
                      onClick={toggleMode}
                      className="px-10 py-2.5 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-400 transition-all transform hover:scale-105 text-sm cursor-pointer"
                    >
                      SIGN IN
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hello"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-3xl font-bold mb-3">Hello, Customer!</h1>
                    <p className="text-white/90 mb-6 max-w-xs mx-auto text-sm">
                      Start your journey with us!
                    </p>
                    <button
                      onClick={toggleMode}
                      className="px-10 py-2.5 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-400 transition-all transform hover:scale-105 text-sm cursor-pointer"
                    >
                      SIGN UP
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}