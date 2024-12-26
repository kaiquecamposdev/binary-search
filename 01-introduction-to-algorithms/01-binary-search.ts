


const binarySearch = (items: number[], item: number) => {
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
    } else if (attempt > item) { 
      high = middle - 1
    } else {
      low = middle + 1
    }
  }

  return results.length
}

export const binarySearchEx = () => {
  const createArr = (i: number) => Array.from({ length: i }, (v, k) => k + 1);

  const items = createArr(100);

  console.log(`
    Exercise 1.1 -> Binary search\r
    Max iterations: ${binarySearch(items, 53)}
  `)
}