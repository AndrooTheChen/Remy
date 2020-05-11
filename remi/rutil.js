// rutil.js
// =======
module.exports = {
    err,
    log,
    monPrint,
    mlog,
    printTimeStamp,
    warn,
};

/**
 * Convert date into readable format.
 * @param {Date} time 
 */
function printTimeStamp(time) {
    const hh = Math.floor(time / 1000 / 60 / 60);
    time -= hh * 1000 * 60 * 60;
    const mm = Math.floor(time / 1000 / 60);
    time -= mm * 1000 * 60;
    const ss = Math.floor(time / 1000);
    return `${hh}:${mm}:${ss}`;
}

/**
 * Get current time stamp.
 * @return {string} current time stamp in readable format
 */
function getTimeStamp() {
    const today = new Date();
    const date = (today.getUTCMonth() +  1) + '/' + today.getUTCDay() + '/' + today.getFullYear();
    const time = today.getUTCHours() + ':' + today.getUTCMinutes() + ':' + today.getUTCSeconds();
    return `${date} ${time}`;
}

/**
 * Build the string to print a user's monster box.
 * @param {array} monBox List containing a user's monster box
 */
function monPrint(monBox) {
    let str = `\`\`\`\n`;

    monBox.forEach((monster) => {
        str = str + `${monster}\n`;
    })

    str = str + `\`\`\``;
    return str;
}

/**
 * Log the given message with a time stamp to the console.
 * @param {string} msg Message to be logged
 */
function log(msg) {
    console.log(`[${getTimeStamp()} LOGGING] ${msg}`);
}

/**
 * Log the given message with a time stamp to the console. This
 * is used for MDB transactions
 * @param {string} msg Message to be logged
 */
function mlog(msg) {
    console.log(`[${getTimeStamp()} RemiDB LOGGING] ${msg}`);
}

/**
 * Log the given message with a time stamp to the console.
 * @param {string} msg Message to be logged
 */
function warn(msg) {
    console.log(`[${getTimeStamp()} WARNING] ${msg}`);
}

/**
 * Log the given message with a time stamp to the console.
 * @param {string} msg Message to be logged
 */
function err(msg) {
    console.log(`[${getTimeStamp()} ERROR] ${msg}`);
}