const sumAll = function(begin, end) {
  if (typeof begin !== "number" || typeof end !== "number" || begin < 0 || end < 0 ) return "ERROR";
  if(begin > end) {
    let tmp = begin;
    begin = end;
    end = tmp;
  }

  let sum = 0;
  for(let i = begin; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
