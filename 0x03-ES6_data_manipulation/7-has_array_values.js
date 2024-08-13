export default function containsAllValues(set, array) {
  return array.every((element) => set.has(element));
}
