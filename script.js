'use strict';
//pirveli davaleba
function customReplace(string, valueToReplace, valueToReplaceWith) {
  const before = string.split(valueToReplace);
  const after = before.join(valueToReplaceWith);
  return after;
}
const original = "original original original" ;
const newValue = customReplace(original, "first", "second");
console.log(newValue); 

//meore davaleba

function upperCase(sentence) {
  const capitalized = sentence.toUpperCase();
  return capitalized;
}
const sentence = 'a bb ccc dddd';
const result = upperCase(sentence);
console.log(result); 

//mesame davaleba

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}
const users = [
  {name: 'Lasha', age: 30}, 
  {name: 'Saba', age: 20}
] 
const sortedUsers = sortByAge(users);
console.log(sortedUsers);