export interface Details {
  id: string;
  englishName: string;
  cultureName: string;
  audio: string;
}

export interface Culture {
  id: string;
  name: string;
  details: Details[];
}

export interface CultureListItem {
  item: Culture;
}

export interface CultureDetailItem {
  item: Details;
}

const nationalities: Details[] = [
  {
    id: '1',
    englishName: 'American',
    cultureName: 'Amerika',
    audio: '',
  },
  {
    id: '2',
    englishName: 'British',
    cultureName: 'Oyinbo',
    audio: '',
  },
];

const feelings: Details[] = [
  {
    id: '2',
    englishName: 'I am angry',
    cultureName: 'Inu bimi',
    audio: '',
  },
];

const body: Details[] = [
  {
    id: '3',
    englishName: 'Legs',
    cultureName: 'Ese',
    audio: '',
  },
];

const colors: Details[] = [
  {
    id: '4',
    englishName: 'Red',
    cultureName: 'Pupa',
    audio: '',
  },
];

const greetings: Details[] = [
  {
    id: '5',
    englishName: 'Good morning',
    cultureName: 'Ekaaro',
    audio: '',
  },
];

const firstWords: Details[] = [
  {
    id: '6',
    englishName: 'Good morning',
    cultureName: 'Ekaaro',
    audio: '',
  },
];

export const cultures: Culture[] = [
  {
    id: '1',
    name: 'Nationalites',
    details: nationalities,
  },
  {
    id: '2',
    name: 'Feelings',
    details: feelings,
  },
  {
    id: '3',
    name: 'Colors',
    details: colors,
  },
  {
    id: '4',
    name: 'Body',
    details: body,
  },
  {
    id: '5',
    name: 'Greetings',
    details: greetings,
  },
  {
    id: '6',
    name: 'First words',
    details: firstWords,
  },
];
