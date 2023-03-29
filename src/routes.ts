import { Routes } from '@angular/router';
import { Counter2Component } from './app/pages/counter-2.component';
import { CounterComponent } from './app/pages/counter.component';
import { LandingComponent } from './app/pages/landing.component';
import { Pokemon2Component } from './app/pages/pokemon-2/pokemon-2.component';
import { PokemonComponent } from './app/pages/pokemon/pokemon.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'counter-2', component: Counter2Component },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokemon-2', component: Pokemon2Component },
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
