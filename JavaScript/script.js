let colors = ["red", "blue", "yellow", "green", "purple", "orange"]; // Creates an array with six strings

console.log(colors); // Log the array


console.log(colors.at(0)); // First color "Red"
console.log(colors.at(3)); // Fourth color "Green"
console.log(colors.at(-1)); // Last color "Orange"

console.log(colors.length); // 6


let lastColor = colors.pop(); // Using .pop
console.log(lastColor); // Orange (removed color)
console.log(colors); // ["red", "blue", "yellow", "green", "purple"] = new array  

let moreColor = ["red", "blue", "yellow", "green", "purple", "orange"];
moreColor.push("brown"); // adds brown to the end using .push
console.log(moreColor); // updated list including brown

let deleteColor = ["red", "blue", "yellow", "green", "purple", "orange"];
let primary = deleteColor.slice(0, 3); // Gets "Red, Blue and Yellow" using .slice
console.log(primary); // shows primary colours

let colorsLoop = ["red", "blue", "yellow", "green", "purple", "orange"];
for (let i = 0; i < colorsLoop.length; i++) 
    {
    console.log(colorsLoop[i]); // Logs each color one at a time
    }

let colorsArray = ["red", "blue", "yellow", "green", "purple", "orange"];
colorsArray.forEach ((value,index) => {
    console.log(`${index}: ${value}`); // Logs each color with a number list
});

let stripColors = ["red", "blue", "yellow", "green", "purple", "orange"];
let [firstColor, secondColor, ...remainderColors] = stripColors;

console.log(firstColor); // Logs the first color in the array
console.log(secondColor); // Logs the second color in the array
console.log(remainderColors); // Logs the rest of the colors in the array




