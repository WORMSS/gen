# @wormss/gen
Because I am lazy when I am making a simple function into a generator

## Usage
Give it any function that will return a value or (null | undefined). Once the null or undefined is encountered, the generate exits.

```js
const { gen } = require('@wormss/gen');

const reg = /r[aei]g/g;
for ( const match of gen(() => reg.exec('ragregrig') ) {
  // only valid matches make it here
}
```

Or, because I am doing a lot of regular expression looping, I made an even lazier function.
This will upgrade the regexp to a global version

```js
const { genReg } = require('@wormss/gen');

for ( const match of genReg('r[aei]g', 'ragregrig') ) {
  // only valid matches make it here
}
```

```js
const reg = /r[aei]g/; // note the non global, this is fine.
for ( const match of genReg(reg, 'ragregrig') ) {
  // only valid matches make it here
}
```
