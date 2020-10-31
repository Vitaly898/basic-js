const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type){
      this.type = type
  }
  encrypt(message, key) {
  if (typeof message != 'string' || typeof key != 'string'){
  throw new UserException("Error");
 }
  let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  message = message.toUpperCase()
  key = key.toUpperCase()
  if (key.length < message.length){
    for (let j = 0; j < message.length; j++){
     key += key[j]
    }
  }
  let result = ''
  for (let i = 0, x = 0; i < message.length; i++){   
    let c = ''
    if (a.includes(message[i]) == false) {                
      c = message[i];
      result += c
      continue
    }                      
    c = (a.indexOf(message[i])+a.indexOf(key[x])) % a.length
    result += a[c]
    x += 1
  }
  if (this.type != false){
    return result
  }
  return result.split('').reverse().join('')
  }   
  decrypt(message, key) {
    if (typeof message != 'string' || typeof key != 'string'){
      throw new UserException("Error");
    }
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    message = message.toUpperCase()
    key = key.toUpperCase()
    if (key.length < message.length){
      for (let j = 0; j <= message.length; j++){
       key += key[j]
      }
    }
    let result = ''
    let x = 0
    for (let i = 0; i < message.length; i++){
      let c = ''
      if (a.includes(message[i]) == false) {
        c = message[i];
        result += c
        continue
      }
      c = (a.indexOf(message[i])+a.length - a.indexOf(key[x])) % a.length
      result += a[c]
      x += 1
    }
    if (this.type != false){
      return result
    }
    return result.split('').reverse().join('')
  }
}

module.exports = VigenereCipheringMachine;