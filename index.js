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


function appendCat(name = 'Broom') {
 

  const newCats = [...cats, { name }];
  
  return newCats;
}

function prependCat(name) {
  const newCats = [{ name }, ...cats];
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}

