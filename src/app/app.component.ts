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
      <ul>
        <li>
          <a [routerLink]="['/counter']" routerLinkActive="router-link-active"
            >Counter</a
          >
        </li>
        <li>
          <a [routerLink]="['/counter-2']" routerLinkActive="router-link-active"
            >Counter 2</a
          >
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
