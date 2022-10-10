const ftoc = function(tFarengate) {
  let tCelsius = (tFarengate - 32)*(5/9); 
  tCelsius = Math.round(tCelsius*10)/10;
  return tCelsius;
};

const ctof = function(tCelsius) {
  let tFarengate = (tCelsius*(9/5) + 32);
  tFarengate = Math.round(tFarengate*10)/10;
  return tFarengate;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
