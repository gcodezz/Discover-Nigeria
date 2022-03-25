import { StyleSheet, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useTheme, Drawer, TouchableRipple, Switch } from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'

import { Context } from '../../components/Context/Context'

const DrawerContent = (props: any) => {
    const paperTheme = useTheme()
    
    const { colors } = useTheme()

    const { toggleTheme }: any = useContext(Context)

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <DrawerItemList {...props} />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text style={{ 
                                fontSize: 18,
                                fontFamily: 'KarlaMedium',
                                color: colors.text
                            }}
                            >
                                Dark Theme
                            </Text>
                            <View pointerEvents="none">
                                <Switch value={paperTheme.dark} color='#aa18ea'/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})