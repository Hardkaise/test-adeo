const expectedResultRyTestFilter = [
    {
        name: "Uzuzozne",
        people: [
            {
                name: "Lillie Abbott",
                animals: [
                    {
                        "name": "John Dory"
                    }
                ]
            }
        ]
    },
    {
        name: "Satanwi",
        people: [
            {
                name: "Anthony Bruno",
                animals: [
                    {
                        name: "Oryx"
                    }
                ]
            }
        ]
    }
]


const expectedResultRyTestFilterCount = [
    {
        name: "Uzuzozne [1]",
        people: [
            {
                name: "Lillie Abbott [1]",
                animals: [
                    {
                        "name": "John Dory"
                    }
                ]
            }
        ]
    },
    {
        name: "Satanwi [1]",
        people: [
            {
                name: "Anthony Bruno [1]",
                animals: [
                    {
                        name: "Oryx"
                    }
                ]
            }
        ]
    }
];

module.exports = {
    expectedResultRyTestFilter,
    expectedResultRyTestFilterCount
}