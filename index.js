const app = "I don't do much."
kittens = ["Milo" , "Otis" , "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(array, name){
  array.pop(name)
  return array
}

function destructivelyRemoveFirstKitten(array){
  array.slice(1)
  return array
}

function appendKitten(kittens, name){
  kittens = [...kittens, "name"]
  return kittens
}

function prependKitten(kittens, name){
  kittens = ["name", ...kittens]
  return kittens
}

function removeFirstKitten(kittens){
  kittens = kittens.slice(1)
  return kittens
}

function removeLastKitten(kittens){
  kittens = kittens.slice(0, kittens.length-1)
  return kittens
}