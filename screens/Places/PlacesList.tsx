import { FlatList, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@react-navigation/native'

import { places, PlaceItem, Place } from '../../data/places'
import FoodPlaceGridTile from '../../components/Food/FoodGridTile'
import Icon from '../../components/UI/Logo'
import { PlaceListScreenProps } from '../../types/props'
import TouchableCmp from '../../components/UI/TouchableBtn'

const PlacesList = ({ navigation }: PlaceListScreenProps) => {
    const [placeData, setPlaces] = useState<Place[]>([])

    const theme = useTheme()

    useEffect(() => {
        setPlaces(places)
    }, [])

    const renderGridItem = ({ item }: PlaceItem ) => {
        return (
          
          <FoodPlaceGridTile
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

    return (
        <>
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}/>
            <FlatList
                data={placeData}
                renderItem={renderGridItem}
                numColumns={2}
                keyExtractor={({ id }) => id}
            />
        </>
    )
}

export default PlacesList