const data = [2, 4, 5, 7];
console.log("Using for loop...");
for (let i=0; i<data.length; i++){
console.log(data[i]);
};

console.log("Using for Each...");
data.forEach((item) => {
console.log(item**3);
});