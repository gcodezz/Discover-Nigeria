import { StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import { useSelector, } from 'react-redux'
import { useTheme } from '@react-navigation/native'

import { PlaceItem, Place } from '../../data/places'
import GridTile from '../../components/Food/FoodGridTile'
import { RootState } from '../../App'
import { PlaceListScreenProps } from '../../types/props'

const PlaceFavorite = ({ navigation }: PlaceListScreenProps) => {
  const { favPlaces }: { favPlaces: Place[] } = useSelector((state: RootState) => state.places)

  const { colors } = useTheme()

  const renderGridItem = ({ item }: PlaceItem ) => {
    return (
      <GridTile
        title={item.name}
        image={item.image}
        onSelect={() => {
          navigation.navigate('PlaceDetails', { 
            id: item.id,
            name: item.name
          });
        }}
      />
    )
}

  return (
    <>
      {favPlaces.length >= 1 ? <FlatList
          data={favPlaces}
          renderItem={renderGridItem}
          numColumns={2}
          keyExtractor={({ id }) => id}
      /> : (
          <View style={styles.container}>
              <Text style={{ ...styles.text, color: colors.text }}>You don't have a favorite place yet!</Text>
          </View>
      )}
  </>
  )
}

export default PlaceFavorite

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
  },
  text: {
      fontFamily: 'KarlaMedium',
      fontSize: 18
  }
})