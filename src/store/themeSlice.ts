
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = {
  theme: 'light' | 'dark';
};

// Check if user has a saved theme preference or use system preference
const getInitialTheme = (): 'light' | 'dark' => {
  // Check local storage
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme) {
    return savedTheme;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  // Default to light
  return 'light';
};

// Initial state in browser environment
const initialState: ThemeState = {
  theme: 'light', // Default for SSR, will be updated in useEffect
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
      // Save to localStorage
      localStorage.setItem('theme', action.payload);
      // Update document class
      if (action.payload === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    toggleTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      // Save to localStorage
      localStorage.setItem('theme', newTheme);
      // Update document class
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    initializeTheme: (state) => {
      try {
        const theme = getInitialTheme();
        state.theme = theme;
        
        // Update document class
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        // Fallback if localStorage is not available
        console.error('Could not initialize theme', e);
      }
    }
  },
});

export const { setTheme, toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
