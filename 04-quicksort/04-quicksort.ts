
const quicksort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr

  const last = arr.length - 1
  const pivot = arr[last]
  let minors = arr.slice(1).filter((i) => i < pivot)
  let biggers = arr.slice(1).filter((i) => i > pivot)

  console.log(minors)
  console.log(biggers)

  return [
    ...quicksort(minors), 
    ...[pivot], 
    ...quicksort(biggers)
  ]
}

export const quicksortEx = () => {
  const arr = [10, 3, 5, 2, 1, 6, 9, 8, 4]

  console.log(`
    Code Example -> Quicksort: quicksort
    
    The array: ${arr}

    The sorted array : ${quicksort(arr)}
  `)
}