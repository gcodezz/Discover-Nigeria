export interface General {
    id: string,
    name: string,
    details: [{
        englishName: string,
        cultureName: string,
        audio: string
    }]
}

const nationalities: General[] = [
    {
        id: '1',
        name: 'Nationalities',
        details: [
            {
                englishName: 'American',
                cultureName: 'Mumerika',
                audio: ''
            },
        ]
    }
]

const feelings: General[] = [
    {
        id: '1',
        name: 'Feelings',
        details: [
            {
                englishName: 'I am angry',
                cultureName: 'Inu bimi',
                audio: ''
            },
        ]
    }
]

const body: General[] = [
    {
        id: '1',
        name: 'Body',
        details: [
            {
                englishName: 'Legs',
                cultureName: 'Ese',
                audio: ''
            },
        ]
    }
]
const colors: General[] = [
    {
        id: '1',
        name: 'Colors',
        details: [
            {
                englishName: 'Red',
                cultureName: 'Pupa',
                audio: ''
            },
        ]
    }
]

const greetings: General[] = [
    {
        id: '1',
        name: 'Greetings',
        details: [
            {
                englishName: 'Good morning',
                cultureName: 'Ekaaro',
                audio: ''
            },
        ]
    }
]

const firstWords: General[] = [
    {
        id: '1',
        name: 'First Words',
        details: [
            {
                englishName: 'Good morning',
                cultureName: 'Ekaaro',
                audio: ''
            },
        ]
    }
]


export interface CultureItem {
    id: string
    name: string
    details: General[]
}

export interface Item {
    item: CultureItem
}

export const cultures: CultureItem[] = [ 
    { 
        id: '1',
        name: 'Nationalites',
        details: nationalities 
    },
    { 
        id: '2',
        name: 'Feelings',
        details: feelings 
    },
    { 
        id: '3',
        name: 'Colors',
        details: colors 
    }, 
    {
        id: '4',
        name: 'Body',
        details: body 
    },
    {
        id: '5',
        name: 'Greetings',
        details: greetings 
    },
    {
        id: '6',
        name: 'First words',
        details: firstWords 
    }
]