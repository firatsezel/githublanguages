import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {SearchScreen, ProfileScreen} from './pages';
import {useBackHandler} from '@react-native-community/hooks';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

let reff = null;

const App = () => {
  useBackHandler(() => {
    const currentRoute = reff.getCurrentRoute();
    if (currentRoute.name === 'Search') {
      return true;
    }
    return false;
  });

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer
        ref={navigatorRef => {
          reff = navigatorRef;
        }}
      >
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
