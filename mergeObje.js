function mergeObjects(obj1, obj2) {
  let mergeobj = { ...obj1 };
  for (let [key, value] of Object.entries(obj2)) {
    mergeobj[key] = value;
  }
  return mergeobj;
}

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

const result = mergeObjects(obj1, obj2);
console.log(result);
