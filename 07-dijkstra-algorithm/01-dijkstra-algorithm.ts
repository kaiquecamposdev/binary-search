let graph = {}

graph.inicio = {}
graph.inicio.a = 6
graph.inicio.b = 2

graph.a = {}
graph.a.fim = 1

graph.b = {}
graph.b.a = 3
graph.b.fim = 5

let costs = {}

costs.a = 6
costs.b = 2
costs.fim = Infinity

let fathers = {}

fathers.a = "inicio"
fathers.b = "inicio"
fathers.fim = null

const processed = []

const dijkstraAlgorithm = () => {
  let node = findNodeLowestCost(costs)

  while(!node) {
    let cost = costs[node]
    let neighbors = graph[node]
    
    for (let n in neighbors.keys()) { 
      let newCost = cost + neighbors[n]
      let oldCost = costs[n]

      if (oldCost > newCost) {
        costs[n] = newCost
        neighbors[n] = node
      }

      processed.push(node)
    }
    
    node = findNodeLowestCost(costs)
  }

  return node
}

const findNodeLowestCost = (costs) => {
  let lowestCost = Infinity 
  let lowestCostNode = null
  
  Object.keys(costs).forEach((node) => {
    const cost = costs[node]

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestCostNode = node
    }
  })

  return {
    costs,
    lowestCostNode
  }
}

export const dijkstraAlgorithmEx = () => {
  const obj = dijkstraAlgorithm()
  
  console.log(`Costs: ${JSON.stringify(obj.costs)}`)
  console.log(`Lowest cost node: ${obj.lowestCostNode}`)
}