import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="flex flex-col items-center h-full mt-10">
      <img class="h-40 mb-3" src="./assets/angular-logo.png" />
      <h1 class="text-xl">
        Angular Signals: Fine-grained reactivity of the future
      </h1>
    </main>
  `,
})
export class LandingComponent {}
