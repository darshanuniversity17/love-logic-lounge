
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { initializeTheme } from '../../store/themeSlice';
import ThemeToggle from '../ui/ThemeToggle';
import NavigationBar from './NavigationBar';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  // Define routes that are part of the authentication process
  const authRoutes = ['/auth/login', '/auth/signup', '/auth/verify', '/auth/forgot-password', '/'];
  const isAuthRoute = authRoutes.includes(location.pathname);
  
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="h-6 w-6 text-primary fill-primary" />
            </motion.div>
            <h1 className="text-xl font-medium font-cursive">Matrimony</h1>
          </motion.div>
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {!isAuthRoute && <NavigationBar />}
            <ThemeToggle />
          </motion.div>
        </div>
      </header>
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      
      <footer className="py-6 border-t border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>Made with</span> 
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <Heart className="h-4 w-4 text-primary fill-primary" />
              </motion.div>
              <span>© {new Date().getFullYear()} Matrimony</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
