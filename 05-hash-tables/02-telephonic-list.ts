const telephonicList = () => {
  const list = new Map()

  list.set('Jenny', 80809321831)
  list.set('Emergency', 911)

  return list
}

export const telephonicListEx = () => {
  const list = telephonicList()
  const key = 'Jenny'

  console.log(list)
  console.log(`${key}: ${list.get(key)}`)
}