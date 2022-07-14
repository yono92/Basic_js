const cart = ["Naming and Necssity", "Alice in Wonderland"];

console.log(...cart);

const copycart = [...cart];

console.log(copycart);

function removeItem(items, removable) {
  const updated = [];
  for (let i = 0; i < items.length; i++) {
    updated.push(items[i]);
  }
  return updated;
}

function removeItem(items, removable) {
  const index = items.indexOf(removable);
  items.splice(index, 1);
  return items;
}

const books = ["practical vim", "moby dick", "the dark tower"];
const recent = removeItem(books, "moby dick");
const novels = removeItem(books, "practical vim");
