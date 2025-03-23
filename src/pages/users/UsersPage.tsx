
import React from 'react';
import PageTransition from '../../components/ui/PageTransition';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const UsersPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground mt-1">
              Find your perfect match from our extensive user base
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Users className="h-20 w-20 mx-auto text-primary/50" />
            <h2 className="mt-4 text-xl font-semibold">User Listings Coming Soon</h2>
            <p className="mt-2 text-muted-foreground">
              This section will list all available matrimony profiles.
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default UsersPage;
