let mainName: string = 'Jordan'
//FUNCTIONS
//não há retorno
function useTheForce (name: string):void {
    console.log(`Use the force ${name}`)
}
useTheForce(mainName)
//retorno boolean caso o numero seja menor que 12
let shortestRun = function (parsecs: number ):boolean {
    return parsecs < 12
}
console.log(shortestRun(8))
console.log(shortestRun(13))
//console.log(shortestRun('a')) IDE aponta erro

//ARROW FUNCTIONS
let ships: any[] = [
    {id: 1, type: 'TieFighter', return: true},
    {id: 2, type: 'Null', return: false},
    {id: 3, type: 'TieFighter', return: true}
]
//filtro de array com função anônima
let tieFighters = ships.filter(function(ship){
    return ship.type === 'TieFighter'
}
)
console.log(tieFighters)
//com arrow function
let ties = ships.filter(ship => ship.type === 'TieFighter')
console.log(ties)
//declarando que variável será uma função
let call: (name: string) => void
call = name => console.log(`Do you copy, ${name}`)
call(mainName)
//call(10) erro por não ser do tipo tipado (que redundante)

//PARAMETROS OBRIGATÓRIOS
//função que incrementa um elemento com outros valores

function inc(n1: number, n2: number, n3?: number):number{
    let nx = n3 || 2
    return n1 + n2 + nx
}
//inc(5)
console.log(inc(5, 1))
console.log(inc(5, 1, 3))
//somar elementos de um array de numeros
function countJedis (jedis: number[]):number{
    return jedis.reduce((a,b) => a + b, 0)
}
console.log(countJedis([2,3,4,5,6]))
//parâmetros rest
function countJedis2(...jedis: number []):number {
    return jedis.reduce((a,b) => a + b, 0)
}
console.log(countJedis2(2,3,4,5,6,7))

