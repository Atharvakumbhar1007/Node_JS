const buf1 = Buffer.from("Hello from Node.js");
console.log("From string:", buf1);
console.log("Length in bytes:",buf1.length);
console.log("In text: ",buf1.toString());

const buf2 = Buffer.alloc([10,45,25,75,95]); //allocates a buffer of 10 bytes
console.log("From number array:", buf2);
console.log("Length in bytes:",buf2.length);
console.log("In text: ",buf2.toString());