const maxValue = (numbers: number[]) => {
  const max = Math.max(...numbers)

  return max
}

export const maxValueEx = () => {
  const numbers = [0, 3, 2, 1, 23, 9, 42, 44, 12, 5, 88, 24]

  console.log(`
    Code Example -> Max Value\n
    ${maxValue(numbers)}
  `)
}