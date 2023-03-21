export function checkPrimeOrComposite(count: number): string {
  if (count === 1 || count === 0) {
    return 'Current count is neither prime nor composite';
  }
  let isPrime = true;
  for (let i = 2; i < count; i++) {
    if (count % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime ? 'Current count is prime' : 'Current count is composite';
}

export enum MessageTypes {
  increment,
  decrement,
  reset,
}

export function formatMessage(
  messageType: MessageTypes,
  count: number
): string {
  const timeString = new Date().toLocaleTimeString();
  switch (messageType) {
    case MessageTypes.increment:
      return `${timeString} - Increment count to ${count}`;
    case MessageTypes.decrement:
      return `${timeString} - Decrement count to ${count}`;
    case MessageTypes.reset:
      return `${timeString} - reset count to 0`;
    default:
      return `${timeString} - Unknown action performed`;
  }
}

export function formatEvenOrOdd(count: number): string {
  const format = (evenOrOdd: string) => `The current count is ${evenOrOdd}`;
  return count % 2 === 0 ? format('even') : format('odd');
}
