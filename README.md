## About

hirez-signature-api is a helper for [Smite/Paladins/RealmRoyal api](https://webcdn.hirezstudios.com/hirez-studios/legal/smite-api-developer-guide.pdf).

## Usage

Using npm:

```bash
$ npm install hirez-signature-helper
```

Using yarn:

```bash
$ yarn add hirez-signature-helper
```

## Example

### JS

```js
const { HirezSignatureHelper } = require('hirez-signature-helper')
```

### TS

```ts
import { HirezSignatureHelper } from 'hirez-signature-helper'
```

### Usage

```ts
// signature and timestamp ready for use
const signature = HirezSignatureHelper.createSignature({
    hirezAuthKey: 'hirez auth key',
    hirezDevId: 'hirez dev id',
    method: 'any api method' // example: createsession
})
```

### Signature object

```js
{
  md5: '623e7b9b224924ef4d04ab68d5b2bcbe',
  timestamp: '20221118000504'
}
```
