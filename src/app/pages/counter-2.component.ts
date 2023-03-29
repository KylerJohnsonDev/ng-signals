import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterStoreService } from '../stores/counter-store.service';

interface CounterState {
  count: number;
  logs: string[];
}

@Component({
  selector: 'app-counter-2',
  standalone: true,
  imports: [CommonModule],
  providers: [CounterStoreService],
  template: `
    <main class="flex flex-col p-4 w-96">
      <h1 class="text-5xl mb-4 text-center">{{ counterStore.count() }}</h1>
      <section class="flex flex-row mb-4">
        <button
          class="bg-gray-300 grow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          type="button"
          (click)="counterStore.increment()"
        >
          Increment
        </button>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
          type="button"
          (click)="counterStore.decrement()"
        >
          Decrement
        </button>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          type="button"
          (click)="counterStore.reset()"
        >
          Reset
        </button>
      </section>

      <section class="mb-4">
        <p>{{ counterStore.evenOrOdd() }}</p>
        <p>{{ counterStore.primeOrComposite() }}</p>
      </section>

      <section class="border border-black rounded-md h-36 overflow-auto p-4">
        <div *ngIf="counterStore.logs().length > 0; else nologs">
          <p *ngFor="let log of counterStore.logs()">{{ log }}</p>
        </div>
        <ng-template #nologs>
          <p>No data</p>
        </ng-template>
      </section>
    </main>
  `,
  styles: [],
})
export class Counter2Component {
  constructor(public counterStore: CounterStoreService) {}
}
