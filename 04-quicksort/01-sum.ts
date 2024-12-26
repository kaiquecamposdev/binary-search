const sum = (numbers: number[]): number => {
  let total = 0

  for (let x of numbers) {
    total += x
  }

  return total
}

export const sumEx = () => {
  const numbers = [1, 9, 10, 32, 54, 22]

  console.log(`
    Code Example -> Quicksort: Sum\n
    ${sum(numbers)}
  `)
}