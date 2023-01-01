import { StyleSheet, Image, Dimensions, View } from 'react-native';
import React from 'react';

interface Props {
  uri: string;
}

const { height } = Dimensions.get('window');

const BigImage = (props: Props) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.imageStyle} source={{ uri: props.uri }} />
    </View>
  );
};

export default BigImage;

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: height * 0.32,
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
});
