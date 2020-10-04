//1
import {webTechs} from './../../webTechs.js'
import {countries} from './../../countries.js'

//2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace('.','').replace(',', '').split(' ')
console.log(words)
console.log(words.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

// 4
if(countries.indexOf('Ethiopia') != -1) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

//5 
if(webTechs.indexOf('Sass') != -1) {
    console.log('Sass is a CSS preprocessor')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

//6 
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)