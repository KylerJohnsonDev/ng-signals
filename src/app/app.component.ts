import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="flex p-2 bg-red-500 items-center text-white">
      <a class="text-xl" routerLink="/">Angular Signals Playground</a>
      <div class="grow"></div>
      <ul class="flex">
        <li class="mr-2">
          <a [routerLink]="['/counter']" routerLinkActive="router-link-active"
            >Counter</a
          >
        </li>
        <li class="mr-2">
          <a [routerLink]="['/counter-2']" routerLinkActive="router-link-active"
            >Counter 2</a
          >
        </li>
        <li class="mr-2">
          <a [routerLink]="['/pokemon']" routerLinkActive="router-link-active"
            >Pokemon</a
          >
        </li>
        <li>
          <a [routerLink]="['/pokemon-2']" routerLinkActive="router-link-active"
            >Pokemon 2</a
          >
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
