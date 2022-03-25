import { StyleSheet, Text, View, FlatList, Linking } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useTheme } from '@react-navigation/native'

import { musicians, General, MusicianItem } from '../../data/music'
import GridTile from '../../components/UI/GridTile'

const ArtistsScreen = () => {
  const [musiciansData, setMusicians] = useState<General[]>([{
    id: '',
    artists: []
  }])

  const { colors } = useTheme()
  const styles = makeStyles(colors)

  useEffect(() => {
    setMusicians(musicians)
  }, [])

  const renderGridItem = ({ item }: MusicianItem) => {
    return (
      <GridTile 
          flex={1/2}
          morePadding={true}
          title={item.name}
          onSelect={() => {
            Linking.openURL(item.youtubeLink)
          }}
      />
    )
  }
  
  return (
    <FlatList 
      data={musiciansData}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item }) => (
        <>
          <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            <Text style={styles.artistLabel}>{item.id}</Text>
          </View>
          <FlatList 
            data={item.artists}
            renderItem={renderGridItem}
            numColumns={2}
            keyExtractor={({ id }) => id}
            style={styles.main}
          />
        </>
      )}
    />
  );
};

export default ArtistsScreen;

const makeStyles = (colors: any) => StyleSheet.create({
  artistLabel: {
    color: colors.text,
    fontSize: 25,
    fontFamily: 'KarlaBold'
  },
  main: {
       
  }
})
