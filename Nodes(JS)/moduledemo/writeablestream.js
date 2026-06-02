import fs from 'node:fs';

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('First line of output\n');
writeStream.write('Second line of output\n');
writeStream.end('Third line of output\n');

writeStream.on('finish', () => {
    console.log('All data has been written to output.txt');

    const content = fs.readFileSync('output.txt', 'utf-8');
    console.log('\nFile contents:');
    console.log(content);
});

writeStream.on('error', (err) => {
    console.error('Error writing to file:', err.message);
});