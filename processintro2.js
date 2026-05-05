//ENVIROMENT VARIABLES
//these are for windoows ->linnuk / IOS mayhave diffrent words
console.log("Path:");
let folders = process.env.PATH.split(";");
folders.forEach(folder => console.log(folder));
console.log("Temp folder:", process.env.TEMP);
console.log("Home Folder:", process.env.HOMEPATH);
console.log("Username:", process.env.USERNAME);
console.log("User Profile Folder Path:", process.env.USERPROFILE);
console.log("Application Data:", process.env.APPDATA);
console.log("Machine Name:", process.env.COMPUTERNAME);

//Pattern to use in processintro2.js
console.log("No Node Experiment :", process.env.NO_NODE_EXPERIMENT || "Development");
//if  set to true, we will not run the experiment, otherwise we will run it