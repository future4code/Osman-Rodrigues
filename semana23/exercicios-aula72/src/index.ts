function isOneEdit(target: string, reference: string){
  if(reference.length > target.length + 1 || reference.length === target.length -2){
    return false
  }
  
  const targetCharList = target.split("")
  const referenceCharList = reference.split("")

  const strangerCharList = referenceCharList.filter(char=>{
    return ! targetCharList.includes(char)
  })

  if(strangerCharList.length > 1){
    return false
  }

  return true
}

interface HashTable{
  [key: string]: number
}

function sequenceCount(target: string){
  const count: HashTable = {}
  const splitedStr = target.split("")
  let finalStr = ""

  splitedStr.forEach(char=>{
    if(count[char]){
      count[char] += 1
    }else{
      count[char] = 1
    }
  })

  for(const char in count){
    finalStr += char+`${count[char]}`
  }

  return finalStr.length > target.length ? target : finalStr
}

