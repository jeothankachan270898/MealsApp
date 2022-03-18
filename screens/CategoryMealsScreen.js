import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES ,MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ route }, props) => {
 
  const {catId} = route.params;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
 
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.screenOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};



export default CategoryMealScreen;
