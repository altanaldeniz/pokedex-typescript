export type Pokemon = {
  image: string;
  name: string;
  url: string;
};

export type Ability = {
  name: string;
};

export type Type = {
  type: {
    name: string;
  };
};

export type PokemonDetail = {
  abilities: Ability[];
  base_experience: number;
  height: number;
  image: string;
  id: number;
  name: string;
  types: Type[];
  weight: number;
};
