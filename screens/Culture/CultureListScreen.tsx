import { StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import { cultures, Culture, CultureListItem } from '../../data/culture';
import GridTile from '../../components/UI/GridTile';
import Icon from '../../components/UI/Icon';
import { CultureListScreenProps } from '../../types/props';
import TouchableCmp from '../../components/UI/TouchableBtn';

const CultureListScreen = ({ navigation }: CultureListScreenProps) => {
  const [cultureData, setCulture] = useState<Culture[]>([]);

  useEffect(() => {
    setCulture(cultures);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableCmp style={{ paddingLeft: 5 }} onPress={() => navigation.toggleDrawer()}>
          <Icon iconName='menu' />
        </TouchableCmp>
      ),
    });
  }, [navigation]);

  const renderGridItem = ({ item }: CultureListItem) => {
    return (
      <GridTile
        flex={1 / 2}
        title={item.name}
        onSelect={() => {
          navigation.navigate('CultureDetails', {
            title: item.name,
            details: item.details,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={cultureData}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={({ id }) => id}
      style={styles.main}
    />
  );
};

export default CultureListScreen;

const styles = StyleSheet.create({
  main: {},
});
