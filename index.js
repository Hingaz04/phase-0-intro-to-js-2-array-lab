// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function arrayfunctions(){
  cats.push('Milo', 'Otis', 'Garfield');
}


function destructivelyAppendCat(name) {
  cats.push('Ralph');
}

function destructivelyPrependCat(name){
  cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
  cats.pop();
}

function destructivelyRemoveFirstCat(){
  cats.shift();
}


const newcat=["Broom"];
const allcats=[newcat,...cats];

