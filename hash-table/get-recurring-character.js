//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
}

console.assert(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]) === 2, 'should return 2');

// if use first function we will have an error return
console.assert(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]) === 1, 'should return 1');

console.assert(firstRecurringCharacter2([2,3,4,5]) === undefined, 'should return undefined');

// if use first function we will have an error return
console.assert(firstRecurringCharacter2([1,5,5,1,3,4,6]) === 5, 'should return 5'); 
