import { CultureItem } from "../data/culture"

export type DrawerParams = {
    Culture: undefined
    Foods: undefined
    Music: undefined
}

export type FoodStackParams = {
    Food: undefined
    FoodDetails: {
        id: string,
        title: string
    }
}

export type CultureStackParams = {
    CultureList: undefined
    CultureDetails: {
        title: string
        details: CultureItem["details"]
    }
}

export type MusicTabsParams = {
    Playlist: undefined
    Artists: undefined
    Year: undefined
}

export type MusicStackParams = {
    Musics: undefined
}