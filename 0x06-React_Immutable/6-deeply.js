import { List, Map } from "immutable";

// Function to deeply merge two objects and return a List containing the values
export function mergeDeeplyElements(page1, page2) {
  // Convert objects to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Deeply merge the two Maps
  const mergedMap = map1.mergeDeep(map2);

  // Convert the merged Map's values into an Immutable List and return it
  return List(mergedMap.valueSeq());
}
