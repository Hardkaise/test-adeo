const inputTooMuchKeysInCountry = [
    {
        name: 'France',
        people: [],
        code: 'FR'
    }
]


const inputMissingKeyCountry = [
    {
        name: 'France'
    }
]


const inputNameIsNotStringCountry = [
    {
        name: 1,
        people: []
    }
]


const inputPeopleIsNotArrayCountry = [
    {
        name: 'France',
        people: 'toto'
    }
]



const inputPeopleElementNotObject = [
    {
        name: 'France',
        people: [
            'toto'
        ]
    }
]



const inputTooMuchKeysInPeople = [
    {
        name: 'France',
        people: [
            {
                name: 'Clément Nancelle',
                animals: [],
                age: 26
            }
        ],
    }
]


const inputMissingKeyPeople = [
    {
        name: 'France',
        people: [
            {
                name: 'Clément Nancelle'
            }
        ]
    }
]


const inputNameIsNotStringPeople = [
    {
        name: 'France',
        people: [
            {
                name: 1,
                animals: []
            }
        ]
    }
]


const inputAnimalsIsNotArrayPeople = [
    {
        name: 'France',
        people: [
            {
                name: 'Clément Nancelle',
                animals: 'toto'
            }
        ]
    }
];


const inputAnimalsNotObject = [
    {
        name: 'France',
        people: [
            {
                name: 'Clément Nancelle',
                animals: [
                    'Dog',
                    { name: 'Dog' }
                ]
            }
        ]
    }
];


const inputAnimalsTooMuchKeys = [
    {
        name: 'France',
        people: [
            {
                name: 'Clément Nancelle',
                animals: [
                    {
                        name: 'Dog',
                        age: 12
                    }
                ]
            }
        ]
    }
]


const inputAnimalsMissingNameKey = [
    {
        name: 'France',
        people: [
            {
                name: 'Clément Nancelle',
                animals: [
                    { }
                ]
            }
        ]
    }
]


const inputAnimalsNameKeyNotString = [
    {
        name: 'France',
        people: [
            {
                name: 'Clément Nancelle',
                animals: [
                    { name: 17 }
                ]
            }
        ]
    }
]



module.exports = {
    inputTooMuchKeysInCountry,
    inputMissingKeyCountry,
    inputNameIsNotStringCountry,
    inputPeopleIsNotArrayCountry,

    inputPeopleElementNotObject,
    inputMissingKeyPeople,
    inputTooMuchKeysInPeople,
    inputNameIsNotStringPeople,
    inputAnimalsIsNotArrayPeople,

    inputAnimalsNotObject,
    inputAnimalsTooMuchKeys,
    inputAnimalsMissingNameKey,
    inputAnimalsNameKeyNotString
}