import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Page One with a square button that navigates to Page Two
function PageOne({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Page One!</Text>
      <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('PageTwo')}>
        <Text style={styles.buttonText}>Go to Page Two</Text>
      </TouchableOpacity>
    </View>
  );
}

// Style to make the button square, set font size, color, and various other adjustments 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 25,
    color: '#000000',
  },
  squareButton: {
    backgroundColor: '#32CD32',
    width: 100,           
    height: 100,          
    justifyContent: 'center', 
    alignItems: 'center',      
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PageOne;