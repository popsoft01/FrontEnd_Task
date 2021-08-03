function newArray(array){
    return array.reverse()
}
function reversal(array ,start, end){
    for (let i =0; i < array.length; i++){
        if (start < end){
            let temp = array[start]
            array[start] = array[end]
            array[end] = temp
            end--
           return temp;
        }
    }
}
let a = [1,2,3,4,5]
console.log(reversal(a,0,array.length-1))
// console.log(b)