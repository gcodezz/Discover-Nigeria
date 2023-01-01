import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';

import TouchableCmp from '../UI/TouchableBtn';

interface Props {
  title: string;
  onSelect: () => void;
  flex: number;
}

const { height } = Dimensions.get('window');

const GridTile = (props: Props) => {
  return (
    <View style={{ ...styles.gridItem, flex: props.flex }}>
      <TouchableCmp onPress={props.onSelect}>
        <Card style={styles.titleContainer}>
          <Card.Title titleStyle={styles.title} titleNumberOfLines={1} title={props.title} />
        </Card>
      </TouchableCmp>
    </View>
  );
};

export default GridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: '#888',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    elevation: 4,
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'KarlaMedium',
  },
  titleContainer: {
    backgroundColor: '#737373',
  },
  card: {
    height: height * 0.2,
  },
});
