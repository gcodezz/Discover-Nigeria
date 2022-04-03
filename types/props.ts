import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

import { 
  DrawerParams,
  MusicStackParams,
  CultureStackParams,
  PlaceStackParams,
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

type PlacesListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<PlaceStackParams, 'PlaceList'>,
  DrawerNavigationProp<DrawerParams>
>

type FoodListScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<FoodStackParams, 'Food'>,
  DrawerNavigationProp<DrawerParams>
>

type DrawerContentNavigationProp = DrawerNavigationProp<DrawerParams>

export interface FoodDetailsScreenProps {
  navigation: StackNavigationProp<FoodStackParams, 'FoodDetails'>
  route: RouteProp<FoodStackParams, 'FoodDetails'>
}

export interface DrawerContentProps {
  navigation: DrawerContentNavigationProp
}

export interface FoodListScreenProps {
  navigation: FoodListScreenNavigationProp
}

export interface MusicScreenStackProps {
  navigation: MusicStackNavigationProps
}

export interface CultureListScreenProps {
  navigation: CultureListScreenNavigationProp
}

export interface PlaceListScreenProps {
  navigation: PlacesListScreenNavigationProp
}

export interface CultureDetailsScreenProps {
  navigation: StackNavigationProp<CultureStackParams, 'CultureDetails'>
  route: RouteProp<CultureStackParams, 'CultureDetails'>
}

export interface PlaceDetailsScreenProps {
  navigation: StackNavigationProp<PlaceStackParams, 'PlaceDetails'>
  route: RouteProp<PlaceStackParams, 'PlaceDetails'>
}