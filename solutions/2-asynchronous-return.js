import fs from 'fs';

// BEGIN
const write = (src, data, callback) => {
    // const content = fs.readFileSync(src, 'utf-8');
    fs.writeFileSync(src, data);
    callback();
}

export default write;
// END