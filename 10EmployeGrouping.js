const employees = [
  { name: "Alice", age: 30, salary: 50000, department: "HR" },
  { name: "Bob", age: 35, salary: 60000, department: "Finance" },
  { name: "Charlie", age: 28, salary: 55000, department: "HR" },
  { name: "David", age: 40, salary: 70000, department: "IT" },
  { name: "Eve", age: 32, salary: 65000, department: "Finance" },
];

const groupedProducts = employees.reduce((acc, item) => {
  if (!acc[item.department]) {
    acc[item.department] = [];
  }
  acc[item.department].push(item);
  return acc;
}, {});

console.log(groupedProducts);
