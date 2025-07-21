// Input: nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3
// Output: 9

let nums = [1, 2, 3, 4, 5, 6]

function PrefixSum() {
    P = []

    for(item in nums) {
        P.push(nums[item] + nums[item - 1])
    }

    console.log(P);
} 

PrefixSum()

