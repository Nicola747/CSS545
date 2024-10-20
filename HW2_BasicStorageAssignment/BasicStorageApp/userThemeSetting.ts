import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';  // Used to system theme preference

// Hook to manage and the app theme
export const useTheme = () => {
  // Detect the system theme (dark/light)
  const systemTheme = useColorScheme(); 
  // State to store the current theme ('dark' and 'light')
  const [theme, setTheme] = useState<'light' | 'dark'>(systemTheme || 'light');

  // Function that toggles the theme between 'dark' and 'light'
  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';  // Switch theme
    setTheme(newTheme);  // Update the state
    await AsyncStorage.setItem('theme', newTheme);  // Persist the theme in AsyncStorage
  };

  // Function that loads the saved user theme from AsyncStorage whern app starts
  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem('theme');  // Retrieves stored theme
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');  // If one is found, then it applies it
    }
  };

  // Load the theme on start
  useEffect(() => {
    loadTheme();
  }, []);

  // Returns the current theme and the toggle function
  return { theme, toggleTheme };
};
