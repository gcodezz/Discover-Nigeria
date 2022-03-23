import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { RouteProp } from '@react-navigation/native'

import { 
    DrawerParams,
    MusicStackParams,
    CultureStackParams,
    FoodStackParams
} from './navigations'

type MusicStackNavigationProps = CompositeNavigationProp<
    StackNavigationProp<MusicStackParams, 'Musics'>,
    DrawerNavigationProp<DrawerParams>
>

type CultureListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<CultureStackParams, 'CultureList'>,
  DrawerNavigationProp<DrawerParams>
>

type FoodListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<FoodStackParams, 'Food'>,
  DrawerNavigationProp<DrawerParams>
>

export interface FoodListScreenProps {
  navigation: FoodListScreenNavigationProp
}

export interface MusicScreenStackProps {
    navigation: MusicStackNavigationProps
}

export interface CultureListScreenProps {
  navigation: CultureListScreenNavigationProp
}

export interface CultureDetailsScreenProps {
    navigation: StackNavigationProp<CultureStackParams, 'CultureDetails'>
    route: RouteProp<CultureStackParams, 'CultureDetails'>
}