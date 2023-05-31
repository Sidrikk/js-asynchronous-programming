import fsp from 'fs/promises';

// BEGIN
export const exchange = async (src1, src2) => {
    const data1 = await fsp.readFile(src1, 'utf-8');
    const data2 = await fsp.readFile(src2, 'utf-8');

    await fsp.writeFile(src1, data2);
    await fsp.writeFile(src2, data1);

}
// END