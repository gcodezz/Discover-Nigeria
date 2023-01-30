import { ScrollView, StyleSheet, Text, Linking, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';

import { PlaceDetailsScreenProps } from '../../types/props';
import { places, Place } from '../../data/places';
import Icon from '../../components/UI/Icon';
import BigImage from '../../components/UI/BigImage';
import TouchableCmp from '../../components/UI/TouchableBtn';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { togglePlaceFavorite } from '../../store/placeSlice';

const PlaceDetails = ({ route, navigation }: PlaceDetailsScreenProps) => {
  const { id, name } = route.params;
  const selectedPlace: Place | undefined = places.find((place) => place.id === id);
  const favPlaces: Place[] = useSelector((state: RootState) => state.places.favPlaces);

  const currentPlaceIsFav = favPlaces.some((place) => place.id.toString() === id.toString());

  const dispatch: AppDispatch = useDispatch();

  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <TouchableCmp
          style={styles.headerRight}
          onPress={() => {
            dispatch(togglePlaceFavorite(id));
          }}
        >
          <Icon iconName={currentPlaceIsFav ? 'heart' : 'heart-outlined'} />
        </TouchableCmp>
      ),
    });
  }, [selectedPlace, currentPlaceIsFav, navigation, name, dispatch, id]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.wrapper}>
        <BigImage uri={selectedPlace.image} />

        <TouchableCmp
          onPress={() => {
            Linking.openURL(selectedPlace.map);
          }}
          style={styles.map}
        >
          <Text style={styles.mapText}>View on map</Text>
        </TouchableCmp>

        <View style={styles.details}>
          <Text style={{ ...styles.miniText, color: colors.text }}>{selectedPlace.details}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: '5%',
  },
  miniText: {
    fontSize: 18,
    fontFamily: 'KarlaRegular',
    flexWrap: 'wrap',
  },
  // eslint-disable-next-line react-native/no-color-literals
  mapText: {
    color: '#aa18ea',
    fontSize: 16,
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  map: {
    marginVertical: 10,
  },
  headerRight: {
    paddingRight: 10,
  },
});
