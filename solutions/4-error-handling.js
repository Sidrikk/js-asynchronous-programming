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



// export const move = (source, destination, callback) => {
//   fs.readFile(source, (readErr, data) => {
//     if (readErr) {
//       callback(readErr);
//       return;
//     }
//     fs.writeFile(destination, data, writeErr => {
//       if (writeErr) {
//         callback(writeErr);
//         return;
//       }
//       fs.unlink(source, unlinkErr => {
//         if (unlinkErr) {
//           callback(unlinkErr);
//           return;
//         }
//         callback(null);
//       });
//     });
//   });
// };



// END
