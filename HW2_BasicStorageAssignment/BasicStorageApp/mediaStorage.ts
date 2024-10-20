import RNFS from 'react-native-fs';  // Imports file system access
import AsyncStorage from '@react-native-async-storage/async-storage'; // For storing metadata of media
import { launchImageLibrary } from 'react-native-image-picker';  // Allows media selection from gallery

// Function that stores the selected media file locally
export const storeMedia = async (uri: string, filename: string) => {
  const destPath = `${RNFS.DocumentDirectoryPath}/${filename}`;  // Define the destination path
  try {
    await RNFS.copyFile(uri, destPath);  // Copy the file from source to destination
    await AsyncStorage.setItem('media', JSON.stringify({ path: destPath, type: filename.endsWith('.mp4') ? 'video' : 'image' }));
    return destPath;  // If sucsessfull will return the destination path if successful
  } catch (error) {
    console.error('Error in saving media: ', error);
    return null; 
  }
};

// Function to load the stored media metadata and verify if the file exists
export const loadStoredMedia = async () => {
    try {
      const media = await AsyncStorage.getItem('media'); // Get media details from storage
      if (media) {
        const mediaData = JSON.parse(media);
        const fileExists = await RNFS.exists(mediaData.path); // Verify the file still exists
        if (fileExists) {
          return mediaData; 
        }
      }
    } catch (error) {
      console.error('Error loading stored media: ', error); 
    }
    return null; // Returns null if media is not found
  };

// Function that picks a media file from the phone gallery and stores it locally
export const pickAndStoreMedia = async () => {
  const result = await launchImageLibrary({ mediaType: 'mixed' });
  if (result.assets && result.assets.length > 0) {
    const uri = result.assets[0].uri!; 
    const filename = result.assets[0].fileName!;
    const storedPath = await storeMedia(uri, filename); 
    return storedPath; 
  }
  return null;  // Returns null if no media is selected
};
  