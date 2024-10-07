import * as React from 'react';
 
//Nessesery for navigation between pages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import the other two JS files for the two pages
import PageOne from './PageOne';
import PageTwo from './PageTwo';

const Stack = createNativeStackNavigator();

function App() { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PageOne">
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen
            name="PageTwo"
            component={PageTwo}
            options={{ headerShown: false }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


