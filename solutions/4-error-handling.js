import fs from 'fs';

// BEGIN

export const move = (srcPath, copyPath, callback) => {

    fs.readFile(srcPath, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
    
        fs.writeFile(copyPath, data, (err) => {
            if (err) {
                callback(err);
                return;
            }
            fs.unlink(srcPath, (err) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null);
            });
            
        });
    });
};
// END
