export function intParser(...numbers) {
  const nums = numbers.map((num) => parseInt(num))
  return nums
}
