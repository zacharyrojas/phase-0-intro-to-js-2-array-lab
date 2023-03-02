// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat() {
    cats.push('Ralph');
}
function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) { 
    const catsCopy = cats.slice();
    catsCopy.push(name);
    return catsCopy;
}
function prependCat(name) {
    const catscopy = cats.slice();
    catscopy.unshift(name);
    return catscopy;
}
function removeLastCat() {
    const catscopy = cats.slice();
    catscopy.pop();
    return catscopy;
}
function removeFirstCat() {
    const catscopy = cats.slice();
    catscopy.shift();
    return catscopy;
}