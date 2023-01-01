export interface Musician {
  id: string
  name: string
  youtubeLink: string
}

export interface MusicianItem {
  item: Musician
}

export interface General {
  id: string
  artists: Musician[]
}

export const musicians: General[] = [
  {
    id: 'A',
    artists: [
      {
        id: '1',
        name: 'Adekunle Gold',
        youtubeLink: 'https://www.youtube.com/channel/UC3RP_IbJrcP8cIwOC7wRj5g'
      }, {
        id: '2',
        name: 'Ajebutter',
        youtubeLink: 'https://www.youtube.com/channel/UCo1udD5pFZ2y__EdrNv5mlw'
      }, {
        id: '3',
        name: 'Alpha P',
        youtubeLink: 'https://www.youtube.com/c/AlphaP/featured'
      }, {
        id: '4',
        name: 'Asake',
        youtubeLink: 'https://www.youtube.com/channel/UCCjfbcoH0ZYT0r1jScDHJMg'
      }
    ]
  }, {
    id: 'B',
    artists: [
      {
        id: '5',
        name: 'Bella Shmurda',
        youtubeLink: 'https://www.youtube.com/channel/UCJrWgnKkJMqIbW4ipOYyrt'
      }, {
        id: '6',
        name: 'Blaqbonez',
        youtubeLink: 'https://www.youtube.com/channel/UC0iZ_gqCk22K0jWscf75lhg'
      }, {
        id: '7',
        name: 'BNXN',
        youtubeLink: 'https://www.youtube.com/channel/UCGCmhbMffOb80CIF8ACTfBA'
      }, {
        id: '8',
        name: 'Burnaboy',
        youtubeLink: 'https://www.youtube.com/channel/UCEzDdNqNkT-7rSfSGSr1hWg'
      }
    ]
  }, {
    id: 'C',
    artists: [
      {
        id: '9',
        name: 'CDQ',
        youtubeLink: ''
      }, {
        id: '10',
        name: 'Cheque',
        youtubeLink: ''
      }, {
        id: '11',
        name: 'Chinko Ekun',
        youtubeLink: ''
      }, {
        id: '12',
        name: 'Ckay',
        youtubeLink: ''
      }
    ]
  }, {
    id: 'D',
    artists: [
      {
        id: '13',
        name: 'Dai Verse',
        youtubeLink: ''
      }, {
        id: '14',
        name: 'Darey',
        youtubeLink: ''
      }, {
        id: '15',
        name: 'Davido',
        youtubeLink: ''
      }, {
        id: '16',
        name: 'Dr SID',
        youtubeLink: ''
      }, {
        id: '17',
        name: 'Dotman',
        youtubeLink: ''
      }
    ]
  }

]

export interface Playlist {
  id: string
  link: string
}

export interface PlaylistItem {
  item: Playlist
}

export const playlists: Playlist[] = [
  {
    id: 'Live',
    link: ''
  }, {
    id: 'Oldies',
    link: ''
  }, {
    id: 'Afrobeats',
    link: ''
  }, {
    id: 'Diaspora',
    link: ''
  }, {
    id: 'Groups',
    link: ''
  }, {
    id: 'Local',
    link: ''
  }, {
    id: 'Gospel',
    link: ''
  }
]

export interface Year {
  id: string
  link: string
}

export interface YearItem {
  item: Year
}

export const years: Playlist[] = [
  {
    id: '2010',
    link: ''
  }, {
    id: '2011',
    link: ''
  }, {
    id: '2012',
    link: ''
  }, {
    id: '2013',
    link: ''
  }, {
    id: '2014',
    link: ''
  }, {
    id: '2015',
    link: ''
  }, {
    id: '2016',
    link: ''
  }, {
    id: '2017',
    link: ''
  }, {
    id: '2018',
    link: ''
  }, {
    id: '2019',
    link: ''
  }, {
    id: '2020',
    link: ''
  }, {
    id: '2021',
    link: ''
  }, {
    id: '2022',
    link: ''
  }
]
