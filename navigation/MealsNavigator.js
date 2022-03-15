import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator()
 
function Mystack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name = 'Login'
      component = {CategoriesScreen}
      options = {{ headerShown : false}}
      />
      <Stack.Screen
      name = 'Home'
      component = {CategoryMealsScreen}
      options = {{ headerShown : false}}
      />
      <Stack.Screen
      name = 'Home'
      component = {MealDetailScreen}
      options = {{ headerShown : false}}
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