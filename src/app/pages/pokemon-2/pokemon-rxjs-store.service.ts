import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonRxJSStore {
  private readonly pokemonSpriteUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`;
  private readonly pokeApiUrl = `https://pokeapi.co/api/v2/pokemon`;

  private pokemonNumber = new BehaviorSubject<number>(1);
  public readonly pokemonNumber$ = this.pokemonNumber.asObservable();
  public readonly pokemon$ = this.pokemonNumber.pipe(
    switchMap((pokemonNumber) => this.fetchPokemon(pokemonNumber))
  );
  public readonly pokemonImageUrl$ = this.pokemonNumber.pipe(
    map((pokemonNumber) => `${this.pokemonSpriteUri}/${pokemonNumber}.png`)
  );

  constructor(private http: HttpClient) {}

  fetchPokemon(pokemonNumber: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeApiUrl}/${pokemonNumber}`);
  }

  setPokemonNumber(num: number): void {
    if (num < 1) return this.pokemonNumber.next(1);
    this.pokemonNumber.next(num);
  }
}
