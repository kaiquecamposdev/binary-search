const telephonicList = () => {
  const list = {} as Record<string, number>

  list.jenny = 80809321831
  list.emergency = 911

  return list
}

export const telephonicListEx = () => {
  const list = telephonicList()
  const key = 'jenny'

  console.log(list)
  console.log(`${key}: ${list[key]}`)
}