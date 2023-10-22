

// pass as argument
// pass as value for variable
// nodejs
// koajs
// graphql
//  - apollo server
// http 
//  - rest apis

//  - agimat emr
//  - kalayo monitoring service

// higher order function
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const numbers = [
    1,
    2,
    3,
    4,
    5
]

// const fifteen = inventors.filter(inventor => {
//     return inventor.first === 'Albert'
// });
//map
// const updatedInventors = numbers.map((number) => {
//     number = number + 1
//     return number
// })
// console.log(inventors)
//sort
//reduce

// console.log(fifteen)

// // unpure function
// let num1 = 0
// function setNum() {
//     num1 = 1
// }
// console.log(num1)
// setNum()
// console.log(num1)

// // pure function
// function totalSum(num1, num2) {
//     const total = num1 + num2
//     return total
// }

// function totalDiff(num1) {
//     const num2 = 3
//     const total = num1 - num2
//     return total
// }

// function concatenateWords(word1) {
//     const concatenatedWords = word1 + ' is good'
//     const lastWords = concatenatedWords + ' all the time'
//     return lastWords
// }

// const definedTotal = totalSum(1, 2)
// console.log(definedTotal)

// const definedTotalDiff = totalDiff(1)
// console.log(definedTotalDiff)

// const conc = concatenateWords('Mariel')
// console.log(conc)

// const myHeader = document.getElementById('myHeader')
// myHeader.style.color = 'red'

// named function
// myHeader.addEventListener('click', (event) => {
//     const thisElement = event.target
//     thisElement.style.color = 'yellow'
//     console.log(thisElement)
// })

// const myFunction = () => {
//     console.log('yes')
// }
// Javascript ES6
// function myFunction() {
//     console.log(this)
// }

// function anotherFunction() {
//     this.props = 'hey'
//     myFunction()
// }

// anotherFunction()


// scope
// context

// const myHeader = document.getElementById('myHeader')

// document.addEventListener('click', () => {
//     myHeader.style.color = 'red'
// })

// function addEventListener(callback) {
//     callback()
// }

// addEventListener('qweqwe')
// callback function


// console.log(document)
// myHeader.style.color = '#fff' // or hex code
// console.log(myHeader)