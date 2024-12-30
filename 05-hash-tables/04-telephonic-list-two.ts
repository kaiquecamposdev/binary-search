const telephonicListTwo = () => {
  const list = {} as Record<string, number>

  list.esther = 1321310319
  list.ben = 2131031089
  list.bon = 1213131319
  list.dan = 1321341209

  return list
}

export const telephonicListTwoEx = () => {
  const list = telephonicListTwo()

  console.log(list)
}