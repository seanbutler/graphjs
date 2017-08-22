
"use strict";

// ----------------------------------------------------------------------------
const uuidv4 = require('uuid/v4');
// ----------------------------------------------------------------------------

module.exports = class Node {
    constructor() {
        this.uuid = uuidv4();
        this.properties = {};
    }

    set(key, val) {
        this.properties[key] = val;
    }

    get(key) {
        return this.properties[key];
    }

}

// ----------------------------------------------------------------------------
