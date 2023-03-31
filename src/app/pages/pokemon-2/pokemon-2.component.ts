import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button.component';
import { PokemonDetailComponent } from 'src/app/components/pokemon-detail.component';
import { PokemonRxJSStore } from './pokemon-rxjs-store.service';

@Component({
  selector: 'app-pokemon-2',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PokemonDetailComponent],
  providers: [PokemonRxJSStore],
  template: `
    <app-pokemon-detail
      class="m-4"
      [pokemon]="pokemonStore.pokemon$ | async"
      [pokeImageUrl]="pokemonStore.pokemonImageUrl$ | async"
    ></app-pokemon-detail>
    <section
      class="flex flex-row mb-4 w-72 gap-2 mx-4"
      *ngIf="pokemonStore.pokemonNumber$ | async as pokeNumber"
    >
      <app-button
        text="Previous"
        (click)="pokemonStore.setPokemonNumber(pokeNumber - 1)"
      >
      </app-button>
      <app-button
        text="Next"
        (click)="pokemonStore.setPokemonNumber(pokeNumber + 1)"
      >
      </app-button>
      <app-button
        text="Reset"
        (click)="pokemonStore.setPokemonNumber(1)"
      ></app-button>
    </section>
    <section
      class="w-72 gap-2 flex flex-row m-4 items-baseline"
      *ngIf="pokemonStore.pokemonNumber$ | async as pokemonNumber"
    >
      <span class="w-16 text-lg">Go to:</span>
      <input
        class="app-input"
        type="number"
        [value]="pokemonNumber"
        (input)="onInput($event)"
      />
    </section>
  `,
})
export class Pokemon2Component {
  constructor(public pokemonStore: PokemonRxJSStore) {}

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const num = Number(input.value);
    this.pokemonStore.setPokemonNumber(num);
  }
}
