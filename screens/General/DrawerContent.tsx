import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Drawer, TouchableRipple, Switch } from 'react-native-paper'
import {
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer'

const DrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
            <Drawer.Section>
                <DrawerItemList {...props} />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.preference}>
                        <Text style={{ 
                            fontSize: 16,
                            fontFamily: 'KarlaMedium' }}
                        >
                            Dark Theme
                        </Text>
                        <View pointerEvents="none">
                            <Switch value={true} color='#aa18ea'/>
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