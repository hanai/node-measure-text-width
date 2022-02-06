# node-measure-text-width

## Install

```bash
$ npm i node-measure-text-width
```

## Usage

```js
const measureTextWidth = require("node-measure-text-width");

(async function () {
  const width = await measureTextWidth(
    "The quick brown fox jumps over the lazy dog.",
    "12px serif"
  );
  console.log(width);
})();
```
