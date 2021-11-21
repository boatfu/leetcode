interface HashMap {
    [key: number]: number
}
function twoSum(nums: number[], target: number): number[] {
    const hashMap: HashMap = {}
    for (const [idx, num] of Object.entries(nums) ) {
        const aim = target - num
        if (typeof hashMap[aim] !== 'undefined') {
            return [hashMap[aim], +idx]
        }
        hashMap[num] = +idx
    }
    return []
};
