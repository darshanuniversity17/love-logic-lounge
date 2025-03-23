
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, RefreshCcw } from 'lucide-react';

const VerifyEmail: React.FC = () => {
  const [verified, setVerified] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [resending, setResending] = useState(false);
  
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
          variants={iconVariants}
          initial="initial"
          animate="animate"
        >
          {verified ? (
            <CheckCircle className="h-16 w-16 text-primary" />
          ) : (
            <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          )}
        </motion.div>
        
        <h1 className="text-3xl font-bold tracking-tight">
          {verified ? "Email Verified!" : "Verifying your email"}
        </h1>
        
        <p className="text-muted-foreground">
          {verified 
            ? "Your email has been successfully verified." 
            : "Please wait while we verify your email address."}
        </p>
      </div>
      
      <div className="mt-8 space-y-4">
        {verified ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/dashboard">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex h-12 w-full items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Continue to Dashboard
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>This won't take long</span>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Didn't receive an email?
              </p>
              <button
                onClick={handleResend}
                disabled={resending || countdown > 0}
                className="inline-flex items-center justify-center text-sm font-medium text-primary underline-offset-4 hover:underline disabled:opacity-50"
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
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default VerifyEmail;
