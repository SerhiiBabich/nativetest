const twoSum = (nums = [], k) => {
	let l = 0;
	let r = nums.length - 1;
	while (l < r) {
		let sum = nums[l] + nums[r];
		if (sum === k) {
			return [nums[l], nums[k]];
		}

		if (sum < k) {
			l++;
		} else {
			r--;
		}
	}

	return [];
};

console.log(twoSum([-4, -1, 0, 1, 5, 7, 9], 4));
