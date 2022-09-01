// const noParam = () =>{
//     return 89;
// }

// const param = noParam()
// console.log(param)


// const dividing = (num) => {
//      return num/17;
// }
// const div = dividing(100)
// console.log(div)

// const add = (num, num2) =>{
//     const add1 = num+ 7
//     const add2 = num2 + 5

//     const sum = add1 + add2;

//     if(sum % 2 === 0){
//       return true;
//     }
//     else{
//         return false;
//     }
// }

// const even = add(2,5);
// console.log(even)

// const add = (num1, num2) =>(sum=((num1+7)+(num2+5))%2 ===0 ? true: false )
// console.log(add(2,5))


const numbers = [3, 5, 7, 2];
const sqr = (numbers) =>{
    const sum = numbers.reduce((a,b) => a+b, 0)
    console.log(sum)
    const square = Math.sqrt(sum)
    console.log(square)
}

sqr(numbers)