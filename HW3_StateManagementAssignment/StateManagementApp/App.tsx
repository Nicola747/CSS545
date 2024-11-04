import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, AppState, AppStateStatus } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    // Clear any previous state when new app start
    clearSavedState();

    const stateListener = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      stateListener.remove();
    };
  }, []);

  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      // App becomes active
      console.log('App has come to the foreground');
      loadState();
    } else if (nextAppState.match(/inactive|background/)) {
      // App goes inactive
      console.log('App is going to the background');
      saveState();
    }
    setAppState(nextAppState);
  };

  const saveState = async () => {
    try {
      await AsyncStorage.setItem('savedInput', inputValue);
      console.log('State has been saved');
    } catch (e) {
      console.error('Error when saving state', e);
    }
  };

  const loadState = async () => {
    try {
      const savedInput = await AsyncStorage.getItem('savedInput');
      if (savedInput !== null) {
        setInputValue(savedInput);
        console.log('State has been restored');
      }
    } catch (e) {
      console.error('Error when loading state', e);
    }
  };

  const clearSavedState = async () => {
    try {
      await AsyncStorage.removeItem('savedInput');
      console.log('Saved state has been cleared');
    } catch (e) {
      console.error('Error when clearing saved state', e);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Type some text and then leave the app without ending the app process:</Text>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        style={{ height: 40, borderColor: 'black', borderWidth: 2, marginTop: 10 }}
      />
    </View>
  );
};

export default App;
