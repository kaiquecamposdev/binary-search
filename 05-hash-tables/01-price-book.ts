const priceBook = () => {
  const book = {} as Record<string, number>
  
  book.apple = 0.67
  book.milk = 1.49
  book.avocado = 1.29

  return book
}

export const priceBookEx = () => {
  const book = priceBook()
  const key = 'milk'
  
  console.log(book)
  console.log(`${key}: ${book[key]}`)
} 