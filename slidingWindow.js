function maxSubArraySum(arr, num) {
	// create a tempSum sum variable
	let tempSum = 0;
	// create a maxSum variable
	let maxSum = 0;
	// create edge case - if the arr length is smaller than the num return null;
	if (arr.length < num) {
		return null;
	}
	// get the sum variable by adding up the elements starting at 0 until the num
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
		console.log(maxSum);
	}
	// reassign the value of tempSum to maxSum
	tempSum = maxSum;
	console.log((tempSum = maxSum));
	console.log(tempSum);
	// loop starting at num value ending at the length of the array
	for (let i = num; i < arr.length; i++) {
		// tempSum during each iteration will equal the sum of the new subArray
		// every time the subarray increments forward we subtract the one that is
		// being moved out of the subarray and add the one in front of it
		tempSum = tempSum - arr[i - num] + arr[i];
		console.log(`tempSum: ${tempSum - arr[i - num] + arr[i]}`);
		console.log(`maxSum: ${maxSum}`);
		// then get the max value
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}

console.log(maxSubArraySum([ 2, 6, 9, 2, 1, 8, 5, 6, 3 ], 3));
