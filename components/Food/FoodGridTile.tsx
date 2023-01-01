import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'

import TouchableCmp from '../UI/TouchableBtn'

interface Props {
  title: string
  image: string
  onSelect: () => void
}

const { height } = Dimensions.get('window')

const FoodGridTile = (props: Props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={props.onSelect}>
        <Card style={styles.cardStyle}>
          <Card.Cover style={styles.cardCover} source={{ uri: props.image }} />
          <Card.Content style={{ height: '20%', backgroundColor: '#737373' }}>
            <Card.Title titleStyle={styles.title} title={props.title} />
          </Card.Content>
        </Card>
      </TouchableCmp>
    </View>
  )
}

export default FoodGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1 / 2,
    margin: 10,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: '#888',
    borderWidth: 0.5,
    backgroundColor: '#FFF',
    elevation: 4
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'KarlaBold',
    color: 'white'
  },
  cardStyle: {
    height: height * 0.2
  },
  cardCover: {
    flex: 1,
    height: '80%'
  }
})
