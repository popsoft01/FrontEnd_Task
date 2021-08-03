let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);


function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)};
}
let {name} = {name: "Faraji", age: 23};
let {age} = {name: "Tulo", age:41};
console.log(name);
console.log(age)
console.log(randomPointOnCircle(2));