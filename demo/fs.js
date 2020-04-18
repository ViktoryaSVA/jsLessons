const fs = require('fs');
const path = require('path');

// CREATE NEW FOLDER

// fs.mkdir(path.join(__dirname, 'test'), (err) =>{
//     if (err) {
//         throw err;
//     }

//     console.log('The folder have been created');
// })

const filePath = path.join(__dirname, 'test', 'test.txt');

// fs.writeFile(filePath, 'hello', (err) => {
//     if (err){
//         throw err;
//     }

//     console.log('Succes')
    
//     fs.appendFile(filePath, '\nhello111', (err) => {
//         if (err){
//             throw err;
//         }

//         console.log('Succes')
//     })
// })
// fs.readFile(filePath, 'utf-8', (err, content) => {
//     if(err) {
//         throw err;
//     }
//     console.log(content);
//     // const data = Buffer.from(content);
//     // console.log('Content: ', data.toString());

// })
// CREATE NEW FILE
// const events = path.join(__dirname, 'events.js');
// fs.writeFile(events, '', (err) => {
//     if (err){
//         throw err;
//     }

//     console.log("Succes");
// })