import fsp from 'fs/promises';

// BEGIN
export const touch = (src) => {
    return fsp.access(src).catch(() => fsp.writeFile(src, ''));
}
// END