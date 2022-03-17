import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { CultureStackParams } from '../../navigation/AppNavigation'

type Props = {
    navigation: StackNavigationProp<CultureStackParams, 'CultureDetails'>
    route: RouteProp<CultureStackParams, 'CultureDetails'>
}

const CultureDetailsScreen = ({ route, navigation }: Props) => {
    const title: string = route.params.title
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        })
    }, [navigation])
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default CultureDetailsScreen

const styles = StyleSheet.create({})