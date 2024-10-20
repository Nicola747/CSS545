import React, { useState } from 'react';
import { Button, Image, View, Text, Switch } from 'react-native';
import Video from 'react-native-video';

// import the other two ts files
import { useTheme } from './userThemeSetting';
import { pickAndStoreMedia, loadStoredMedia } from './mediaStorage'; 

const App = () => {
  // Breaks apart the theme and toggleTheme function from useTheme 
  const { theme, toggleTheme } = useTheme();

  // Used to store the path of the selected media
  const [mediaPath, setMediaPath] = useState<string | null>(null);

  // Used to differentiate between 'image' and 'video'
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);

  // Temporarily store picked media path
  const [pickedMediaPath, setPickedMediaPath] = useState<string | null>(null); 

  // Temporarily store picked media type
  const [pickedMediaType, setPickedMediaType] = useState<'image' | 'video' | null>(null); 



  const handleLoadStoredMedia = async () => {
    const storedMedia = await loadStoredMedia();
    if (storedMedia) {
      setMediaPath(storedMedia.path); // Set the media path
      setMediaType(storedMedia.type); // Set the media type (image/video)
    }
  };  

  // Picks media from the library and stores it locally
  const handlePickMedia = async () => {
    const path = await pickAndStoreMedia();
    if (path) {
      setPickedMediaPath(path);
      setPickedMediaType(path.endsWith('.mp4') ? 'video' : 'image');
    }
  };
  

  return (
    <View style={{ flex: 1, backgroundColor: theme === 'light' ? '#fff' : '#333', justifyContent: 'center', alignItems: 'center' }}>
      {/* Display the current theme */}
      <Text style={{ color: theme === 'light' ? '#000' : '#fff' }}>Current Theme: {theme}</Text>
      {/* Theme toggle switch */}
      <Switch 
        value={theme === 'dark'} // Switch is on when theme is 'dark' 
        onValueChange={toggleTheme}
        trackColor={{ false: '#ccc', true: '#81b0ff' }}
        thumbColor={theme === 'dark' ? '#fff' : '#f4f3f4'} />
      {/* Button to pick and store media */}
      <Button title="Pick Media" onPress={handlePickMedia} />
      {/* Button to load stored media */}
      <Button title="Load Stored Media" onPress={handleLoadStoredMedia} />
      {/* Render media only when the "Load Stored Media" button is pressed */}
      {mediaPath && mediaType === 'image' && (
        <Image source={{ uri: `file://${mediaPath}` }} style={{ width: 300, height: 300 }} />
      )}
      {mediaPath && mediaType === 'video' && (
        <Video source={{ uri: `file://${mediaPath}` }} style={{ width: 300, height: 300 }} controls />
      )}
    </View>
  );
};

export default App;
