import fs from 'fs';

BEGIN
const watch = (src, time, callback) => {

    let check;

    const foo = () => {
        fs.stat(src, (error, stats) => {
            if (error) {
                callback(error);
                clearInterval(timer);
                return;
            }
            if (check && stats.mtimeMs > check) {
                callback(null);
            }
            check = stats.mtimeMs;
        })
    }

    foo();

    const timer = setInterval(foo, time)

    return timer;
}



export default watch;
// END
