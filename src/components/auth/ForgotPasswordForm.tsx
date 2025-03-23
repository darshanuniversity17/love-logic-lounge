
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Heart } from 'lucide-react';

const ForgotPasswordForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setEmailSent(true);
    }, 1500);
  };
  
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };
  
  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, delay: 0.2 }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(234, 56, 76, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };
  
  return (
    <motion.div 
      className="w-full max-w-md mx-auto p-6 sm:p-8"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="space-y-2 text-center">
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {emailSent ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.2 
              }}
            >
              <Heart className="h-16 w-16 text-primary fill-primary" />
            </motion.div>
          ) : (
            <Mail className="h-16 w-16 text-primary" />
          )}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold tracking-tight font-cursive"
        >
          {emailSent ? "Check Your Email" : "Forgot Password"}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          {emailSent 
            ? "We've sent you a password reset link. Please check your email." 
            : "Enter your email and we'll send you a reset link"}
        </motion.p>
      </div>
      
      {!emailSent ? (
        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                disabled={loading}
                className="flex h-12 w-full rounded-md border border-input bg-background px-4 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            </div>
          </motion.div>
          
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            type="submit"
            disabled={loading}
            className="relative inline-flex h-12 w-full items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                <span>Sending link...</span>
              </div>
            ) : (
              "Send Reset Link"
            )}
          </motion.button>
        </form>
      ) : (
        <div className="mt-8 space-y-4">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate('/auth/login')}
            className="relative inline-flex h-12 w-full items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Return to Login
          </motion.button>
        </div>
      )}
      
      <motion.div 
        className="mt-6 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/auth/login"
          className="font-medium love-link"
        >
          <span className="inline-flex items-center">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Login
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ForgotPasswordForm;
