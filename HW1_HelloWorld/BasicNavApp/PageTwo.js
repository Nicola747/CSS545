import React from 'react';
import { View, Text, Button } from 'react-native';

//Makes page two have a button that takes you to page one
function PageTwo({ navigation }) {
  return (
    <View>
      <Text>Hello from Page Two!</Text>
      <Button
        title="Go to Page One"
        onPress={() => navigation.navigate('PageOne')}
      />
    </View>
  );
}

export default PageTwo; 