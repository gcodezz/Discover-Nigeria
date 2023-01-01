import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import React, { useLayoutEffect, useCallback, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

import { CultureDetailsScreenProps } from '../../types/props';
import { cultures, Culture, CultureDetailItem } from '../../data/culture';
import Icon from '../../components/UI/Icon';
import TouchableCmp from '../../components/UI/TouchableBtn';

const CultureDetailsScreen = ({ route, navigation }: CultureDetailsScreenProps) => {
  const [sound, setSound] = useState<any>();

  const { colors } = useTheme();
  const styles = makeStyles(colors);

  const playSound = useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/music/test.m4a'));
    setSound(sound);

    await sound.playAsync();
  }, [sound]);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const title: string = route.params.title;
  const foundCulture: Culture | undefined = cultures.find((culture) => culture.name === title);
  const cultureArr = foundCulture?.details;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation]);

  const renderGridItem = ({ item }: CultureDetailItem) => {
    return (
      <>
        <View style={styles.culture}>
          <View>
            <Text style={styles.text}>{item.englishName}</Text>
            <Text style={styles.text}>{item.cultureName}</Text>
          </View>
          <TouchableCmp onPress={playSound} style={styles.logo}>
            <Icon iconName='beamed-note' />
          </TouchableCmp>
        </View>
        <View style={styles.line}></View>
      </>
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.shadow}>
        <FlatList
          data={cultureArr}
          renderItem={renderGridItem}
          style={styles.container}
          keyExtractor={({ id }) => id}
        />
      </View>
    </View>
  );
};

export default CultureDetailsScreen;

const makeStyles = (colors: any) =>
  StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.otherBackground,
    },
    shadow: {
      alignItems: 'center',
      shadowColor: '#171717',
      shadowOffset: {
        width: -2,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      flex: 1,
    },
    container: {
      marginTop: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderColor: colors.modalBorderColor,
      borderWidth: 0.5,
      shadowColor: 'blue',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0,
      },
      elevation: 4,
      backgroundColor: colors.modal,
      width: '90%',
    },
    culture: {
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between',
    },
    text: {
      margin: 5,
      fontSize: 17,
      fontFamily: 'KarlaMedium',
      color: colors.modalText,
    },
    logo: {
      justifyContent: 'center',
    },
    line: {
      borderTopWidth: 1,
      borderColor: '#bfbfbf',
      alignSelf: 'flex-end',
      width: '94%',
      marginTop: -10,
    },
  });
