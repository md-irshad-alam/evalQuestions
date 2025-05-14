function rearrangeFruits(arr) {
  const removedItem = arr.splice(arr.length - 4, 4);
  arr.unshift(...removedItem);
  return arr;
}

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Peach",
  "Kiwi",
];

console.log(rearrangeFruits(fruits));
