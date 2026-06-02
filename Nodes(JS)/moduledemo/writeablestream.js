const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('First line of output\n');
writeStream.write('Second line of output\n');
writeStream.end('Third line of the output\n');

//Singnal that no more data will be written
writeStram.end('Final line - stream closed after this\n');

writeStream.on('finish', () => {
    console.log('All data has been written to output.txt');

    //Verify by reading the file
    const content = fs.readFileSync('output.txt', 'utf-8');
    console.log('\nFile contents:');
    console.log(content);
});

writeStream.on('error', (err) => {
    console.error('Error writing to file:', err.message);
});