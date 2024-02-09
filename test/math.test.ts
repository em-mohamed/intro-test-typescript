// test/math.test.ts
import assert from "node:assert";
import { add } from "../src/math";

// on va appeler la fonction `add` avec 2 paramètres.
const result = add(4, 5);
// on s'attend à ce que le résultat soit 9.
const expected = 9;
// Si le résultat est différent de l'attendu, la ligne suivante va _throw_ une erreur.
assert.equal(
  result,
  expected,
  `add - Failure! Expected ${expected}, received: ${result}.`
);
console.log("add - Success!");