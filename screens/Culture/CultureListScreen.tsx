import { StackNavigationProp } from '@react-navigation/stack'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { cultures, Item } from '../../data/culture'
import { CultureStackParams, DrawerParams } from '../../navigation/AppNavigation'
import CultureGridTile from '../../components/Culture/CultureGridTile'
import Icon from '../../components/UI/Button'

type CultureListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CultureStackParams, 'CultureList'>,
  DrawerNavigationProp<DrawerParams>
>

interface Props {
  navigation: CultureListScreenNavigationProp
}

const CultureListScreen = ({ navigation }: Props) => {
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
    const renderGridItem = ({ item }: Item ) => {
        return (
            <CultureGridTile 
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
            data={cultures}
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
        backgroundColor: 'white'
    }
})