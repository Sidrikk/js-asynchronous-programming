import fsp from 'fs/promises';

// BEGIN
export const reverse = async (src) => {

    const data = await fsp.readFile(src, 'utf-8');

    const strings = data.trim().split('\n').reverse().join('\n');

    await fsp.writeFile(src, strings);
    const result = await fsp.readFile(src, 'utf-8');
    return result.trim().split('\n');

    
}
// END