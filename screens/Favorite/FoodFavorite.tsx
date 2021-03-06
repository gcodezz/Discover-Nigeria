import { StyleSheet, FlatList, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'

import { FoodItem, Food } from '../../data/foods'
import GridTile from '../../components/Food/FoodGridTile'
import { RootState } from '../../App'
import { FoodListScreenProps } from '../../types/props'
import { fetchFavs } from '../../store/actions'

const FoodFavorite = ({ navigation }: FoodListScreenProps) => {
    const { favFoods }: { favFoods: Food[] } = useSelector((state: RootState) => state.foods)

    const { colors } = useTheme()

    const dispatch = useDispatch()

    const renderGridItem = ({ item }: FoodItem ) => {
        return (
          <GridTile
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

    const loadFavFoods = useCallback(async() => {
        await dispatch(fetchFavs('favFoods'))
    }, [dispatch])
    
    useEffect(() => {
        loadFavFoods()
    }, [])

    return (
        <>
            {favFoods.length >= 1 ? <FlatList
                data={favFoods}
                renderItem={renderGridItem}
                numColumns={2}
                keyExtractor={({ id }) => id}
            /> : (
                <View style={styles.container}>
                    <Text style={{ ...styles.text, color: colors.text }}>You don't have a favorite food yet!</Text>
                </View>
            )}
        </>
    )
}

export default FoodFavorite

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