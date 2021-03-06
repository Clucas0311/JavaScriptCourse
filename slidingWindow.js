function maxSubArraySum(arr, num) {
	// create helper variables to grab the max and the temp max
	let maxSum = 0;
	let tempSum = 0;
	// create an edge case if the array is less than the num
	if (arr.length < num) return null;
	// iterate through the arr to get the sum starting at 0 ending at the num amount
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	// reassign the the temp value to the max
	tempSum = maxSum;
	// iterate through the array starting at num and ending at the length of the array
	for (let i = num; i < arr.length; i++) {
		// reassign the temp variable to move by deleting the first index until the sum is found
		tempSum = tempSum - arr[i - num] + arr[i];
		// get the max of the temp and the max
		maxSum = Math.max(tempSum, maxSum);
	}
	// return the maxsum
	return maxSum;
}

console.log(maxSubArraySum([ 2, 6, 9, 2, 1, 8, 5, 6, 3 ], 3));

function longestSubstringWithoutDuplication(string) {
	// Write your code here.
	const seen = {};
	let startIdx = 0; // Starting at index 0 we have no duplicate strings
	let longest = [ 0, 1 ];
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		// IF the character already exist in string
		if (char in seen) {
			// Set the startIdx to the index at the seen character plus 1
			startIdx = Math.max(startIdx, seen[char] + 1);
		}
		if (longest[1] - longest[0] < i + 1 - startIdx) {
			longest = [ startIdx, i + 1 ];
		}
		seen[char] = i;
	}
	return string.slice(longest[0], longest[1]);
}
