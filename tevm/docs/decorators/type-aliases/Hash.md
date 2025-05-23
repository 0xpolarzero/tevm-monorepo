[**tevm**](../../README.md)

***

[tevm](../../modules.md) / [decorators](../README.md) / Hash

# Type Alias: Hash

> **Hash** = `` `0x${string}` ``

Defined in: packages/decorators/dist/index.d.ts:437

Ethereum hash value represented as a hexadecimal string.
Used for block hashes, transaction hashes, state roots, etc.

## Example

```typescript
import { Hash } from '@tevm/decorators'

const blockHash: Hash = '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3'
const txHash: Hash = '0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060'
```
