function convertToStr(input){
  if (typeof input === 'object' && input !== null){
    input = JSON.stringify(input);
    return input
}else{
    return input
}
}

function removeBrakets(inputStr){
  inputStr = convertToStr(inputStr);
  inputStr = inputStr.toLowerCase();
  inputStr = inputStr.replace(/[\[\]']+/g,'');
  return inputStr
}

str = ["example@dev.com"];
str1 = '["example@dev.com"]';
console.log(removeBrakets(str));
console.log(removeBrakets(str1));

