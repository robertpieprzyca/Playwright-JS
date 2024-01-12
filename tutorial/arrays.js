// let array = [0, 1, 2, 3, 4];

// console.log(array.length);

// array[0] = 12;

// console.log(array[0]);

// //

// array.push(5);

// console.log(array);

// array.pop();

// console.log(array);

// array.shift();

// console.log(array);

// array.unshift("first in list");

// console.log(array);

// //

// const index_ele = array.indexOf(4);

// console.log(index_ele);

const names_1 = ["Rippled God", "Kallor", "Pannion"];
const names_2 = ["Caladan Brood", "Anomander Rake", "Kruppe"];

let all_names = names_1.concat(names_2);
//all_names = all_names.join(" - ");

// .sort .reverse

// for each?

console.log(all_names);
all_names.map((name) => {
  console.log(name + " - " + all_names.indexOf(name));
});
