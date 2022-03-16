import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import MealsNavigator from './navigation/MealsNavigator';


export default function App() {

  const [loaded] = useFonts({
    sans: require('./assets/fonts/OpenSans-Regular.ttf'),
    sansbold : require('./assets/fonts/OpenSans-Bold.ttf')
  });


  if (!loaded) {
    return null;
  }

  return <MealsNavigator />;
}
