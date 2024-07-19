// File system

const fs = require('fs');

fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data.toString());
})

fs.writeFile('./docs/blog1.txt', 'hello, again', () => {
    console.log('file was written');
})

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}
// deleting file

if (fs.existsSync('./docs/delete.txt')) {
    fs.unlink('./docs/delete.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}

// read stream

const readStream = fs.createReadStream('./docs/blog2.txt',{encoding:'utf8'});
const writeStream = fs.createWriteStream('./docs/blog3.txt')

readStream.on('data', (chunk) => {
    console.log('....new chunk ......');
    console.log(chunk.toString());
    // writeStream.write('\nnew chunk\n');
    writeStream.write(chunk)
})