import { StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react'
import { useTheme } from '@react-navigation/native'

import { years, YearItem, Year } from '../../data/music'
import GridTile from '../../components/UI/GridTile'

const YearsScreen = () => {
  const [yearData, setYearData] = useState<Year[]>([{
    id: '',
    link: ''
  }])

  const { colors } = useTheme()
  const styles = makeStyles(colors)

  useEffect(() => {
    setYearData(years)
  }, [])

  const renderGridItem = ({ item }: YearItem ) => {
    return (
      <GridTile
        flex={1/3}
        title={item.id}
        onSelect={() => {
          
        }}
      />
    )
  }
  return (
    <FlatList
      data={yearData}
      renderItem={renderGridItem}
      numColumns={3}
      keyExtractor={({ id }) => id}
      style={styles.main}
    />
  );
};

export default YearsScreen;

const makeStyles = (colors: any) => StyleSheet.create({
  playlistLabel: {
    color: colors.text,
    fontSize: 20,
    fontFamily: 'KarlaMedium'
  },
  main: {
       
  }
})
