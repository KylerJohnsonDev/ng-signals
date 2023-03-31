import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/components/button.component';
import { PokemonDetailComponent } from 'src/app/components/pokemon-detail.component';
import { PokemonStoreService } from './pokemon-store.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PokemonDetailComponent, FormsModule],
  providers: [PokemonStoreService],
  template: `
    <app-pokemon-detail
      class="m-4"
      *ngIf="pokemonStore.pokemon() as pokemon"
      [pokemon]="pokemon"
      [pokeImageUrl]="pokemonStore.pokemonImageUrl()"
    ></app-pokemon-detail>
    <section class="flex flex-row mb-4 w-72 gap-2 mx-4">
      <app-button
        text="Previous"
        (click)="
          pokemonStore.setPokemonNumber(pokemonStore.pokemonNumber() - 1)
        "
      ></app-button>
      <app-button
        text="Next"
        (click)="
          pokemonStore.setPokemonNumber(pokemonStore.pokemonNumber() + 1)
        "
      >
      </app-button>
      <app-button text="Reset" (click)="reset()"></app-button>
    </section>
    <section class="w-72 gap-2 flex flex-row m-4 items-baseline">
      <span class="w-16 text-lg">Go to:</span>
      <input
        class="app-input"
        type="number"
        [value]="pokemonStore.pokemonNumber()"
        (input)="onInput($event)"
      />
    </section>
  `,
})
export class PokemonComponent {
  constructor(public pokemonStore: PokemonStoreService) {}

  onInput(event: any): void {
    const input = event.target as HTMLInputElement;
    const num = Number(input.value);
    this.pokemonStore.setPokemonNumber(num);
  }

  reset(): void {
    this.pokemonStore.setPokemonNumber(1);
  }
}
