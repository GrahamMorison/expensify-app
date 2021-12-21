const nameMatch = (knownAliases, testName) => {
  for (let i = 0; i < knownAliases.length; i++) {
    
    if (knownAliases[i] === testName) return true; // test whether there is an exact match
    
    let aliasArr = knownAliases[i].split(' ');
    let nameArr = testName.split(' ');

    let aliasFirst = aliasArr[0];
    let aliasMiddle = aliasArr.length === 3 ? aliasArr[1] : ' ';
    let aliasLast = aliasArr[aliasArr.length - 1];

    let nameFirst = nameArr[0];
    let nameMiddle = nameArr.length === 3 ? nameArr[1] : ' ';
    let nameLast = nameArr[nameArr.length - 1];
    

    if (aliasLast === nameLast) { // check if last name matches
      if (aliasArr.length < 3) {

        if (aliasFirst === nameFirst || aliasFirst === nameMiddle) return true;

      } else if (nameArr.length < 3) {

        if (nameFirst === aliasFirst || nameFirst === aliasMiddle) return true;

      }
      
      if (nameFirst === aliasMiddle && nameMiddle === aliasFirst) return true;
      
      if (aliasMiddle.length === 1) {
        if ( (aliasMiddle[0] === nameMiddle[0]) && (nameFirst === aliasFirst) ) return true;
        if ( (aliasMiddle[0] === nameFirst[0]) && (nameMiddle === aliasFirst) ) return true;
      }
      
      if (nameMiddle.length === 1) {
        if ( (nameMiddle[0] === aliasMiddle[0]) && (nameFirst === aliasFirst) ) return true;
        if ( (nameMiddle[0] === aliasFirst[0]) && (nameFirst === aliasMiddle) ) return true;
      }
    }
  }
  return false;
}


//Exact match
const knownAliases = ['Alphonse Gabriel Capone', 'Al Capone'];

console.log(nameMatch(knownAliases, 'Alphonse Gabriel Capone')); //True
console.log(nameMatch(knownAliases, 'Al Capone')); //True
console.log(nameMatch(knownAliases, 'Alphonse Francis Capone')); //False
// //Middle name missing on alias
// const knownAliases2 = ['Alphonse Capone'];

// console.log(nameMatch(knownAliases2, 'Alphonse Gabriel Capone')); //True
// console.log(nameMatch(knownAliases2, 'Alphonse Francis Capone')); //True
// console.log(nameMatch(knownAliases2, 'Alexander Capone')); //False
// // //Middle name missing on record name
// const knownAliases3 = ['Alphonse Gabriel Capone'];

// console.log(nameMatch(knownAliases3, 'Alphonse Capone')); //True
// console.log(nameMatch(knownAliases3, 'Alphonse Francis Capone')); //False
// console.log(nameMatch(knownAliases3, 'Alexander Capone')); //False
// // //Extra check for middle name tests
// const knownAliases4 = ['Alphonse Gabriel Capone', 'Alphonse Frances Capone'];

// console.log(nameMatch(knownAliases4, 'Alphonse Gabriel Capone')); //True
// console.log(nameMatch(knownAliases4, 'Alphonse Frances Capone')); //True
// console.log(nameMatch(knownAliases4, 'Alphonse Edward Capone')); //False
// // //Middle initial matches middle name
// const knownAliases5 = ['Alphonse Gabriel Capone', 'Alphonse F Capone'];

// console.log(nameMatch(knownAliases5, 'Alphonse G Capone')); //True
// console.log(nameMatch(knownAliases5, 'Alphonse Francis Capone')); //True
// console.log(nameMatch(knownAliases5, 'Alphonse E Capone')); //False
// console.log(nameMatch(knownAliases5, 'Alphonse Edward Capone')); //False
// console.log(nameMatch(knownAliases5, 'Alphonse Gregory Capone')); //False
// // //First and middle name transposed
// const knownAliases6 = ['Alphonse Gabriel Capone'];

// console.log(nameMatch(knownAliases6, 'Gabriel Alphonse Capone')); //True
// console.log(nameMatch(knownAliases6, 'Gabriel A Capone')); //True
// console.log(nameMatch(knownAliases6, 'Gabriel Capone')); //True
// console.log(nameMatch(knownAliases6, 'Gabriel Francis Capone')); //False
// // // //Last name cannot be transposed
// const knownAliases7 = ['Alphonse Gabriel Capone'];

// console.log(nameMatch(knownAliases7, 'Alphonse Capone Gabriel')); //False
// console.log(nameMatch(knownAliases7, 'Capone Alphonse Gabriel')); //False
// console.log(nameMatch(knownAliases7, 'Capone Gabriel')); //False 


