import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    FlatList 
} from 'react-native'
import React, { 
    useLayoutEffect, 
    useState, 
    useEffect 
} from 'react'
import { Audio } from 'expo-av'

import { CultureDetailsScreenProps } from '../../types/props'
import { cultures, CultureItem } from '../../data/culture'
import Icon from '../../components/UI/Button'

const CultureDetailsScreen = ({ route, navigation }: CultureDetailsScreenProps) => {
    const [sound, setSound] = useState<any>()

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
           require('../../assets/music/test.m4a')
        );
        setSound(sound);

        await sound.playAsync(); }
    
        useEffect(() => {
            return sound
            ? () => {
                sound.unloadAsync(); 
            }
            : undefined;
        }, [sound])

    const title: string = route.params.title
    const foundCulture: CultureItem | undefined = cultures.find(culture => culture.name === title)
    const cultureArr = foundCulture?.details
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        })
    }, [navigation])
    return (
        <View style={styles.background}>
            <View style={styles.shadow}>
                <FlatList 
                    data={cultureArr}
                    renderItem={() => 
                        <>
                            <View style={styles.culture}>
                                <View>
                                    <Text style={styles.text}>American</Text>
                                    <Text style={styles.text}>Mumerika</Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={playSound}
                                    style={styles.logo}
                                >
                                    <Icon iconName='beamed-note' color='#404040'/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.line}></View>
                        </>
                    }
                    style={styles.container}
                />
            </View>
        </View>
    )
}

export default CultureDetailsScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },
    shadow: {
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {
            width: -2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        flex: 1
    },
    container: {
        marginTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#f2f2f2',
        borderWidth: 0.5,
        shadowColor: "blue",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0
        },
        elevation: 4,
        backgroundColor: '#e6e6e6',
        width: '90%'
    },
    culture: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    },
    text: {
        margin: 5,
        fontSize: 17,
        fontFamily: 'KarlaMedium'
    },
    logo: { 
        justifyContent: 'center' 
    },
    line: {
        borderTopWidth: 1,
        borderColor: '#bfbfbf',
        alignSelf: 'flex-end',
        width: '94%',
        marginTop: -10
    }
})