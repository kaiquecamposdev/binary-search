
const findSmallestIndex = (arr: number[]) => {
  let small = arr[0]
  let smallIndex = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i]
      smallIndex = i 
    }
  }

  return smallIndex
}

const selectionSort = (arr: number[]) => {
  const sortedArr = []
  const size = arr.length

  for (let i = 0; i < size; i++) {
    const smallIndex = findSmallestIndex(arr)

    sortedArr.push(arr.splice(smallIndex, 1)[0])  
  }

  return sortedArr
}

export const selectionSortEx = () => {
  const arr = [5, 3, 6, 2, 10, 4, 0]

  console.log(`
    Code Example -> Selection Sort\n
    The index of the smallest number: ${findSmallestIndex(arr)}
    The array: ${arr}
    Sorted is: ${selectionSort(arr)}
  `)
}