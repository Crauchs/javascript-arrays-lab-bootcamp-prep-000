const app = "I don't do much.";
var kittens=["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {kittens.push(name); return kittens}
function destructivelyPrependKitten(name) {kittens.unshift(name); return kittens}
function destructivelyRemoveLastKitten() {kittens.pop(); return kittens}
function destructivelyRemoveFirstKitten() {kittens.shift(); return kittens}
function appendKitten(name) {const moreKittens=[kittens, ...name]; return moreKittens}
function prependKitten(name) {return [...name, kittens]}
function removeLastKitten() {return (0, kittens.length-1)}
function removeFirstKitten() {return kittens.slice(1)}
