export type Pokemon = {
    id: number;
    name: string;
    sprites?: string;
    image?: string;
    number?: number;
    url?: string;
}

export type PokemonDetails = {
    id: number;
    order: number;
    name: string;
    height: number;
    abilities: string[];
    spices: Species;
    types: Type[];
    weight: number;
    sprites: Sprite;
    stats: Stat[];
}

export type Species = {
    url: string;
}

export type Type = {
    slot: number;
    type: {
        name: string;
    }
}

export type Sprite = {
    front_default: string;
}

export type Stat = {
    base_stat: number;
    stat: {
        name: string;
    }
}