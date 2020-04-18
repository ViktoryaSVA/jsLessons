const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (reg, res) => {
    // res.writeHead(200, {
    //    'Content-Type': 'text/html' 
    // })

    // if (reg.url === '/') {
    //     fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
            
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // } else if (reg.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'contact.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
            
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // }
    
    let filePath = path.join(__dirname, reg.url === '/' ? 'index.html' : reg.url)
    const ext = path.extname(filePath);

    let contentType = 'text/html';
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/js'
            break
        default:
            contentType = 'text/html'
    }

    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('ERROR')
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    })
                    res.end(data);
                }
            })
        } else{
            res.writeHead(200, {
                'Content-Type': contentType
            })
            res.end(content);
        }
    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
})