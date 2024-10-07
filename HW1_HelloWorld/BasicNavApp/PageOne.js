import React from 'react';
import { View, Text, Button } from 'react-native';

//Makes page one have button that takes you to page two
function PageOne({ navigation }) {
  return (
    <View>
      <Text>Hello from Page One!</Text>
      <Button
        title="Go to Page Two"
        onPress={() => navigation.navigate('PageTwo')}/>
    </View>
  ); 
}

export default PageOne; 
