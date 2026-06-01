/*Event driven architecture
some event occurs - my code will run
in window -> you insterted a USB Drive -> an explorer will be shown 
virus found - anti virus will clean
file downloaded - file manager will show the file */

import EventEmitter from 'node:events';

const myEmitter = new EventEmitter();

myEmitter.on("greet", () => {
    console.log("Hello from Event");

});
myEmitter.on("login", (username, timestamp) => {
    console.log(`User ${username} logged in at ${timestamp}`);
});
// emitting the event ->
console.log("Raising the event");
myEmitter.emit("greet");
myEmitter.emit("login", "Amit" , new Date().toLocaleString());
console.log("Event Emitted");