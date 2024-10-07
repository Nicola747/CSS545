import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Page Two with a round button that navigates to Page One
function PageTwo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Page Two!</Text>
      <TouchableOpacity style={styles.roundButton} onPress={() => navigation.navigate('PageOne')}>
        <Text style={styles.buttonText}>Go to Page One</Text>
      </TouchableOpacity>
    </View>
  );
}

// Style to make the button round, set font size, color, and various other adjustments 
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
  roundButton: {
    backgroundColor: '#1E90FF',
    width: 100,           
    height: 100,         
    borderRadius: 50,     
    justifyContent: 'center',  
    alignItems: 'center',      
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,   
    textAlign: 'center',
  },
});

export default PageTwo;
