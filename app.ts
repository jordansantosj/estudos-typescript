let message: string = "Hello World"
console.log(message);

let episode: number = 4

console.log(`This is episode ${episode}`)
episode = episode + 1
console.log(`Next episode is ${episode}`)

let favoriteDroid //Any
favoriteDroid = 'bb-8'
favoriteDroid = 10
console.log(`My favourite droid is ${favoriteDroid}`)

let isEnoughToBeatMF = function (parsecs: number): boolean{
    return parsecs < 12
}

let distance = 4 

console.log(`Is ${distance} parsecs enough to beat Millennnium Falcon? ${isEnoughToBeatMF(distance) ? 'Yes' : 'No'}`)

let calling = (name: String) => console.log(`Do you copy?, ${name}`)
calling('R2')

function increment (speed: number, inc: number = 1){
    return speed + inc
}

console.log(`inc(5, 2) = ${increment(5,2)}`)
console.log(`inc(5, 1) = ${increment(5,1)}`)
console.log(`inc(5) = ${increment(5)}`)