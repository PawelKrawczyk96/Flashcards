// Treść zadania 4 – getFirst<T>
//
// Napisz funkcję generyczną getFirst<T>, która:
//
// Przyjmuje tablicę elementów dowolnego typu T[]
//
// Zwraca pierwszy element tablicy lub undefined, jeśli tablica jest pusta
//
// Przykłady użycia
// getFirst([1, 2, 3]);       // 1
// getFirst(["a", "b", "c"]); // "a"
// getFirst([]);              // undefined
// getFirst([{ id: 1 }, { id: 2 }]); // { id: 1 }

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

setTimeout(() => Promise.resolve().then(() => console.log("Promise")), 10);

console.log("End");

function data() {
  this.name = "test";
}
