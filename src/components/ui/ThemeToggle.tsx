
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moon, Sun } from 'lucide-react';
import { toggleTheme } from '../../store/themeSlice';
import { RootState } from '../../store/store';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => dispatch(toggleTheme())}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background p-2 text-foreground transition-colors hover:bg-secondary"
      aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
    >
      <Sun 
        className={`h-5 w-5 transition-opacity ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} 
        style={{ position: 'absolute' }} 
      />
      <Moon 
        className={`h-5 w-5 transition-opacity ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} 
        style={{ position: 'absolute' }} 
      />
    </motion.button>
  );
};

export default ThemeToggle;
