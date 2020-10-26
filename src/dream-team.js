const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let nameOfDreamTeam = '';
  if(!Array.isArray(members)){
    return false
  }else{
   members.forEach(item => {
   if (typeof(item) === 'string'){nameOfDreamTeam+=item.trim().slice(0,1).toUpperCase()}
    })
  }
  return nameOfDreamTeam.split('').sort().join('')
}

