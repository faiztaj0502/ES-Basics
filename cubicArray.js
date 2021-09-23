// const cubicArray = (data)=>{
//     const newArr=[];
//     data.forEach((element)=> {
//         const cube= element**3;
//         newArr.push(cube);
//     });
//     return newArr;
// }
// console.log(cubicArray([2, 4, 5, 7]));

const cubicArray = (data)=>{
    const newArr=[];
    data.forEach((element)=> {
        const cube=(Math.pow(element, 3));
        newArr.push(cube);
    });
    return newArr;
}
console.log(cubicArray([2, 4, 5, 7]));


// optimized code for this 

const cubicArra = (data)=> data.map(element=>(Math.pow(element, 3)));
console.log(cubicArra([2, 4, 5, 7]));