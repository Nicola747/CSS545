import React from 'react';
import { View, Text, Button } from 'react-native';

// Makes page two have a button that takes you to page one
function PageTwo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Page Two!</Text>
      <Button
        title="Go to Page One"
        onPress={() => navigation.navigate('PageOne')}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    textAlign: 'center',  // Center the text as well 
    marginBottom: 20,     // Add some spacing between the text and button
  },
};

export default PageTwo;
