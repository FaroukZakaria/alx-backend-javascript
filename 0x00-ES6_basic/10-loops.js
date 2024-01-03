export default function appendToEachArrayValue(array, appendString) {
  const NewString = [];
  for (const idx of array) {
    const value = array[idx];
    NewString[idx] = appendString + value;
  }

  return NewString;
}
