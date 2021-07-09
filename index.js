'use strict';

function getOnlyUniqueItems(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = function unique(inputArray, key = null) {
  if (!Array.isArray(inputArray)) {
    throw new TypeError('Function unique() expects the first argument "inputArray" to be a type of array.');
  }

  if (key !== null) {
    if (typeof key === 'string') {
      var items = [...inputArray];
      var itemsByKey = inputArray
        .map(i => i[key])
        .filter(getOnlyUniqueItems);

      return itemsByKey
        .map(itemKey => items.find(item => item[key] === itemKey));
    } else {
      throw new TypeError('Function unique() expects the second argument "key" to be a type of string.');
    }
  }

  return inputArray.filter(getOnlyUniqueItems);
};
