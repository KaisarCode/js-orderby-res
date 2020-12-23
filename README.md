# OrderbyRes
[js] Orderby results array

### Install
```
npm install kc-orderby-res
```

### Use
```js
var orderbyRes = require('kc-orderby-res');
var arr = [
    { k: 'B'},
    { k: 'C'},
    { k: 'A'},
    { k: 'D'}
];
var res = orderbyRes(arr, 'k');
console.log(res);
```
