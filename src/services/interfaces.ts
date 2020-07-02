
export default interface IPokemon {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: IPokemonAbility,
    forms: INamedApiResource,
    held_items: IPokemonHeldItem,
    location_area_encounters: string,
    moves: IPokemonMove,
    sprites: IPokemonSprites,
    species: INamedApiResource,
    stats: IPokemonStat,
    types: [{
        type: {
            name:string
        }
    }] 
}

interface IPokemonSprites {
    front_default: string,
    front_shiny: string,
    front_female: string,
    front_shiny_female: string,
    back_default: string,
    back_shiny: string,
    back_female: string,
    back_shiny_female: string
}

interface INamedApiResource {
    name: string,
    url: string
}

interface IPokemonStat {
    stat: INamedApiResource,
    effort: number,
    base_stat: number,
}

interface IPokemonMoveVersion {
    move_learn_method: INamedApiResource,
    version_group: INamedApiResource,
    level_learned_at: number,
}

interface IPokemonMove {
    move: INamedApiResource,
    version_group_details: IPokemonMoveVersion,
}

interface IPokemonHeldItemVersion {
    version: INamedApiResource,
    rarity: number,
}

interface IPokemonHeldItem {
    item: INamedApiResource,
    version_details: IPokemonHeldItemVersion,
}

interface IPokemonAbility {
    is_hidden: boolean,
    slot: number,
    ability: INamedApiResource,
}


