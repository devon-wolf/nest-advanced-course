import { parentPort } from 'worker_threads';

function fib(n: number): number {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

parentPort.on('message', ({ n, id }) => {
  parentPort.postMessage({ result: fib(n), id });
});
