
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, RefreshCcw, Heart } from 'lucide-react';
import { Button } from '../ui/button';

const VerifyEmail: React.FC = () => {
  const [verified, setVerified] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [resending, setResending] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate verification after 3 seconds
    const timer = setTimeout(() => {
      setVerified(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (countdown > 0) {
      const interval = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [countdown]);
  
  const handleResend = () => {
    setResending(true);
    setCountdown(60);
    
    // Simulate resending
    setTimeout(() => {
      setResending(false);
    }, 1500);
  };
  
  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };
  
  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const heartVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        delay: 0.2,
      } 
    },
    pulse: {
      scale: [1, 1.15, 1, 1.15, 1],
      transition: {
        duration: 1.5,
        times: [0, 0.14, 0.28, 0.42, 0.70],
        repeat: Infinity,
        repeatDelay: 0.5
      }
    }
  };
  
  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.3 }
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
        <AnimatePresence mode="wait">
          {verified ? (
            <motion.div 
              key="verified"
              className="flex justify-center mb-6"
              variants={heartVariants}
              initial="initial"
              animate={["animate", "pulse"]}
            >
              <Heart className="h-16 w-16 text-primary fill-primary" />
            </motion.div>
          ) : (
            <motion.div 
              key="verifying"
              className="flex justify-center mb-6"
              variants={iconVariants}
              initial="initial"
              animate="animate"
            >
              <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.h1 
          className="text-3xl font-bold tracking-tight font-cursive"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {verified ? "Email Verified!" : "Verifying your email"}
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {verified 
            ? "Your email has been successfully verified." 
            : "Please wait while we verify your email address."}
        </motion.p>
      </div>
      
      <div className="mt-8 space-y-4">
        <AnimatePresence mode="wait">
          {verified ? (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate('/dashboard')}
                className="relative inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-[0px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Heart className="h-5 w-5" />
                <span>Continue to Dashboard</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              key="verifying"
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>This won't take long</span>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Didn't receive an email?
                </p>
                <motion.button
                  onClick={handleResend}
                  disabled={resending || countdown > 0}
                  className="inline-flex items-center justify-center text-sm font-medium text-primary underline-offset-4 hover:underline disabled:opacity-50"
                  whileHover={{ scale: resending || countdown > 0 ? 1 : 1.05 }}
                  whileTap={{ scale: resending || countdown > 0 ? 1 : 0.98 }}
                >
                  {resending ? (
                    <span className="flex items-center">
                      <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                      Resending...
                    </span>
                  ) : countdown > 0 ? (
                    `Resend in ${countdown}s`
                  ) : (
                    "Resend verification email"
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default VerifyEmail;
