import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button.component';
import { PokemonDetailComponent } from 'src/app/components/pokemon-detail.component';
import { PokemonStoreService } from './pokemon-store.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, ButtonComponent, PokemonDetailComponent],
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
      <app-button
        text="Reset"
        (click)="pokemonStore.setPokemonNumber(1)"
      ></app-button>
    </section>
  `,
})
export class PokemonComponent {
  constructor(public pokemonStore: PokemonStoreService) {}
}
