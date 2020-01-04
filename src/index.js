'use strict'

// remove circular reference
//
function to_string(o) {
    if (typeof o === 'string') {
        return o;
    }
    let cache = [];
    const s = JSON.stringify(o, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return;
            }
            cache.push(value);
        }
        return value;
    });
    cache = null; 
    return s;
}

module.exports = to_string;