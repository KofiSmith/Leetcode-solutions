var countEven = function(num){
const digitSum = num =>
    num
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, el) => acc + el, 0)

  const isEven = num => num % 2 === 0

  return Array.from({ length: num }, (_, i) => i + 1)
    .map(digitSum)
    .filter(isEven).length
}
