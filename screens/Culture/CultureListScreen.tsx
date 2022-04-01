import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'

import { cultures, Culture, CultureListItem } from '../../data/culture'
import GridTile from '../../components/UI/GridTile'
import Icon from '../../components/UI/Logo'
import { CultureListScreenProps } from '../../types/props'

const CultureListScreen = ({ navigation }: CultureListScreenProps) => {
    const [cultureData, setCulture] = useState<Culture[]>([{
        id: '',
        name: '',
        details: []
    }])

    useEffect(() => {
        setCulture(cultures)
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity 
              style={{ paddingLeft: 5 }}
              onPress={() => navigation.toggleDrawer()}
            >
                <Icon iconName='menu' />
            </TouchableOpacity>
        )
        })
      }, [navigation])
      
    const renderGridItem = ({ item }: CultureListItem ) => {
        return (
            <GridTile 
                flex={1/2}
                morePadding={false}
                title={item.name}
                onSelect={() => {
                    navigation.navigate('CultureDetails', {
                        title: item.name,
                        details: item.details
                    })
                }}
            />
        )
    }
    
    return (
       <FlatList 
            data={cultureData}
            renderItem={renderGridItem}
            numColumns={2}
            keyExtractor={({ id }) => id}
            style={styles.main}
       />
    )
}

export default CultureListScreen

const styles = StyleSheet.create({
    main: {
       
    }
})