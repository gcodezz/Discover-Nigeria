import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { useTheme, Drawer, TouchableRipple, Switch } from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'
import { useDispatch } from 'react-redux'

import { toggleMode } from '../../store/actions'

const DrawerContent = (props: any) => {
    const dispatch = useDispatch()
    const paperTheme = useTheme()
    
    const { colors } = useTheme()

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <DrawerItemList {...props} />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => dispatch(toggleMode())}>
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