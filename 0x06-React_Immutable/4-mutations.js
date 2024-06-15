import { Map } from "immutable";

// Create the initial Immutable Map
export const map = Map({
  1: "Liam",
  2: "Noah",
  3: "Elijah",
  4: "Oliver",
  5: "Jacob",
  6: "Lucas",
});

// Create the second Immutable Map by modifying the initial Map
export const map2 = map.withMutations((mapItem) => {
  mapItem.set(2, "Benjamin").set(4, "Oliver");
});
