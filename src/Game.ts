export enum DominionCardType {
    Point, Money, Action, Defense, Attack, Grudge
}

export type DominionCard = {
    name: string,
    type: DominionCardType,
    cost: number
}

export const basisspiel: DominionCard[] = [
    {
        name: "Burggraben",
        type: DominionCardType.Defense,
        cost: 2,
    },
    {
        name: "Kapelle",
        type: DominionCardType.Action,
        cost: 2,
    },
    {
        name: "Keller",
        type: DominionCardType.Action,
        cost: 2,
    },
    {
        name: "Dorf",
        type: DominionCardType.Action,
        cost: 3
    },
    {
        name: "Holzfäller",
        type: DominionCardType.Action,
        cost: 3
    },
    {
        name: "Kanzler",
        type: DominionCardType.Action,
        cost: 3
    },
    {
        name: "Werkstatt",
        type: DominionCardType.Action,
        cost: 3
    },
    {
        name: "Bürokrat",
        type: DominionCardType.Action,
        cost: 4
    },
    {
        name: "Dieb",
        type: DominionCardType.Attack,
        cost: 4
    },
    {
        name: "Festmahl",
        type: DominionCardType.Action,
        cost: 4
    },
    {
        name: "Gärten",
        type: DominionCardType.Point,
        cost: 4
    },
    {
        name: "Geldverleiher",
        type: DominionCardType.Action,
        cost: 4
    },
    {
        name: "Miliz",
        type: DominionCardType.Attack,
        cost: 4
    },
    {
        name: "Schmiede",
        type: DominionCardType.Action,
        cost: 4
    },
    {
        name: "Spion",
        type: DominionCardType.Attack,
        cost: 4
    },
    {
        name: "Thronsaal",
        type: DominionCardType.Action,
        cost: 4
    },
    {
        name: "Umbau",
        type: DominionCardType.Action,
        cost: 4
    },
    {
        name: "Bibliothek",
        type: DominionCardType.Action,
        cost: 5
    },
    {
        name: "Hexe",
        type: DominionCardType.Attack,
        cost: 5
    },
    {
        name: "Jahrmarkt",
        type: DominionCardType.Action,
        cost: 5
    },
    {
        name: "Laboratorium",
        type: DominionCardType.Action,
        cost: 5
    },
    {
        name: "Markt",
        type: DominionCardType.Action,
        cost: 5
    },
    {
        name: "Mine",
        type: DominionCardType.Action,
        cost: 5
    },
    {
        name: "Ratsversammlung",
        type: DominionCardType.Action,
        cost: 5
    },
    {
        name: "Abenteuer",
        type: DominionCardType.Action,
        cost: 6
    }]

export const intrige: DominionCard[] = [
    {
        name: "Burghof",
        type: DominionCardType.Action,
        cost: 2
    },
    {
        name: "Handlanger",
        type: DominionCardType.Action,
        cost: 2
    },
    {
        name: "Armenviertel",
        type: DominionCardType.Action,
        cost: 3
    },
]