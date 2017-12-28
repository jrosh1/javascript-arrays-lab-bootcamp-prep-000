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

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  kitnew = [...kittens, name]
  return kitnew
}

function prependKitten(name){
  kitnew = [name, ...kittens]
  return kitnew
}

function removeFirstKitten(){
  kittens = kittens.slice(1)
  return kittens
}

function removeLastKitten(){
  kittens = kittens.slice(0, kittens.length-1)
  return kittens
}