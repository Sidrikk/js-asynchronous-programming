import fs from 'fs';

// BEGIN
const print = (src) => {
    const data = fs.readFileSync(src, 'utf-8');
    console.log(data);
}


export default print;
// END
