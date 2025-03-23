
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { initializeTheme } from '../../store/themeSlice';
import ThemeToggle from '../ui/ThemeToggle';
import { AnimatePresence } from 'framer-motion';

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">Matrimony</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
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
            <p>© {new Date().getFullYear()} Matrimony. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
