import { Culture } from '../data/culture'

export interface DrawerParams {
  Culture: undefined
  Foods: undefined
  Music: undefined
  Places: undefined
  Favorites: undefined
}

export interface FoodStackParams {
  Food: undefined
  FoodDetails: {
    id: string
    title: string
  }
}

export interface CultureStackParams {
  CultureList: undefined
  CultureDetails: {
    title: string
    details: Culture['details']
  }
}

export interface PlaceStackParams {
  PlaceList: undefined
  PlaceDetails: {
    id: string
    name: string
  }
}

export interface MusicTabsParams {
  Playlist: undefined
  Artists: undefined
  Year: undefined
}

export interface MusicStackParams {
  Musics: undefined
}

export interface FavStackParams {
  FavoriteStack: undefined
}

export interface FavoriteTabParams {
  Foods: undefined
  Places: undefined
}
