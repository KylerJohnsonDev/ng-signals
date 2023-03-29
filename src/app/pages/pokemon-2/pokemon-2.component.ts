import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonRxJSStore } from './pokemon-rxjs-store.service';

@Component({
  selector: 'app-pokemon-2',
  standalone: true,
  imports: [CommonModule],
  providers: [PokemonRxJSStore],
  template: `
    <section
      class="border border-black rounded-md w-72 flex flex-col items-center p-4 m-4"
      *ngIf="pokemonStore.pokemon$ | async as pokemon"
    >
      <img
        [src]="pokemonStore.pokemonImageUrl$ | async"
        [alt]="pokemon.name"
        width="200"
        height="200"
      />
      <h1 class="text-2xl capitalize">
        {{ pokemon.name }}
      </h1>
    </section>
    <section
      class="flex flex-row mb-4 w-72"
      *ngIf="pokemonStore.pokemonNumber$ | async as pokeNumber"
    >
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
        type="button"
        (click)="pokemonStore.setPokemonNumber(pokeNumber - 1)"
      >
        Previous
      </button>
      <button
        class="bg-gray-300 grow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        type="button"
        (click)="pokemonStore.setPokemonNumber(pokeNumber + 1)"
      >
        Next
      </button>
      <button
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        type="button"
        (click)="pokemonStore.setPokemonNumber(1)"
      >
        Reset
      </button>
    </section>
  `,
})
export class Pokemon2Component {
  constructor(public pokemonStore: PokemonRxJSStore) {}
}
