import { 
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableNativeFeedback
 } from 'react-native';
 
import React from 'react';

type Props = {
    title: string
    image: string
    onSelect: () => void
};

const FoodGridTile = (props: Props) => {
  const TouchableCmp: React.ElementType = 
    Platform.OS === 'android' && Platform.Version >= 21 ? 
      TouchableNativeFeedback 
      : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableCmp onPress={props.onSelect} style={styles.shadow}>
        <ImageBackground
          source={{ uri: props.image}}
          style={styles.bgImage}
          resizeMode="cover"
        >
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableCmp>
    </View>
  )
}

export default FoodGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1/2,
    margin: 10,
    height: 190,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },

    overflow: 'hidden',
    borderRadius: 10,
    borderColor: '#888',
    // borderWidth: 0.5,
    backgroundColor: '#FFF',
    elevation: 4
  },
  shadow: {
    // flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#888',
    borderWidth: 0.3,
    backgroundColor: '#FFF',
    elevation: 4
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'KarlaBold'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
  },
});
