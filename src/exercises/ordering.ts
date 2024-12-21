const arr1 = [5, 3, 6, 2, 10, 4, 0]

export function executeOrdering() {
  console.log(`
    ${arr1} \n
    The index of the smallest number in the array is: ${findSmallestIndex(arr1)} \n
    The array ${arr1} sorted is: ${selectionSort(arr1)}
  `)
}

function findSmallestIndex(arr: number[]): number {
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
function selectionSort(arr: number[]): number[] {
  const sortedArr = []
  const size = arr.length

  for (let i = 0; i < size; i++) {
    const smallIndex = findSmallestIndex(arr)

    sortedArr.push(arr.splice(smallIndex, 1)[0])  
  }

  return sortedArr
}