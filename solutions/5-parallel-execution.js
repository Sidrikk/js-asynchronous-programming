import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (src, callback) => {

    let size = 0;

    fs.readdir(src, (error, files) => {
        if (error) {
            callback(error);
            return;
        }

        async.map(files, (file, callback) => {
            const filePath = path.join(src, file);
            fs.stat(filePath, (error, stats) => {
                if (error) {
                    callback(error);
                    return;
                }
                if (stats.isFile()) {
                    callback(null, stats.size);
                } else {
                    callback(null, 0);
                }
            })
        }, (error, sizes) => {
            if (error) {
                callback(error);
                return;
            }
            const directorySize = sizes.reduce((sum, size) => sum + size, 0);
            callback(null, directorySize);
        })
    })

}
// END
