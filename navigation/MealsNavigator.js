import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
 
function Mystack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
     
    }}>
      <Stack.Screen
      name = 'Categories'
      component = {CategoriesScreen}
      options={{ headerTitle: 'Meal Categories',
    }}
      
  
      />
      <Stack.Screen
      name = 'CategoryMeals'
      component = {CategoryMealsScreen}
      options={{ title: 'Category Meals' 
      
      }}
      />
      <Stack.Screen
      name = 'MealDetail'
      component = {MealDetailScreen}
      options = {{ title: 'Meals Detail'}}
      />
      
      <Tab.Navigator />
     
     
    </Stack.Navigator>

      
  )
}


         <Tab.Navigator>
           <Tab.Screen
            name = 'Categories'
            component = {CategoriesScreen}
            options={{ headerTitle: ' Categories',
            }}
            
            />
            <Tab.Screen
            name = 'favoritesScreen'
            component = {FavoritesScreen}
            options={{ title: 'Favorites' 
            
            }}
            />
         </Tab.Navigator>
  

export default function MealsNavigator()
{

  return(
      <NavigationContainer>
         <Mystack/> 
      </NavigationContainer>
  );
}