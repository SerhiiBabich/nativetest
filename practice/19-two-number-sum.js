// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
	const nums = {};
	for (const currentNum of array) {
		const potentialMatch = targetSum - currentNum;

		if (potentialMatch in nums) {
			return [currentNum, potentialMatch];
		} else {
			nums[currentNum] = true;
		}
	}
	return [];
}
