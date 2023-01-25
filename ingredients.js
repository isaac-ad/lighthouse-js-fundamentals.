const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", 
"baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
let i = 0
while ( i < ingredients.length){
   i++
   console.log(ingredients[i]);
}
// Write a for loop that prints out the contents of ingredients:
for (let n = 0; n < ingredients.length; n++) {
    console.log(ingredients[n])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
const array = []
for (let d = ingredients.length - 1; d >= 0; d--){
    const valueAtIndex = ingredients[d]
    array.push(valueAtIndex)
}
console.log(array)



