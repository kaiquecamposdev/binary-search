import { measureExecutionTime } from '../utils/measure-execution-time.ts'



const binarySearch = (items: number[], item: number) => {
  let low = 0
  let high = items.length - 1
  let middle = 0
  let tentative = 0
  let results = []

  while (low <= high) {
    middle = Math.ceil((low + high) / 2) 
    tentative = items[middle]
    
    if (tentative === item) { 
      return middle
    } else if (tentative > item) { 
      high = middle - 1
    } else { 
      low = middle + 1
    }

    results.push(tentative)
  }
  
  return results.length
}

export const binarySearchEx = () => {
  let numbers = []

  for (let i = 0; i < 100; i++) {
    numbers.push(i)
  }

  const execute = measureExecutionTime(binarySearch) 

  console.log(`
    Exercise 1.1 -> Binary search\r
    Max iterations: ${execute(numbers, 9)}
  `)
}