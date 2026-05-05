const name = process.argv.slice(2); //process.argv is an array that contains the command line arguments passed to the Node.js process. The first two elements are typically the path to the Node.js executable and the path to the script being executed. By using slice(2), we can get the arguments passed after those two elements.

if(!name || name == ""){
    console.log("No Name Provided");
} process.exit(1); //exit with an error code
console.log("Listing all Parameters");
//command line arguments are stored in the argv array
//0:Node
//1:processintro.js
//2: <your parameter>
