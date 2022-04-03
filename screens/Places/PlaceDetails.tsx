import { 
    ScrollView, 
    StyleSheet, 
    Text, 
    Linking,
    View
} from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native'

import { PlaceDetailsScreenProps } from '../../types/props'
import { places, Place } from '../../data/places'
import BigImage from '../../components/UI/BigImage'
import TouchableCmp from '../../components/UI/TouchableBtn'

const PlaceDetails = ({ route, navigation }: PlaceDetailsScreenProps) => {
    const { id, name } = route.params
    const selectedPlace : Place | undefined = places.find(place => place.id == id)

    const { colors } = useTheme()

    useEffect(() => {
        navigation.setOptions({
          headerTitle: name,
        })
    }, [navigation])

    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={{ marginHorizontal: '5%' }}>
                <BigImage uri={selectedPlace!.image}/>

                <TouchableCmp onPress={() => {
                    Linking.openURL(selectedPlace.map)
                }} style={{ marginVertical: 10 }}>
                    <Text style={{ color: '#aa18ea', fontSize: 16 }}>View on map</Text>
                </TouchableCmp>
                
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Text style={{ ...styles.miniText, color: colors.text }}>{selectedPlace.details}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default PlaceDetails

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    miniText: {
      fontSize: 18,
      fontFamily: 'KarlaRegular',
      flexWrap: 'wrap'
    }
});
  