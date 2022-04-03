import { FlatList, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

import { FoodItem, Food } from '../../data/foods'
import FoodGridTile from '../../components/Food/FoodGridTile'
import Icon from '../../components/UI/Icon'
import { FoodListScreenProps } from '../../types/props'
import { fetchFoods } from '../../store/actions'
import TouchableCmp from '../../components/UI/TouchableBtn'
import { RootState } from '../../App'

const FoodListScreen = ({ navigation }: FoodListScreenProps) => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const { availableFoods }: { availableFoods: Food[] } = useSelector((state: RootState) => state.foods)

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

  useEffect(() => {
    dispatch(fetchFoods())
  }, [dispatch])

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
        data={availableFoods}
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
