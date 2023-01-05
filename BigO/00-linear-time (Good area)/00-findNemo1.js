//#1 -- For loop in Javascript.
const nemo = ['nemo'];
const large = new Array(1000).fill('nemo')

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo1(nemo); // O(1)

findNemo1(large); // O(1000) or O(n) 

// this function depends on the number of inputs in array