[**@tevm/decorators**](../README.md)

***

[@tevm/decorators](../globals.md) / EIP1193RequestOptions

# Type Alias: EIP1193RequestOptions

> **EIP1193RequestOptions** = `object`

Defined in: [eip1193/EIP1993RequestOptions.ts:29](https://github.com/evmts/tevm-monorepo/blob/main/packages/decorators/src/eip1193/EIP1993RequestOptions.ts#L29)

Options for EIP-1193 compatible JSON-RPC requests.
Controls retry behavior for network requests to Ethereum providers.

## Example

```typescript
import { EIP1193RequestOptions } from '@tevm/decorators'
import { requestEip1193 } from '@tevm/decorators'

const node = createTevmNode().extend(requestEip1193())

// Add retry options to handle network instability
const options: EIP1193RequestOptions = {
  retryCount: 3,     // Retry failed requests up to 3 times
  retryDelay: 1000   // Wait 1 second between retries
}

await node.request({
  method: 'eth_getBalance',
  params: ['0x1234...', 'latest']
}, options)
```

## Properties

### retryCount?

> `optional` **retryCount**: `number`

Defined in: [eip1193/EIP1993RequestOptions.ts:33](https://github.com/evmts/tevm-monorepo/blob/main/packages/decorators/src/eip1193/EIP1993RequestOptions.ts#L33)

***

### retryDelay?

> `optional` **retryDelay**: `number`

Defined in: [eip1193/EIP1993RequestOptions.ts:31](https://github.com/evmts/tevm-monorepo/blob/main/packages/decorators/src/eip1193/EIP1993RequestOptions.ts#L31)
