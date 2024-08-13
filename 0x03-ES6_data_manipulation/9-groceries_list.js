export default function getGroceriesList() {
  const groceryItems = new Map();
  groceryItems.set('Apples', 10);
  groceryItems.set('Tomatoes', 10);
  groceryItems.set('Pasta', 1);
  groceryItems.set('Rice', 1);
  groceryItems.set('Bananas', 5);

  return groceryItems;
}
