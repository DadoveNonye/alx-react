import { Map, is } from "immutable";

// Function to compare two Immutable Maps
export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
