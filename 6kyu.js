// You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. The array is either 
// entirely comprised of odd integers or entirely comprised of even integers 
// except for a single integer N. Write a method that takes the array as an 
// argument and returns this "outlier" N.
function findOutlier(integers){
    // filter the integer for the even and odd elements
  const even = integers.filter((element)=> element % 2 === 0);
  const odd = integers.filter((element)=> element % 2 !== 0);
  // if the length of even equals 1 return the even[0] otherwise odd[0]
  return even.length === 1 ? even[0] : odd[0];
    }

console.log(findOutlier([0, 1, 2])) // 1