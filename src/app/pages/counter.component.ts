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
    <h1>Count: {{ count() }}</h1>
    <section>
      <button type="button" (click)="increment()">Increment</button>
      <button type="button" (click)="decrement()">Decrement</button>
      <button type="button" (click)="reset()">Reset</button>
    </section>
    <p>{{ evenOrOdd() }}</p>
    <p>{{ primeOrComposite() }}</p>
    <section>
      <h1>Logs</h1>
      <div>
        <p *ngFor="let log of logs()">{{ log }}</p>
      </div>
    </section>
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
