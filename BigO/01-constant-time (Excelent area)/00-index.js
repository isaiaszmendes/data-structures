const compressALlBoxes = (boxes = []) => {
  console.log(boxes[0])
}

const logFirstTwoBoxes = (boxes = []) => {
  console.log(boxes[0]); // O (1)
  console.log(boxes[1]); // O (1)
}

// O(2) or O(1)- Constant time

// Do not matter how many inputs we have, the output will be always one element, the zero index