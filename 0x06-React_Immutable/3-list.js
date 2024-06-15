import { List } from "immutable";

// Function to convert an array into an immutable List
export function getListObject(array) {
  return List(array);
}

// Function to append a string to an immutable List and return the new List
export function addElementToList(list, element) {
  return list.push(element);
}
