import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';



import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


 
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
      options={{ headerTitle: 'Meal Categories',headerLeft: () => (
                 <Button
                   onPress={() => alert('This is a button!')}
                   title="menu"
                   color="green"   />
      ),}}
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
   const  MyTab = () => {
     return(

         <Tab.Navigator >
           <Tab.Screen
            name = 'CategorieScreen'
            component = {Mystack}
            options = {{ headerShown : false }}
            
            />
            <Tab.Screen
            name = 'favoritesScreen'
            component = {FavoritesScreen}
            options={{ title: 'Favorites' 
            
            }}
            />
             </Tab.Navigator>

     )
          }

      

export default function MealsNavigator()
{

  return(
      <NavigationContainer>
         <MyTab/> 
      </NavigationContainer>
  );
}