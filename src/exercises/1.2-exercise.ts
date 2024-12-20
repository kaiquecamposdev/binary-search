import { measureExecutionTime } from '../utils/measure-execution-time.js';

export function exercise2() {
  const names = [
    "Alice",
    "Aurora",
    "Beatriz",
    "Cecília",
    "Clara",
    "Diana",
    "Elisa",
    "Estela",
    "Fernanda",
    "Gabriela",
    "Helena",
    "Isabela",
    "Joana",
    "Lara",
    "Luísa",
    "Manuela",
    "Mariana",
    "Melissa",
    "Nina",
    "Olivia",
    "Pâmela",
    "Rafaela",
    "Sara",
    "Sofia",
    "Stella",
    "Valentina",
    "Vitória",
    "Yasmin",
    "Ágata",
    "Bárbara",
    "Carolina",
    "Daniela",
    "Eduarda",
    "Flávia",
    "Gabriela",
    "Heloísa",
    "Ingrid",
    "Jade",
    "Karina",
    "Laura",
    "Letícia",
    "Lorena",
    "Luna",
    "Maitê",
    "Maria",
    "Nicole",
    "Olívia",
    "Penélope",
    "Rebeca",
    "Sabrina",
    "Tatiana",
    "Úrsula",
    "Vanessa",
    "Xênia",
    "Yara",
    "Zara",
    "Adrian",
    "Arthur",
    "Bernardo",
    "Bruno",
    "Caio",
    "Daniel",
    "Eduardo",
    "Enzo",
    "Felipe",
    "Gabriel",
    "Guilherme",
    "Henrique",
    "Igor",
    "João",
    "Kauã",
    "Lucas",
    "Lorenzo",
    "Miguel",
    "Murilo",
    "Nicolas",
    "Otávio",
    "Pedro",
    "Rafael",
    "Rodrigo",
    "Samuel",
    "Thiago",
    "Tomás",
    "Vicente",
    "Alexandre",
    "André",
    "Antônio",
    "Benjamin",
    "Breno",
    "Carlos",
    "Davi",
    "Diego",
    "Emanuel",
    "Fernando",
    "Gustavo",
    "Heitor",
    "Isaac",
    "Josué",
    "Kevin",
    "Leonardo",
    "Luan",
    "Marcelo",
    "Matheus",
    "Nathan",
    "Noah",
    "Pablo",
    "Ricardo",
    "Santiago",
    "Theo",
    "Victor",
    "Vinicius",
    "William",
    "Xavier",
    "Yan",
    "Yuri",
    "Anthony",
    "Bryan",
    "Christopher",
    "Dylan",
    "Ethan",
    "Grayson",
    "Hunter",
    "Isaiah",
    "Jackson",
    "Jacob",
    "Logan",
    "Matthew",
    "Ryan"
  ];

  function binarySearch(items: string[], item: string) {
    let low = 0
    let high = items.length - 1
    let middle = 0
    let tentative = ''
    let results = []

    while (low <= high) {
      middle = Math.ceil((low + high) / 2) 
      tentative = items[middle]
      
      if (tentative === item) { 
        return middle
      } else if (tentative > item) { 
        high = middle - 1
      } else { 
        low = middle + 1
      }

      results.push(tentative)
    }
    
    return results.length
  }

  function binarySearchTwo(items: string[]) {
    let size = items.length
    let result = Math.ceil(Math.log2(size))

    return result
  }

  console.log("Exercise 1.2 -> Suppose you have a list of 128 names and you are doing a binary search. What would be the maximum number of steps it would take you to find the name you want?")
  console.log('\r')

  const execute = measureExecutionTime(binarySearch) 
  console.log(`\rMax iterations: ${execute(names, 'Nina')}`)
  console.log('\r')
  const executeTwo = measureExecutionTime(binarySearchTwo)
  console.log(`\rMax iterations: ${executeTwo(names)}`)
}