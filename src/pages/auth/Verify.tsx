
import React from 'react';
import PageTransition from '../../components/ui/PageTransition';
import VerifyEmail from '../../components/auth/VerifyEmail';
import { motion } from 'framer-motion';

const Verify: React.FC = () => {
  return (
    <PageTransition>
      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4 bg-love-gradient-soft">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="love-card overflow-hidden rounded-lg shadow-md">
            <VerifyEmail />
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Verify;
