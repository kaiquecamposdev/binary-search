


const binarySearch = (item: number, items: number[]) => {
  let low = 0
  let high = items.length - 1
  let middle = 0
  let attempt = 0
  // base case
  let results = []

  while (low <= high) {
    middle = Math.ceil((low + high) / 2)
    attempt = items[middle]

    results.push(attempt)

    if (attempt === item) { 
      return results.length
    }
    if (attempt > item) { 
      high = middle - 1
    } 
    if (attempt < item) { 
      low = middle + 1
    }
  }

  return results.length
}

export const binarySearchEx = () => {
  let numbers = []

  for (let i = 0; i <= 100; i++) {
    numbers.push(i)
  }

  console.log(`
    Exercise 1.1 -> Binary search\r
    Max iterations: ${binarySearch(53, numbers)}
  `)
}