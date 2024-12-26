export function recursiveBinarySearch(items: number[], item: number, low: number = 0, high: number = items.length - 1, results: number[] = [] /* base case */) {
  if (low > high) return null

  // recursive case
  let middle = Math.floor((low + high) / 2) 
  let attempt = items[middle]
  
  results.push(attempt)
    
  if (attempt === item) { 
    return results.length
  } else if (attempt > item) { 
    return recursiveBinarySearch(items, item, low, middle - 1, results)
  } else { 
    return recursiveBinarySearch(items, item, middle + 1, high, results)
  }
}

export const recursiveBinarySearchEx = () => {
  const createArr = (i: number) => Array.from({ length: i }, (v, k) => k + 1);

  const items = createArr(100);

  console.log(recursiveBinarySearch(items, 54))
}