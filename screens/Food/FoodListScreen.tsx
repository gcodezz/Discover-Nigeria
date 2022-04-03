import { FlatList, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@react-navigation/native'

import { foods, FoodItem, Food } from '../../data/foods'
import FoodGridTile from '../../components/Food/FoodGridTile'
import Icon from '../../components/UI/Logo'
import { FoodListScreenProps } from '../../types/props'
import TouchableCmp from '../../components/UI/TouchableBtn'

const FoodListScreen = ({ navigation }: FoodListScreenProps) => {
  const [foodData, setFood] = useState<Food[]>([])

  const theme = useTheme()

  useEffect(() => {
    setFood(foods)
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableCmp 
          style={{ paddingLeft: 5 }}
          onPress={() => navigation.toggleDrawer()}
        >
            <Icon iconName='menu'/>
        </TouchableCmp>
    )
    })
  }, [navigation])

  const renderGridItem = ({ item }: FoodItem ) => {
    return (
      
      <FoodGridTile
        title={item.title}
        image={item.image}
        onSelect={() => {
          navigation.navigate('FoodDetails', { 
            id: item.id,
            title: item.title
          });
        }}
      />
    )
  }

  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
      <FlatList
        data={foodData}
        renderItem={renderGridItem}
        numColumns={2}
        keyExtractor={({ id }) => id}
      />
    </>
  )
}

export const screenOptions = () => {
  return {
    headerTitle: 'Foods'
  }
}

export default FoodListScreen
