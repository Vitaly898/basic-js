const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length()
  },
  addLink(value) {
    
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
