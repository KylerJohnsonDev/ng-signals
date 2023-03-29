import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pokemon } from '../pages/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  host: {
    class: 'border border-black rounded-md w-72 flex flex-col items-center p-4',
  },
  template: `
    <img [src]="pokeImageUrl" [alt]="pokemon?.name" width="200" height="200" />
    <h1 class="text-2xl capitalize">
      {{ pokemon?.name }}
    </h1>
  `,
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon | null;
  @Input() pokeImageUrl!: string | null;
}
