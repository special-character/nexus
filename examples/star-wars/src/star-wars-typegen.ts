/**
 * This file is automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 * 
 * For better typings, you should provide configuration for how to lookup 
 * the types. See the documentation for "typegenAutoConfig"
 */
import * as swapi from "./types/backingTypes"

declare global {
  interface GraphQLNexusGen extends GraphQLNexusGenTypes {}
}

// Maybe Promise
export type MaybePromise<T> = T | PromiseLike<T>;

// Maybe Promise List
export type MaybePromiseList<T> = Array<MaybePromise<T>>;

// Maybe Thunk
export type MaybeThunk<T> = T | (() => T);

// Maybe Thunk, with args
export type MaybeThunkArgs<T, A> = T | ((args?: A) => T);

export type QueryDroidReturnType = Droid_ReturnType;

export interface QueryDroidArgs {
  id: string;
}

export type QueryHeroReturnType = Character_ReturnType;

export interface QueryHeroArgs {
  episode?: null | Episode;
}

export type QueryHumanReturnType = Human_ReturnType;

export interface QueryHumanArgs {
  id: string;
}

export type Query_ReturnType = {};

export type DroidAppearsInReturnType = MaybePromiseList<Episode>;

export interface DroidAppearsInArgs extends CharacterAppearsInArgs {}

export type DroidFriendsReturnType = MaybePromiseList<Character_ReturnType>;

export type DroidIdReturnType = string;

export type DroidNameReturnType = string;

export type DroidPrimaryFunctionReturnType = string;

export type DroidRootType = swapi.Droid;

export type Droid_ReturnType = swapi.Droid

export type CharacterAppearsInReturnType = MaybePromiseList<Episode>;

export interface CharacterAppearsInArgs {
  id: string;
}

export type CharacterFriendsReturnType = MaybePromiseList<Character_ReturnType>;

export type CharacterIdReturnType = string;

export type CharacterNameReturnType = string;

export type Episode = 5 | 6 | 4;

export type HumanAppearsInReturnType = MaybePromiseList<Episode>;

export interface HumanAppearsInArgs extends CharacterAppearsInArgs {}

export type HumanFriendsReturnType = MaybePromiseList<Character_ReturnType>;

export type HumanHomePlanetReturnType = null | string;

export type HumanIdReturnType = string;

export type HumanNameReturnType = string;

export type HumanRootType = swapi.Human;

export type Human_ReturnType = swapi.Human

export type MoreEpisodes = 5 | 6 | 4 | "OTHER";

export type CharacterRootType = swapi.Character;

export type Character_ReturnType = swapi.Character;

export interface GraphQLNexusGenArgTypes {
  Query: {
    droid: QueryDroidArgs;
    hero: QueryHeroArgs;
    human: QueryHumanArgs;
  };
  Droid: {
    appearsIn: DroidAppearsInArgs;
  };
  Character: {
    appearsIn: CharacterAppearsInArgs;
  };
  Human: {
    appearsIn: HumanAppearsInArgs;
  };
}

export interface GraphQLNexusGenRootTypes {
  Character: CharacterRootType;
  Query: {};
  Droid: DroidRootType;
  Human: HumanRootType;
}

export interface GraphQLNexusGenReturnTypes {
  Query: {
    droid: QueryDroidReturnType;
    hero: QueryHeroReturnType;
    human: QueryHumanReturnType;
  };
  Droid: {
    appearsIn: DroidAppearsInReturnType;
    friends: DroidFriendsReturnType;
    id: DroidIdReturnType;
    name: DroidNameReturnType;
    primaryFunction: DroidPrimaryFunctionReturnType;
  };
  Character: {
    appearsIn: CharacterAppearsInReturnType;
    friends: CharacterFriendsReturnType;
    id: CharacterIdReturnType;
    name: CharacterNameReturnType;
  };
  Human: {
    appearsIn: HumanAppearsInReturnType;
    friends: HumanFriendsReturnType;
    homePlanet: HumanHomePlanetReturnType;
    id: HumanIdReturnType;
    name: HumanNameReturnType;
  };
}

export interface GraphQLNexusGenTypes {
  argTypes: GraphQLNexusGenArgTypes;
  backingTypes: GraphQLNexusGenRootTypes;
  returnTypes: GraphQLNexusGenReturnTypes;
  context: swapi.ContextType;
  enums: {
    Episode: Episode;
    MoreEpisodes: MoreEpisodes;
  };
  objects: {
    Query: {};
    Droid: DroidRootType;
    Human: HumanRootType;
  };
  interfaces: {
    Character: "Droid" | "Human";
  };
  unions: {};
  scalars: {
    String: any;
    ID: any;
    Boolean: any;
  };
  inputObjects: {};
  allInputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['inputObjects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
  allOutputTypes: 
    | Extract<keyof GraphQLNexusGenTypes['objects'], string>
    | Extract<keyof GraphQLNexusGenTypes['enums'], string>
    | Extract<keyof GraphQLNexusGenTypes['unions'], string>
    | Extract<keyof GraphQLNexusGenTypes['interfaces'], string>
    | Extract<keyof GraphQLNexusGenTypes['scalars'], string>;
}

export type Gen = GraphQLNexusGenTypes;
