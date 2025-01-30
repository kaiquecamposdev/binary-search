const graph = {};
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thom", "jonny"];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const breadthFirstSearch = (name: string) => {
  const personIsSeller = (name: string) => name[name.length - 1] === "m"
  let searchQueue = [...graph[name]];
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift();

    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`);

        return true;
      }

      searchQueue = searchQueue.concat(graph[person]);
      searched.push(person);
    }
  }

  return false;
}

export const breadthFirstSearchEx = () => {
  breadthFirstSearch("you");
}