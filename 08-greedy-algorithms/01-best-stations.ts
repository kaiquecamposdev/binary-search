const bestStations = () => {
  let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'])

  let stations = {}
  stations['kum'] = new Set(['id', 'nv', 'ut'])
  stations['kdois'] = new Set(['wa', 'id', 'mt'])
  stations['ktres'] = new Set(['or', 'nv', 'ca'])
  stations['kquatro'] = new Set(['nv', 'ut'])
  stations['kcinco'] = new Set(['ca', 'az'])

  let finalStations = new Set()

  while (statesNeeded.size) {
    let bestStation = null
    let statesCovered = new Set()

    Object.keys(stations).forEach(station => {
      const states = stations[station]
      const covered = new Set([...statesNeeded].filter(x => states.has(x)))

      if (covered.size > statesCovered.size) {
        bestStation = station
        statesCovered = covered
      }
    })

    statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)))
    finalStations.add(bestStation)
  }

  return finalStations
}

export const bestStationsEx = () => {
  console.log(bestStations())
}