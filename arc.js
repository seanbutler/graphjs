
"use strict";

// ----------------------------------------------------------------------------
const uuidv4 = require('uuid/v4');
// ----------------------------------------------------------------------------


module.exports = class Arc {
    constructor() {
        this.uuid = uuidv4();
        this.inputNode = null;
        this.outputNode = null;

        this.properties = {};
    }

    set(key, val) {
        this.properties[key] = val;
    }

    get(key) {
        return this.properties[key];
    }

    links(inputNode, outputNode, duplex){
        this.inputNode = inputNode;
        inputNode.outputArcs.push(this);

        this.outputNode = outputNode;
        outputNode.inputArcs.push(this);
    }
}

// ----------------------------------------------------------------------------
