const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001,
  },
};
function deepCopy(obj) {
  let dcopy = JSON.parse(JSON.stringify(obj));
  dcopy.name = "irshad";
  return dcopy;
}

const copy = deepCopy(obj);
console.log(copy);
// Output: { name: "John", address: { city: "New York", zip: 10001 } }
