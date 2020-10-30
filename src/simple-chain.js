const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain:[],
  getLength() {
    
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined){
      this.chain.push(`()`)}
      else{this.chain.push(`( ${value} )`)
    }
    return this
      
  },
  removeLink(position) {
  if(typeof(position) !== 'number' || position < 0 || position > this.getLength() || parseInt(position,10) !==position){
    this.chain = []
    throw new Error('wrong position')
  }
    else{
   this.chain.splice(position-1,1)}
   return this
  },
  
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
   result =  this.chain.join('~~')
   this.chain = []
    return result
  }
};

module.exports = chainMaker;
