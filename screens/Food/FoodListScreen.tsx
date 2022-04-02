import { StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@react-navigation/native'

import { foods, FoodItem, Food } from '../../data/foods'
import FoodGridTile from '../../components/Food/FoodGridTile'
import Icon from '../../components/UI/Logo'
import { FoodListScreenProps } from '../../types/props'

const FoodListScreen = ({ navigation }: FoodListScreenProps) => {
  const [foodData, setFood] = useState<Food[]>([])

  const theme = useTheme()

  useEffect(() => {
    setFood(foods)
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity 
          style={{ paddingLeft: 5 }}
          onPress={() => navigation.toggleDrawer()}
        >
            <Icon iconName='menu'/>
        </TouchableOpacity>
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
        style={styles.main}
      />
    </>
  )
}

export const screenOptions = () => {
  return {
    headerTitle: 'Food'
  }
}

export default FoodListScreen

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'white'
  }
})
