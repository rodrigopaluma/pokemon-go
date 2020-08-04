export class Pokemons {
    ability: IAbility;
    artist: string;
    attacks: IAttack[];
    convertedRetreatCost: number;
    evolvesFrom: string;
    hp: string;
    id: string;
    imageUrl: string;
    imageUrlHiRes: string;
    name: string;
    nationalPokedexNumber: number;
    number: string;
    rarity: string;
    resistances: IResistance[];
    retreatCost: string[];
    series: string;
    set: string;
    setCode: string;
    subtype: string;
    supertype: string;
    text: string[];
    types: string[];
    weaknesses: IWeakness[];
}

export class IAbility {
    name: string;
    text: string;
    type: string;
}

export class IAttack {
    cost: string[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: string;
}

export class IResistance {
    type: string;
    value: string;
}

export class IWeakness {
    type: string;
    value: string;
}
