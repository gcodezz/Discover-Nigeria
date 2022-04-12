import { StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import { playlists, Playlist, PlaylistItem } from '../../data/music'
import GridTile from '../../components/UI/GridTile'

const PlaylistsScreen = () => {
  const [playlistData, setPlaylist] = useState<Playlist[]>([{
    id: '',
    link: ''
  }])

  useEffect(() => {
    setPlaylist(playlists)
  }, [])

  const renderGridItem = ({ item }: PlaylistItem ) => {
    return (
      <GridTile
        flex={1/2}
        title={item.id}
        onSelect={() => {
          
        }}
      />
    )
  }

  return (
    <FlatList
      data={playlistData}
      renderItem={renderGridItem}
      numColumns={2}
      keyExtractor={({ id }) => id}
    />
  )
}

export default PlaylistsScreen

const makeStyles = (colors: any) => StyleSheet.create({
  playlistLabel: {
    color: colors.text,
    fontSize: 20,
    fontFamily: 'KarlaMedium'
  }
})
