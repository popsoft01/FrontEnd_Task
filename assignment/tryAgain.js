// function greet(who) {
//     console.log("Hello " + who + " Bye for now");
// }
// greet("micheal");
//
//
// function fibuzz(number){
//     for (let i = 0; i <= number; i++){
//         if (i % 3 === 0){
//             console.log("FiB")}
//         else if (i % 5 ===0){
//             console.log("Bizz")}
//         else if (i % 3 ===0 && i % 5===0){
//             console.log("FizbuZZ")
//         } else {
//             console.log(i)
//         }
//     }
// }
// fibuzz(30)
//
//     const cal = (sum,x ) =>{
//
//     while (x <= 10) // while x is less than or equal to 10
//     {
//         sum = sum + x; // add x to sum
//         x++; // increment x
//     }
//     console.log("The sum is: %d", sum);
//
// }
// cal(2,10)
//
// const multiply = (number) => {
//     for (var i = 1; i<= 10; i++){
//         let result = number * i;
//         console.log(number + " x " + i + " = " + result);
//     }
// }
// multiply(2)

const series = (time)=>{
    for (let i = 0; i < time;i++){
        let a = 2;
        let b = 3;
        let c = 5;
        let result = 0;
        for (let j =0; j < c;j++){
            if (j===0){
                result = result + (a + (2^j) * b);
            }else{
                result = result + ((2^j) * b);
            }
            console.log(result)
        }
    }
}
series(5)