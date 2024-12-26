const recursiveCount = (count: number, arr: number[]) => {
  if (count >= arr.length) return count

  return recursiveCount(count + 1, arr)
}

export const recursiveCountEx = () => {
  const arr = [0, 3, 2, 1, 23, 9, 42, 44, 12, 5, 88, 24]

  console.log(recursiveCount(0, arr))
}