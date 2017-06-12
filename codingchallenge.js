"use strict";


var uniqueCharacterFragments = s => {
  let characterSet = new Map(); //[[key, { fragmentCount, asciiCode }]]
  var previousChar;

  for(var charAtIndex of s) {
    if(charAtIndex !== previousChar) {
    
      const uniqueCharacter = characterSet.get(charAtIndex);
    
      if(!uniqueCharacter) {  
        const asciiCode = charAtIndex.charCodeAt(0);
        characterSet.set(charAtIndex, { fragmentCount: 1, asciiCode: asciiCode})
      } else {
        characterSet.set(charAtIndex, { fragmentCount: uniqueCharacter.fragmentCount + 1, asciiCode: uniqueCharacter.asciiCode})
      }
    }
    previousChar = charAtIndex;
  }  
  return characterSet;
}



var range = i => Array(i).fill().map((e,i) => i + 1)


var sumAll = x => [...x].reduce((e, i) => e + i);


var sumAsciiValuesForUniqueCharacterFragments  = s => [...uniqueCharacterFragments(s).values()].map((value) => {
  const multiplier = sumAll(range(value.fragmentCount));
  let result = value.asciiCode * multiplier;
  
  return result;
}).reduce((acc, curr) => acc + curr);

