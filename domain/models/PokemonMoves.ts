export interface ContestType {
  name: string;
  url: string;
}

export interface PokemonMove {
  id: number;
  name: string;
  accuracy: number | null;
  effect_chance: number | null;
  pp: number;
  priority: number;
  power: number | null;
  type: {
    name: string;
    url: string;
  };
  damage_class: {
    name: string;
    url: string;
  };
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  meta: {
    ailment: {
      name: string;
      url: string;
    };
    category: {
      name: string;
      url: string;
    };
  };
}

export interface PokemonMoveInList {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
  }[];
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: ContestType;
  version_group: ContestType;
}

export interface Meta {
  ailment: ContestType;
  category: ContestType;
  min_hits: null;
  max_hits: null;
  min_turns: null;
  max_turns: null;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

export interface Name {
  name: string;
  language: ContestType;
}
