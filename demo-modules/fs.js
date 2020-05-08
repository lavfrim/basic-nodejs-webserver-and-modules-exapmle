const fs = require('fs');
const path = require('path');

const newDirName = 'text-folder';

fs.mkdir(path.join(__dirname, newDirName), (error) => {
    if (error) {
        console.log(error);
        if (error.code.includes('EEXIST')) {
            console.log('-- DIR already exists')

            return;
        }

        throw error;
    }

    console.log('-- new folder created');
});

const newFileName = 'text.txt';
const filePath = path.join(__dirname, newDirName, newFileName);

function writeFileWithContnent(content) {
    fs.writeFile(filePath, content, error => {
        if (error) {
            throw error;
        }
    
        console.log(`
        -- File "${newFileName}" created
            -- at "${__dirname}/${newDirName}/${newFileName}"
            -- with "${content}"
        `);
    });
}

writeFileWithContnent('Hello Node.js from fs');
writeFileWithContnent('Hello AGAIN from fs');

const appendContent = 'Hello from appendFile fs method';

fs.appendFile(filePath, '\n' + appendContent, error => {
    if (error) {
        throw error;
    }

    console.log(`
    -- File "${newFileName}" appended
        -- at "${__dirname}/${newDirName}/${newFileName}"
        -- with "${appendContent}"
    `);
});

fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
        throw error;
    }

    console.log(`
    -- Read file ${path.parse(filePath).base}
        -- at ${filePath}
        -- content:
    """
    ${content}
    """
    `)
});
