import fsp from 'fs/promises';

// BEGIN
export const getTypes = (srcs) => {
    const result = srcs.map(src => {
        return fsp.stat(src).then((stats) => {
            if (stats.isDirectory()) {
                return 'directory';
            } else {
                return 'file';
            }
        }).catch(() => null);
    })
    return Promise.all(result);
}
// END