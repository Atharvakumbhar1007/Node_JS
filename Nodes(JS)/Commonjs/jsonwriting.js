const fs = require("fs/promises");
async function saveConfig(){
    const config = {
        appName: "Some App",
        port:3456,
        debug: false,
        allowedOrigins: ["http://localhost:3000", "http://example.com"]
    };

    const json = JSON.stringify(config, null, 4); 
    //// Pretty print with 2 spaces
    aw
}