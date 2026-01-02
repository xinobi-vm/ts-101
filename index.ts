// Benefits of Typescript

// 1 - better error feedback

function reverse(str: string) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));
// console.log(reverse(123));

// 2 - better autocompletion and code hints
const reversed = reverse("ninja");

// 3 - Custom Types
// Interface - custom type definition
// Interfaces is a virtual contract used only for type-checking
// Implementation is purely architectural
// Vanishes at run time

interface MenuItem {
  title: string;
  cost: number;
}

function printMenuItem(item: MenuItem) {
  console.log(item.title, ":", item.cost);
}

// Print the Menu Item

printMenuItem({ title: "Pizza", cost: 10 });

// Error Example 1
// printMenuItem({ title: "Pizza", cost: "10" });

// Error Example 3
// printMenuItem({ name: "Pizza", cost: 10 });
