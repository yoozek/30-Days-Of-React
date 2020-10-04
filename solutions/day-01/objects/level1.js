const dog = {}
dog.name = 'Burek'
dog.legs = 4
dog.color = 'White'
dog.bark = () => 'woof woof'

console.log(dog)
console.log(dog.name, dog.legs, dog.color, dog.bark())
dog.breed = 'Jack Russel Terrier'
dog.getDogInfo = () => `${dog.name}, ${dog.color}, ${dog.breed}`
console.log(dog.getDogInfo())