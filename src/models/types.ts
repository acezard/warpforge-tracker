// src/models/types.ts

export interface Warlord {
  warlordName: string;
  offWins: number;
  offLosses: number;
  defWins: number;
  defLosses: number;
}

export interface Faction {
  factionName: string;
  warlords: Warlord[];
}

export interface Deck {
  deckName: string;
  factions: Faction[];
}
