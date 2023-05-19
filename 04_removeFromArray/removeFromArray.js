const removeFromArray = function(list, ...removeItems) {
  return list.filter(item => !removeItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
