import { measureExecutionTime } from "../utils/measure-execution-time.ts";

export function exercise4() {
  const telephonicList = [
    {
      name: 'Abby',
      tel: 1332984924
    },
    {
      name: 'Bobby',
      tel: 1332984925
    },
    {
      name: 'Cathy',
      tel: 1332984926
    },
    {
      name: 'David',
      tel: 1332984927
    },
    {
      name: 'Eddy',
      tel: 1332984928
    },
    {
      name: 'Fanny',
      tel: 1332984929
    },
    {
      name: 'Garry',
      tel: 1332984930
    },
    {
      name: 'Harry',
      tel: 1332984931
    },
    {
      name: 'Izzy',
      tel: 1332984932
    },
    {
      name: 'Jenny',
      tel: 1332984933
    },
    {
      name: 'Kathy',
      tel: 1332984934
    },
    {
      name: 'Lenny',
      tel: 1332984935
    },
    {
      name: 'Manny',
      tel: 1332984936
    },
    {
      name: 'Nancy',
      tel: 1332984937
    },
    {
      name: 'Ozzy',
      tel: 1332984938
    },
    {
      name: 'Patty',
      tel: 1332984939
    },
    {
      name: 'Quincy',
      tel: 1332984940
    },
    {
      name: 'Randy',
      tel: 1332984941
    },
    {
      name: 'Sandy',
      tel: 1332984942
    },
    {
      name: 'Terry',
      tel: 1332984943
    },
    {
      name: 'Uzzy',
      tel: 1332984944
    },
    {
      name: 'Vicky',
      tel: 1332984945
    },
    {
      name: 'Wendy',
      tel: 1332984946
    },
    {
      name: 'Xena',
      tel: 1332984947
    },
    {
      name: 'Yanny',
      tel: 1332984948
    },
    {
      name: 'Zack',
      tel: 1332984949
    }
  ]

  function binarySearch(items: [{
    name: string,
    tel: number
  }], tel: number) {
    let results = []

    for(let i = 0; i <= items.length; i++) {
      results.push(items[i])
    }

    return results.length
  }

  console.log("Exercise 1.4 -> You have a phone number and you want to find its owner in a phone book. (Tip: You should search the entire agenda).")
  console.log('\r')

  const execute = measureExecutionTime(binarySearch)
  console.log(`\rBig O: O(${execute(telephonicList)})`)
}