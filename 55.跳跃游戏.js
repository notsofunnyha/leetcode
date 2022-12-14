/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 思路: 从最后的位置依次往回找, 假定数组长度为n, 如果n-1能到达n, 则问题变成了能否到达n-1, n-1不行就找n-2

// 第一版(递归)  数组特别长时 // RangeError: Maximum call stack size exceeded
var canJump = function (nums) {
  if (nums.length <= 1) return true
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= nums.length - 1) return canJump(nums.slice(0, i + 1))
  }
  return false
}

// 第二版(循环)
var canJump = function (nums) {
  if (nums.length <= 1) return true
  // 下标位置
  let position = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= position) position = i
    if (position <= 0) return true
  }
  return false
}
// @lc code=end
