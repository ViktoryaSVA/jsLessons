const path = require('path');

console.log("File's name:", path.basename(__filename));

console.log("Director's name:", path.dirname(__filename));

console.log("fdfsfds:", path.extname(__filename));

console.log("Parse: ", path.parse(__filename).base);

console.log(path.join(__dirname, 'server', 'nodejs.html'));