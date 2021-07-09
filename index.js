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
      var itemsByKey = items.map(i => i[key]);

      inputArray.forEach(i => {
        if (!itemsByKey.includes(i[key])) {
          items.unshift(i);
        }
      });

      return items;
    } else {
      throw new TypeError('Function unique() expects the second argument "key" to be a type of string.');
    }
  }

  return inputArray.filter(getOnlyUniqueItems);
};
