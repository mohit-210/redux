function* numbers(){
    yield 1;
    yield 2;
    yield 3;

}

const gen = numbers();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);