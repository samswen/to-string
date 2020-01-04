# to-string

enable converting object to string by removing circular reference

# how to install

    npm install @samwen/to-string --save

# how to use

    const to_string = require('@samwen/to_string');

    const b = { name: 'b' };
    const a = { name: 'a', reference_to: b};
    b['reference_to'] = a;

    // a has circular reference
    const s = to_string(a);
    