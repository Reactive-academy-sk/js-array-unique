# js-array-unique
Function to remove duplicated items from array and return an array with unique elements only

[![npm](https://img.shields.io/npm/v/react-multilevel-dropdown?style=plastic)](https://www.npmjs.com/package/@reactive-academy/js-array-unique)
[![NPM](https://img.shields.io/npm/l/react-keyboard-key)](https://github.com/Reactive-academy/js-array-unique/blob/main/LICENSE)
[![NPM](https://img.shields.io/npm/dy/react-keyboard-key?style=plastic)](https://www.npmjs.com/package/@reactive-academy/js-array-unique)

## Installation
```bash
npm install @reactive-academy/js-array-unique
```
```bash
yarn add @reactive-academy/js-array-unique
```

## Usage
### Array with primitive items
```javascript
import unique from 'js-array-unique';

const items = ['a', 'b', 'c', 'c', 'a'];
// output: ['a', 'b', 'c']
const uniqueItems = unique(items); 
```

### Objects in the array
```javascript
import unique from 'js-array-unique';

const items1 = [{id: 1, name: 'Patrick'}, {id: 2, name: 'John'}];
const items2 = [{id: 1, name: 'Patrick'}, {id: 1, name: 'Patrick'}, {id: 2, name: 'John'}, {id: 3, name: 'Frank'}];
// output: [{id: 1, name: 'Patrick', id: 2, name: 'John', id: 3, name: 'Frank'}]
const uniqueItems = unique([...items1, ...items2], 'id');
```
