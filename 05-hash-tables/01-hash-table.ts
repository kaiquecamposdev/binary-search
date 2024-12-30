const hashTable = () => {
  const book = new Map()
  
  book.set("Apple", 0.67)
  book.set("Milk", 1.49)
  book.set("Avocado", 1.29)

  return book
}

export const hashTableEx = () => {
  const book = hashTable()
  const key = 'Milk'
  
  console.log(book)
  console.log(`${key}: ` + book.get(key))
} 