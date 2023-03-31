import { Pipe, PipeTransform } from '@angular/core';
import { Type } from './pages/pokemon/pokemon.model';

const pokemonTypeColorsMap = new Map([
  ['normal', { type: 'Normal', color: '#A8A77A' }],
  ['fire', { type: 'Fire', color: '#EE8130' }],
  ['water', { type: 'Water', color: '#6390F0' }],
  ['electric', { type: 'Electric', color: '#F7D02C' }],
  ['grass', { type: 'Grass', color: '#7AC74C' }],
  ['ice', { type: 'Ice', color: '#96D9D6' }],
  ['fighting', { type: 'Fighting', color: '#C22E28' }],
  ['poison', { type: 'Poison', color: '#A33EA1' }],
  ['ground', { type: 'Ground', color: '#E2BF65' }],
  ['flying', { type: 'Flying', color: '#A98FF3' }],
  ['psychic', { type: 'Psychic', color: '#F95587' }],
  ['bug', { type: 'Bug', color: '#A6B91A' }],
  ['rock', { type: 'Rock', color: '#B6A136' }],
  ['ghost', { type: 'Ghost', color: '#735797' }],
  ['dragon', { type: 'Dragon', color: '#6F35FC' }],
  ['dark', { type: 'Dark', color: '#705746' }],
  ['steel', { type: 'Steel', color: '#B7B7CE' }],
  ['fairy', { type: 'Fairy', color: '#D685AD' }],
]);

@Pipe({
  name: `pokemonTypeLookup`,
  standalone: true,
})
export class PokemonTypeLookupPipe implements PipeTransform {
  transform(type: Type | null | undefined) {
    if (!type?.type.name) return { type: 'Uknown', color: '#A8A77A' };
    return pokemonTypeColorsMap.get(type?.type.name);
  }
}
