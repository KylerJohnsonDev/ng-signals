import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import {
  checkPrimeOrComposite,
  formatEvenOrOdd,
  formatMessage,
  MessageTypes,
} from '../number-utils';

interface CounterState {
  count: number;
  logs: string[];
}

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="flex flex-col p-4 w-1/3">
      <h1 class="text-5xl mb-4 text-center">{{ count() }}</h1>
      <section class="flex flex-row mb-4">
        <button
          class="bg-gray-300 grow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          type="button"
          (click)="increment()"
        >
          Increment
        </button>
        <button
          class="bg-gray-300 grow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4"
          type="button"
          (click)="decrement()"
        >
          Decrement
        </button>
        <button
          class="bg-gray-300 grow hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          type="button"
          (click)="reset()"
        >
          Reset
        </button>
      </section>

      <section class="mb-4">
        <p>{{ evenOrOdd() }}</p>
        <p>{{ primeOrComposite() }}</p>
      </section>

      <section class="border border-white rounded-md h-36 overflow-auto p-4">
        <div *ngIf="logs().length > 0; else nologs">
          <p *ngFor="let log of logs()">{{ log }}</p>
        </div>
        <ng-template #nologs>
          <p>No data</p>
        </ng-template>
      </section>
    </main>
  `,
  styles: [],
})
export class CounterComponent {
  logs = signal<string[]>([]);
  count = signal<number>(0);
  evenOrOdd = computed(() => formatEvenOrOdd(this.count()));
  primeOrComposite = computed(() => checkPrimeOrComposite(this.count()));

  increment(): void {
    this.count.update((c) => c + 1);
    this.logs.mutate((logs) =>
      logs.push(formatMessage(MessageTypes.increment, this.count()))
    );
  }

  decrement(): void {
    this.count.update((c) => c - 1);
    this.logs.mutate((logs) =>
      logs.push(formatMessage(MessageTypes.decrement, this.count()))
    );
  }

  reset(): void {
    this.count.set(0);
    this.logs.mutate((logs) =>
      logs.push(formatMessage(MessageTypes.reset, this.count()))
    );
  }
}
