import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CultureDetailsScreen from '../screens/Culture/CultureDetailsScreen'
import CultureListScreen from '../screens/Culture/CultureListScreen'
import FoodDetailsScreen from '../screens/Food/FoodDetailsScreen'
import FoodListScreen from '../screens/Food/FoodListScreen'
// import PlaylistsScreen from '../screens/Music/PlaylistsScreen'
// import ArtistsScreen from '../screens/Music/ArtistsScreen'
// import YearsScreen from '../screens/Music/YearsScreen'
import Icon from '../components/UI/Button'
import { CultureItem } from '../data/culture'

export type DrawerParams = {
    Culture: undefined
    Foods: undefined
    Music: undefined
}

const Drawer = createDrawerNavigator<DrawerParams>()

export type FoodStackParams = {
    Food: undefined
    FoodDetails: {
        id: string,
        title: string
    }
}
const FoodStackNavigator = createStackNavigator<FoodStackParams>()

const FoodScreenStack = () => {
    const navigation: any = useNavigation()
    return (
        <FoodStackNavigator.Navigator>
            <FoodStackNavigator.Screen 
                name='Food'
                component={FoodListScreen}
            />
            <FoodStackNavigator.Screen 
                name='FoodDetails'
                component={FoodDetailsScreen}
            />
        </FoodStackNavigator.Navigator>
    )
}

export type CultureStackParams = {
    Culture: undefined
    CultureDetails: {
        title: string
        details: CultureItem["details"]
    }
}

const CultureStackNavigator = createStackNavigator<CultureStackParams>()

const CultureScreenStack = () => {
    return (
        <CultureStackNavigator.Navigator>
            <CultureStackNavigator.Screen
                name='Culture'
                component={CultureListScreen}
            />
            <CultureStackNavigator.Screen
                name='CultureDetails'
                component={CultureDetailsScreen}
            />
        </CultureStackNavigator.Navigator>
    )
}

// headerLeft: () => (
//     <TouchableOpacity 
//         style={{ paddingLeft: 5 }}
//         onPress={() => navigation.toggleDrawer()}
//     >
//         <Icon iconName='menu' color='black'/>
//     </TouchableOpacity>
// ),

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={({ navigation }) => ({
                    headerShown: false,
                    drawerActiveBackgroundColor: '#aa18ea',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        fontSize: 18,
                        marginLeft: -20,
                        fontFamily: 'KarlaMedium'
                    },
                })}
            >
                <Drawer.Screen 
                    name='Foods'
                    component={FoodScreenStack}
                    options={{
                        headerTitle: 'Food',
                        drawerIcon: ({color}) => (
                            <Icon iconName="bowl" color={color} />
                        )
                    }}
                />
                <Drawer.Screen 
                    name='Culture'
                    component={CultureScreenStack}
                    options={{
                        headerTitle: 'Yoruba Culture',
                        drawerIcon: ({color}) => (
                            <Icon iconName="globe" color={color} />
                        ),
                    }}
                />
                <Drawer.Screen 
                    name='Music'
                    component={FoodListScreen}
                    options={{
                        headerTitle: 'Food',
                        drawerIcon: ({color}) => (
                            <Icon iconName="music" color={color} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator