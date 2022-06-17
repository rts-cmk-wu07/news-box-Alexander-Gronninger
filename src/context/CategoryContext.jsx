import { createContext } from "react";

const CategoryContext = createContext([
  "world",
  "health",
  "sports",
  "business",
  "travel",
]);

export default CategoryContext;
