function newArray(array){
    return array.reverse()
}
// function reversal(array ,start, end){
    // for (let i =0; i < array.length; i++){
    //     if
    //     while(start < end){
    //         let temp = array[start]
    //         array[start] = array[end]
    //         array[end] = temp
    //         start++
    //         end--
    //        return temp;
    //     }
    // let labels = [];
    // repeat(5, i => {labels.push(`Unit ${i + 1}`);});
    // console.log(labels);
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeat(3, console.log)

// }
// let a = [1,2,3,4,5]
// console.log(reversal(a,0,array.length-1))
// console.log(b)