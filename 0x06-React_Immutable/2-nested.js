import { fromJS } from "immutable";

// Function to access the value of the object at the defined path
export default function accessImmutableObject(object, array) {
  const immutableObject = fromJS(object);
  return immutableObject.getIn(array);
}
