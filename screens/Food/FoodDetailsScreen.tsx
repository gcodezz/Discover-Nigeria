import { 
  StyleSheet,
  Text, 
  View, 
  Image, 
  ScrollView 
} from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useTheme } from '@react-navigation/native'

import { FoodDetailsScreenProps } from '../../types/props'
import { foods, Food } from '../../data/foods'
import Icon from '../../components/UI/Logo'

const FoodDetailsScreen = ({ route, navigation}: FoodDetailsScreenProps) => {
  const foodId: string = route.params.id
  const title: string = route.params.title
  const selectedFood : Food | undefined = foods.find(food => food.id == foodId)

  const { colors } = useTheme()
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    })
  }, [navigation])

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <View style={{ marginHorizontal: '5%' }}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.imageStyle}
            source={{ uri: selectedFood!.image}}
          />
        </View>
        <Text style={{...styles.textStyle, color: colors.text }}>Ingredients</Text>
        {selectedFood?.ingredients.map((ing, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Icon iconName="dot-single" />
            <Text style={{ ...styles.miniText, color: colors.text }}>{ing}</Text>
          </View>
        ))}
        <Text style={{...styles.textStyle, color: colors.text }}>Directions</Text>
        {selectedFood?.directions.map((step, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Icon iconName="dot-single" />
            <Text style={{ ...styles.miniText, color: colors.text, marginBottom: 5}}>{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default FoodDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white'
  },
  imageStyle: {
    width: '100%',
    height: 300,
    alignSelf: 'center'
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  textStyle: {
    marginVertical: 10,
    fontFamily: 'KarlaBold',
    fontSize: 22
  },
  miniText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'KarlaRegular',
    marginBottom: 2,
    flexWrap: 'wrap'
  }
});
