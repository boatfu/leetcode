function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    const map = {};
    for (let start = 0, end = 0; end < s.length; end++) {
        const value = s[end];
        if (!map[value]) {
            map[value] = 1;
        } else {
            map[value] += 1;
            while (map[value] > 1) {
                const startValue = s[start]
                map[startValue] -=  1;
                start++;
            }
        }
        max = Math.max(max, end - start + 1);
    }
    return max;
};