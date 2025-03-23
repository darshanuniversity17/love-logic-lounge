
import React, { useState } from 'react';
import PageTransition from '../components/ui/PageTransition';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileForm from '../components/profile/ProfileForm';

const Dashboard: React.FC = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const navigate = useNavigate();
  const [showProfileForm, setShowProfileForm] = useState(false);
  
  return (
    <PageTransition>
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Manage matrimony profiles and find the perfect match
            </p>
          </div>
          
          <motion.button
            onClick={() => setShowProfileForm(true)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Profile
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder cards for profiles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div 
              key={i}
              className="glass-card rounded-lg p-6 transition-all duration-300 hover:shadow-md"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: i * 0.1 
                } 
              }}
            >
              <div className="w-full h-40 mb-4 rounded-md bg-muted animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-2/3 rounded-md bg-muted animate-pulse"></div>
                <div className="h-3 rounded-md bg-muted animate-pulse"></div>
                <div className="h-3 w-3/4 rounded-md bg-muted animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {showProfileForm && (
          <ProfileForm onClose={() => setShowProfileForm(false)} />
        )}
      </section>
    </PageTransition>
  );
};

export default Dashboard;
