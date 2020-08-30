/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {setCustomText} from 'react-native-global-props';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import StatusScreen from './src/screens/StatusScreen';
import Header from './src/components/Header';

const Stack = createStackNavigator();

const customText = {
  style: {fontFamily: 'Roboto'},
};

setCustomText(customText);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                header: ({scene, previous, navigation}) => {
                  return <Header />;
                },
              }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Status"
              options={{
                header: ({scene, previous, navigation}) => {
                  return <Header title={navigation.dangerouslyGetState()} />;
                },
              }}
              component={StatusScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
