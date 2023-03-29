import { computed, Injectable, signal } from '@angular/core';
import {
  checkPrimeOrComposite,
  formatEvenOrOdd,
  formatMessage,
  MessageTypes,
} from '../number-utils';

@Injectable()
export class CounterStoreService {
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
