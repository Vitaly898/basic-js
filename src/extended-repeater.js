const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined){ 
    options.repeatTimes = 1}
    if (options.additionRepeatTimes === undefined){
       options.additionRepeatTimes = 1}
  if (options.separator === undefined) {
    options.separator = '+'}
  if (options.additionSeparator === undefined){
     options.additionSeparator = '|'}
     if (options.addition === undefined){
        options.addition = ''}
var result = ''; 
str = String(str);
options.addition = String(options.addition)
for (var i = 0; i < options.repeatTimes; i++) {
  result += str;
  for (var j = 0; j < options.additionRepeatTimes; j++) {
    result += options.addition;
    if (j < options.additionRepeatTimes - 1) {

     result += options.additionSeparator}
  }
  if (i <  options.repeatTimes -1 ){ 
    result += options.separator}
}
return result;
};