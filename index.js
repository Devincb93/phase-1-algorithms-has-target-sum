function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i =0; i < array.length; i++){
    const added = target - array[i]
    for (let j = i +1; j < array.length; j++) {
      if (array[j] === added) return true;
    } 
  }
 return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10))
  go through each number in the array, starting with the first number
  and add each following number that you go through to see if it equals the target
  value. 
  If the first number doesn't add up with any other numbers for the target value,
  move on to the next number and repeat the process excluding the first number.
  If the numbers iterated through equal the target value,
  return true
  If at the end of the array and no numbers add up to the target value 
  return false


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
