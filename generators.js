function* generatorFunction() {
  yield "Hi";
  yield "Bye";
  yield "From";
  yield "Generator";
  return "Finished";
  yield "You can't see me";
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
