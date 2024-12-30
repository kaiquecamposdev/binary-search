const priceBook = () => {
  const book = new Map()
  
  book.set("Apple", 0.67)
  book.set("Milk", 1.49)
  book.set("Avocado", 1.29)

  return book
}

export const priceBookEx = () => {
  const book = priceBook()
  const key = 'Milk'
  
  console.log(book)
  console.log(`${key}: ${book.get(key)}`)
} 