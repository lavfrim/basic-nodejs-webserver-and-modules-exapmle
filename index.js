require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    let filePath = path.join(
        __dirname,
        'public',
        request.url === '/'
        ? 'index.html'
        : request.url
    );

    const ext = path.extname(filePath);

    let contentType;
    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        default: contentType = 'text/html';
    }

    if (!ext) {
        filePath += '.html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) { 
            fs.readFile(path.join(__dirname, 'public', 'error.html'),
            (err, data) => {
                if (err) { 
                    response.writeHead(500);
                    response.end('ERROR');
                } else {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(data);
                }
            });
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content);
        }
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
});