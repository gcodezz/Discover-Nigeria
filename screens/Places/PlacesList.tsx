import { FlatList, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { PlaceItem, Place } from '../../data/places';
import PlaceGridTile from '../../components/Food/FoodGridTile';
import Icon from '../../components/UI/Icon';
import { PlaceListScreenProps } from '../../types/props';
import TouchableCmp from '../../components/UI/TouchableBtn';
import { RootState } from '../../App';

const PlacesList = ({ navigation }: PlaceListScreenProps) => {
  const theme = useTheme();

  const availablePlaces: Place[] = useSelector((state: RootState) => state.places.availablePlaces);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableCmp style={{ paddingLeft: 5 }} onPress={() => navigation.toggleDrawer()}>
          <Icon iconName='menu' />
        </TouchableCmp>
      ),
    });
  }, [navigation]);

  const renderGridItem = ({ item }: PlaceItem) => {
    return (
      <PlaceGridTile
        title={item.name}
        image={item.image}
        onSelect={() => {
          navigation.navigate('PlaceDetails', {
            id: item.id,
            name: item.name,
          });
        }}
      />
    );
  };

  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <FlatList
        data={availablePlaces}
        renderItem={renderGridItem}
        numColumns={2}
        keyExtractor={({ id }) => id}
      />
    </>
  );
};

export default PlacesList;
