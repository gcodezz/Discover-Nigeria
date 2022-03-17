import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'

import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { FoodStackParams, DrawerParams } from '../../navigation/AppNavigation'
import { foods, FoodItem } from '../../data/foods'
import FoodGridTile from '../../components/Food/FoodGridTile'
import Icon from '../../components/UI/Button'

type FoodListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<FoodStackParams, 'Food'>,
  DrawerNavigationProp<DrawerParams>
>

interface Props {
  navigation: FoodListScreenNavigationProp
}

const FoodList = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity 
          style={{ paddingLeft: 5 }}
          onPress={() => navigation.toggleDrawer()}
        >
            <Icon iconName='menu' color='black'/>
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
    <FlatList
      data={foods}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={({ id }) => id}
      style={styles.main}
    />
  )
}

export const screenOptions = () => {
  return {
    headerTitle: 'Food'
  }
}

export default FoodList

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white'
  }
})
