const number = [1, 5, 6, 8, 5, 6, 5, 8, 7, 8];

const string = ["Banana", "Pera", "Banana", "Maçã", "Pera", "Pitaia", "Pitaia"];

const uniqueNum = [...new Set(number)];
const uniqueStr = [...new Set(string)];

console.log(uniqueNum.sort()); // [ 1, 5, 6, 7, 8 ]
console.log(uniqueStr.sort()); // [ 'Banana', 'Maçã', 'Pera', 'Pitaia' ]