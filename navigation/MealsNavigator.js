import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const Stack = createStackNavigator()


 
function Mystack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name = 'Categories'
      component = {CategoriesScreen}
      options={{ headerTitle: 'Meal Categories',
      headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor }}
      />
      <Stack.Screen
      name = 'CategoryMeals'
      component = {CategoryMealsScreen}
      options={{ title: 'Category Meals' }}
      />
      <Stack.Screen
      name = 'MealDetail'
      component = {MealDetailScreen}
      options = {{ title: 'Meals Detail'}}
      />
      
    </Stack.Navigator>
  )
}

export default function MealsNavigator()
{
  


  return(
      <NavigationContainer>
         <Mystack/> 
      </NavigationContainer>
  );
}