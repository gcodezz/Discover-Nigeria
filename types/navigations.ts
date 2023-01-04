import { Culture } from '../data/culture';

export type DrawerParams = {
  Culture: undefined;
  Foods: undefined;
  Music: undefined;
  Places: undefined;
  Favorites: undefined;
};

export type FoodStackParams = {
  Food: undefined;
  FoodDetails: {
    id: string;
    title: string;
  };
};

export type CultureStackParams = {
  CultureList: undefined;
  CultureDetails: {
    title: string;
    details: Culture['details'];
  };
};

export type PlaceStackParams = {
  PlaceList: undefined;
  PlaceDetails: {
    id: string;
    name: string;
  };
};

export type MusicTabsParams = {
  Playlist: undefined;
  Artists: undefined;
  Year: undefined;
};

export type MusicStackParams = {
  Musics: undefined;
};

export type FavStackParams = {
  FavoriteStack: undefined;
};

export type FavoriteTabParams = {
  Foods: undefined;
  Places: undefined;
};
