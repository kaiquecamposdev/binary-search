
const quicksort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr
  } else {
    const pivot = arr[0]
    let minors = arr.slice(1).filter((i) => i <= pivot)
    let bigger = arr.slice(1).filter((i) => i > pivot)

    return [
      ...quicksort(minors), 
      ...[pivot], 
      ...quicksort(bigger)
    ]
  }
}

export const quicksortEx = () => {
  const arr = [10, 3, 5, 2, 1, 6, 9, 8]

  console.log(`
    Code Example -> Quicksort: quicksort
    
    The array: ${arr}

    The sorted array : ${quicksort(arr)}
  `)
}