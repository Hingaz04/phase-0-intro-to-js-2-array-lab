/*let cats = ["Milo", "Otis", "Garfield"];

function appendCat(name = 'Broom') {

  const cats2 = [...cats, {name}];
  console.log(cats);
  
}*/

const cats =["Milo", "Otis", "Garfield"];

const cats2 =["Broom", ...cats];
cats2;