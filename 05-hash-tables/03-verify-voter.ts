const voted = new Map()

voted.set('Tom', true)
voted.set('Michael', false)
voted.set('Kennedy', true)

const verifyVoter = (name: string) => {
  const isVoted = voted.get(name) 

  if (isVoted) {
    console.log("Já votou, mande embora!")
  } else {
    voted.set(name, true)
    console.log("Não votou, deixe votar!")
  }
}

export const verifyVoterEx = () => {
  const name = "Tom"

  console.log(`${name}:`)
  verifyVoter(name)
}