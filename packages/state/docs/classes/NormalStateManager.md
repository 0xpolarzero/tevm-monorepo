[@tevm/state](../README.md) / [Exports](../modules.md) / NormalStateManager

# Class: NormalStateManager

The ethereum state manager implementation for running Tevm in `normal` mode.
Normal mode does not fork/proxy to a external RPC url and has no unique features
Internally this state manager gets used when no proxy or fork url is passed into Tevm client

**`See`**

 - ForkStateManager for a provider that uses forks state rather than always using latest state
 - ProxyStateManager for a provider that uses latest state rather than creating a fork

## Hierarchy

- `DefaultStateManager`

  ↳ **`NormalStateManager`**

## Implements

- [`TevmStateManagerInterface`](../interfaces/TevmStateManagerInterface.md)

## Table of contents

### Constructors

- [constructor](NormalStateManager.md#constructor)

### Properties

- [\_accountCache](NormalStateManager.md#_accountcache)
- [\_accountCacheSettings](NormalStateManager.md#_accountcachesettings)
- [\_checkpointCount](NormalStateManager.md#_checkpointcount)
- [\_codeCache](NormalStateManager.md#_codecache)
- [\_codeCacheSettings](NormalStateManager.md#_codecachesettings)
- [\_debug](NormalStateManager.md#_debug)
- [\_prefixCodeHashes](NormalStateManager.md#_prefixcodehashes)
- [\_prefixStorageTrieKeys](NormalStateManager.md#_prefixstoragetriekeys)
- [\_storageCache](NormalStateManager.md#_storagecache)
- [\_storageCacheSettings](NormalStateManager.md#_storagecachesettings)
- [\_storageTries](NormalStateManager.md#_storagetries)
- [\_trie](NormalStateManager.md#_trie)
- [common](NormalStateManager.md#common)
- [opts](NormalStateManager.md#opts)
- [originalStorageCache](NormalStateManager.md#originalstoragecache)

### Methods

- [\_getAccountTrie](NormalStateManager.md#_getaccounttrie)
- [\_getCodeDB](NormalStateManager.md#_getcodedb)
- [\_getStorageTrie](NormalStateManager.md#_getstoragetrie)
- [\_modifyContractStorage](NormalStateManager.md#_modifycontractstorage)
- [\_writeContractStorage](NormalStateManager.md#_writecontractstorage)
- [addProofData](NormalStateManager.md#addproofdata)
- [checkpoint](NormalStateManager.md#checkpoint)
- [clearCaches](NormalStateManager.md#clearcaches)
- [clearContractStorage](NormalStateManager.md#clearcontractstorage)
- [commit](NormalStateManager.md#commit)
- [deepCopy](NormalStateManager.md#deepcopy)
- [deleteAccount](NormalStateManager.md#deleteaccount)
- [dumpCanonicalGenesis](NormalStateManager.md#dumpcanonicalgenesis)
- [dumpStorage](NormalStateManager.md#dumpstorage)
- [dumpStorageRange](NormalStateManager.md#dumpstoragerange)
- [flush](NormalStateManager.md#flush)
- [generateCanonicalGenesis](NormalStateManager.md#generatecanonicalgenesis)
- [getAccount](NormalStateManager.md#getaccount)
- [getAccountAddresses](NormalStateManager.md#getaccountaddresses)
- [getContractCode](NormalStateManager.md#getcontractcode)
- [getContractStorage](NormalStateManager.md#getcontractstorage)
- [getProof](NormalStateManager.md#getproof)
- [getStateRoot](NormalStateManager.md#getstateroot)
- [hasStateRoot](NormalStateManager.md#hasstateroot)
- [modifyAccountFields](NormalStateManager.md#modifyaccountfields)
- [putAccount](NormalStateManager.md#putaccount)
- [putContractCode](NormalStateManager.md#putcontractcode)
- [putContractStorage](NormalStateManager.md#putcontractstorage)
- [revert](NormalStateManager.md#revert)
- [setStateRoot](NormalStateManager.md#setstateroot)
- [shallowCopy](NormalStateManager.md#shallowcopy)
- [verifyProof](NormalStateManager.md#verifyproof)
- [fromProof](NormalStateManager.md#fromproof)

## Constructors

### constructor

• **new NormalStateManager**(`opts?`): [`NormalStateManager`](NormalStateManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `NormalStateManagerOpts` |

#### Returns

[`NormalStateManager`](NormalStateManager.md)

#### Overrides

DefaultStateManager.constructor

#### Defined in

[packages/state/src/NormalStateManager.ts:37](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/NormalStateManager.ts#L37)

## Properties

### \_accountCache

• `Protected` `Optional` **\_accountCache**: `AccountCache`

#### Inherited from

DefaultStateManager.\_accountCache

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:118

___

### \_accountCacheSettings

• `Protected` `Readonly` **\_accountCacheSettings**: `CacheSettings`

#### Inherited from

DefaultStateManager.\_accountCacheSettings

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:128

___

### \_checkpointCount

• `Protected` **\_checkpointCount**: `number`

#### Inherited from

DefaultStateManager.\_checkpointCount

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:132

___

### \_codeCache

• `Protected` `Optional` **\_codeCache**: `CodeCache`

#### Inherited from

DefaultStateManager.\_codeCache

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:120

___

### \_codeCacheSettings

• `Protected` `Readonly` **\_codeCacheSettings**: `CacheSettings`

#### Inherited from

DefaultStateManager.\_codeCacheSettings

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:130

___

### \_debug

• `Protected` **\_debug**: `Debugger`

#### Inherited from

DefaultStateManager.\_debug

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:117

___

### \_prefixCodeHashes

• `Protected` `Readonly` **\_prefixCodeHashes**: `boolean`

#### Inherited from

DefaultStateManager.\_prefixCodeHashes

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:126

___

### \_prefixStorageTrieKeys

• `Protected` `Readonly` **\_prefixStorageTrieKeys**: `boolean`

#### Inherited from

DefaultStateManager.\_prefixStorageTrieKeys

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:127

___

### \_storageCache

• `Protected` `Optional` **\_storageCache**: `StorageCache`

#### Inherited from

DefaultStateManager.\_storageCache

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:119

___

### \_storageCacheSettings

• `Protected` `Readonly` **\_storageCacheSettings**: `CacheSettings`

#### Inherited from

DefaultStateManager.\_storageCacheSettings

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:129

___

### \_storageTries

• `Protected` **\_storageTries**: `Object`

#### Index signature

▪ [key: `string`]: `Trie`

#### Inherited from

DefaultStateManager.\_storageTries

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:123

___

### \_trie

• `Protected` **\_trie**: `Trie`

#### Inherited from

DefaultStateManager.\_trie

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:122

___

### common

• `Readonly` **common**: `Common`

#### Inherited from

DefaultStateManager.common

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:131

___

### opts

• `Protected` `Optional` `Readonly` **opts**: `NormalStateManagerOpts`

#### Defined in

[packages/state/src/NormalStateManager.ts:37](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/NormalStateManager.ts#L37)

___

### originalStorageCache

• **originalStorageCache**: `OriginalStorageCache`

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[originalStorageCache](../interfaces/TevmStateManagerInterface.md#originalstoragecache)

#### Inherited from

DefaultStateManager.originalStorageCache

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:121

## Methods

### \_getAccountTrie

▸ **_getAccountTrie**(): `Trie`

Gets the storage trie for an account from the storage
cache or does a lookup.

#### Returns

`Trie`

#### Inherited from

DefaultStateManager.\_getAccountTrie

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:196

___

### \_getCodeDB

▸ **_getCodeDB**(): `DB`\<`Uint8Array`, `Uint8Array`\>

Gets the storage trie for an account from the storage
cache or does a lookup.

#### Returns

`DB`\<`Uint8Array`, `Uint8Array`\>

#### Inherited from

DefaultStateManager.\_getCodeDB

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:202

___

### \_getStorageTrie

▸ **_getStorageTrie**(`addressOrHash`, `account?`): `Trie`

Gets the storage trie for an account from the storage
cache or does a lookup.

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrHash` | `Address` \| `Uint8Array` |
| `account?` | `Account` |

#### Returns

`Trie`

#### Inherited from

DefaultStateManager.\_getStorageTrie

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:190

___

### \_modifyContractStorage

▸ **_modifyContractStorage**(`address`, `account`, `modifyTrie`): `Promise`\<`void`\>

Modifies the storage trie of an account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address of the account whose storage is to be modified |
| `account` | `Account` | - |
| `modifyTrie` | (`storageTrie`: `Trie`, `done`: `Function`) => `void` | Function to modify the storage trie of the account |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultStateManager.\_modifyContractStorage

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:219

___

### \_writeContractStorage

▸ **_writeContractStorage**(`address`, `account`, `key`, `value`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `Address` |
| `account` | `Account` |
| `key` | `Uint8Array` |
| `value` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultStateManager.\_writeContractStorage

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:220

___

### addProofData

▸ **addProofData**(`proof`, `safe?`): `Promise`\<`void`\>

Add proof(s) into an already existing trie

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proof` | `Proof` \| `Proof`[] | The proof(s) retrieved from `getProof` |
| `safe?` | `boolean` | - |

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultStateManager.addProofData

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:286

___

### checkpoint

▸ **checkpoint**(): `Promise`\<`void`\>

Checkpoints the current state of the StateManager instance.
State changes that follow can then be committed by calling
`commit` or `reverted` by calling rollback.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[checkpoint](../interfaces/TevmStateManagerInterface.md#checkpoint)

#### Inherited from

DefaultStateManager.checkpoint

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:241

___

### clearCaches

▸ **clearCaches**(): `void`

Clears all underlying caches

#### Returns

`void`

#### Inherited from

DefaultStateManager.clearCaches

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:361

___

### clearContractStorage

▸ **clearContractStorage**(`address`): `Promise`\<`void`\>

Clears all storage entries for the account corresponding to `address`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address to clear the storage of |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[clearContractStorage](../interfaces/TevmStateManagerInterface.md#clearcontractstorage)

#### Inherited from

DefaultStateManager.clearContractStorage

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:235

___

### commit

▸ **commit**(): `Promise`\<`void`\>

Commits the current change-set to the instance since the
last call to checkpoint.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[commit](../interfaces/TevmStateManagerInterface.md#commit)

#### Inherited from

DefaultStateManager.commit

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:246

___

### deepCopy

▸ **deepCopy**(): `Promise`\<[`NormalStateManager`](NormalStateManager.md)\>

Returns a new instance of the ForkStateManager with the same opts and all storage copied over

#### Returns

`Promise`\<[`NormalStateManager`](NormalStateManager.md)\>

#### Defined in

[packages/state/src/NormalStateManager.ts:58](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/NormalStateManager.ts#L58)

___

### deleteAccount

▸ **deleteAccount**(`address`): `Promise`\<`void`\>

Deletes an account from state under the provided `address`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address of the account which should be deleted |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[deleteAccount](../interfaces/TevmStateManagerInterface.md#deleteaccount)

#### Inherited from

DefaultStateManager.deleteAccount

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:170

___

### dumpCanonicalGenesis

▸ **dumpCanonicalGenesis**(): `Promise`\<[`TevmState`](../modules.md#tevmstate)\>

Dumps the state of the state manager as a [TevmState](../modules.md#tevmstate)

#### Returns

`Promise`\<[`TevmState`](../modules.md#tevmstate)\>

#### Defined in

[packages/state/src/NormalStateManager.ts:184](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/NormalStateManager.ts#L184)

___

### dumpStorage

▸ **dumpStorage**(`address`): `Promise`\<`StorageDump`\>

Dumps the RLP-encoded storage values for an `account` specified by `address`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | The address of the `account` to return storage for |

#### Returns

`Promise`\<`StorageDump`\>

- The state of the account as an `Object` map.
Keys are are the storage keys, values are the storage values as strings.
Both are represented as hex strings without the `0x` prefix.

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[dumpStorage](../interfaces/TevmStateManagerInterface.md#dumpstorage)

#### Inherited from

DefaultStateManager.dumpStorage

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:314

___

### dumpStorageRange

▸ **dumpStorageRange**(`address`, `startKey`, `limit`): `Promise`\<`StorageRange`\>

Dumps a limited number of RLP-encoded storage values for an account specified by `address`,
starting from `startKey` or greater.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | The address of the `account` to return storage for. |
| `startKey` | `bigint` | The bigint representation of the smallest storage key that will be returned. |
| `limit` | `number` | The maximum number of storage values that will be returned. |

#### Returns

`Promise`\<`StorageRange`\>

- A StorageRange object that will contain at most `limit` entries in its `storage` field.
The object will also contain `nextKey`, the next (hashed) storage key after the range included in `storage`.

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[dumpStorageRange](../interfaces/TevmStateManagerInterface.md#dumpstoragerange)

#### Inherited from

DefaultStateManager.dumpStorageRange

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:324

___

### flush

▸ **flush**(): `Promise`\<`void`\>

Writes all cache items to the trie

#### Returns

`Promise`\<`void`\>

#### Inherited from

DefaultStateManager.flush

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:255

___

### generateCanonicalGenesis

▸ **generateCanonicalGenesis**(`state`): `Promise`\<`void`\>

Loads a [TevmState](../modules.md#tevmstate) into the state manager

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`TevmState`](../modules.md#tevmstate) |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[generateCanonicalGenesis](../interfaces/TevmStateManagerInterface.md#generatecanonicalgenesis)

#### Overrides

DefaultStateManager.generateCanonicalGenesis

#### Defined in

[packages/state/src/NormalStateManager.ts:148](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/NormalStateManager.ts#L148)

___

### getAccount

▸ **getAccount**(`address`): `Promise`\<`undefined` \| `Account`\>

Gets the account associated with `address` or `undefined` if account does not exist

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address of the `account` to get |

#### Returns

`Promise`\<`undefined` \| `Account`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[getAccount](../interfaces/TevmStateManagerInterface.md#getaccount)

#### Inherited from

DefaultStateManager.getAccount

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:151

___

### getAccountAddresses

▸ **getAccountAddresses**(): \`0x$\{string}\`[]

Retrieves the addresses of all the accounts in the state.

#### Returns

\`0x$\{string}\`[]

An array of account addresses.

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[getAccountAddresses](../interfaces/TevmStateManagerInterface.md#getaccountaddresses)

#### Defined in

[packages/state/src/NormalStateManager.ts:45](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/NormalStateManager.ts#L45)

___

### getContractCode

▸ **getContractCode**(`address`): `Promise`\<`Uint8Array`\>

Gets the code corresponding to the provided `address`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address to get the `code` for |

#### Returns

`Promise`\<`Uint8Array`\>

-  Resolves with the code corresponding to the provided address.
Returns an empty `Uint8Array` if the account has no associated code.

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[getContractCode](../interfaces/TevmStateManagerInterface.md#getcontractcode)

#### Inherited from

DefaultStateManager.getContractCode

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:184

___

### getContractStorage

▸ **getContractStorage**(`address`, `key`): `Promise`\<`Uint8Array`\>

Gets the storage value associated with the provided `address` and `key`. This method returns
the shortest representation of the stored value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address of the account to get the storage for |
| `key` | `Uint8Array` | Key in the account's storage to get the value for. Must be 32 bytes long. |

#### Returns

`Promise`\<`Uint8Array`\>

- The storage value for the account
corresponding to the provided address at the provided key.
If this does not exist an empty `Uint8Array` is returned.

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[getContractStorage](../interfaces/TevmStateManagerInterface.md#getcontractstorage)

#### Inherited from

DefaultStateManager.getContractStorage

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:212

___

### getProof

▸ **getProof**(`address`, `storageSlots?`): `Promise`\<`Proof`\>

Get an EIP-1186 proof

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | address to get proof of |
| `storageSlots?` | `Uint8Array`[] | storage slots to get proof of |

#### Returns

`Promise`\<`Proof`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[getProof](../interfaces/TevmStateManagerInterface.md#getproof)

#### Inherited from

DefaultStateManager.getProof

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:261

___

### getStateRoot

▸ **getStateRoot**(): `Promise`\<`Uint8Array`\>

Gets the state-root of the Merkle-Patricia trie representation
of the state of this StateManager. Will error if there are uncommitted
checkpoints on the instance.

#### Returns

`Promise`\<`Uint8Array`\>

- Returns the state-root of the `StateManager`

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[getStateRoot](../interfaces/TevmStateManagerInterface.md#getstateroot)

#### Inherited from

DefaultStateManager.getStateRoot

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:298

___

### hasStateRoot

▸ **hasStateRoot**(`root`): `Promise`\<`boolean`\>

Checks whether there is a state corresponding to a stateRoot

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `Uint8Array` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[hasStateRoot](../interfaces/TevmStateManagerInterface.md#hasstateroot)

#### Inherited from

DefaultStateManager.hasStateRoot

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:334

___

### modifyAccountFields

▸ **modifyAccountFields**(`address`, `accountFields`): `Promise`\<`void`\>

Gets the account associated with `address`, modifies the given account
fields, then saves the account into state. Account fields can include
`nonce`, `balance`, `storageRoot`, and `codeHash`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address of the account to modify |
| `accountFields` | `Partial`\<`Pick`\<`Account`, ``"nonce"`` \| ``"balance"`` \| ``"storageRoot"`` \| ``"codeHash"``\>\> | Object containing account fields and values to modify |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[modifyAccountFields](../interfaces/TevmStateManagerInterface.md#modifyaccountfields)

#### Inherited from

DefaultStateManager.modifyAccountFields

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:165

___

### putAccount

▸ **putAccount**(`address`, `account`): `Promise`\<`void`\>

Saves an account into state under the provided `address`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address under which to store `account` |
| `account` | `undefined` \| `Account` | The account to store or undefined if to be deleted |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[putAccount](../interfaces/TevmStateManagerInterface.md#putaccount)

#### Inherited from

DefaultStateManager.putAccount

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:157

___

### putContractCode

▸ **putContractCode**(`address`, `value`): `Promise`\<`void`\>

Adds `value` to the state trie as code, and sets `codeHash` on the account
corresponding to `address` to reference this.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address of the `account` to add the `code` for |
| `value` | `Uint8Array` | The value of the `code` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[putContractCode](../interfaces/TevmStateManagerInterface.md#putcontractcode)

#### Inherited from

DefaultStateManager.putContractCode

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:177

___

### putContractStorage

▸ **putContractStorage**(`address`, `key`, `value`): `Promise`\<`void`\>

Adds value to the state trie for the `account`
corresponding to `address` at the provided `key`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `Address` | Address to set a storage value for |
| `key` | `Uint8Array` | Key to set the value at. Must be 32 bytes long. |
| `value` | `Uint8Array` | Value to set at `key` for account corresponding to `address`. Cannot be more than 32 bytes. Leading zeros are stripped. If it is a empty or filled with zeros, deletes the value. |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[putContractStorage](../interfaces/TevmStateManagerInterface.md#putcontractstorage)

#### Inherited from

DefaultStateManager.putContractStorage

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:230

___

### revert

▸ **revert**(): `Promise`\<`void`\>

Reverts the current change-set to the instance since the
last call to checkpoint.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[revert](../interfaces/TevmStateManagerInterface.md#revert)

#### Inherited from

DefaultStateManager.revert

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:251

___

### setStateRoot

▸ **setStateRoot**(`stateRoot`, `clearCache?`): `Promise`\<`void`\>

Sets the state of the instance to that represented
by the provided `stateRoot`. Will error if there are uncommitted
checkpoints on the instance or if the state root does not exist in
the state trie.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stateRoot` | `Uint8Array` | The state-root to reset the instance to |
| `clearCache?` | `boolean` | - |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[setStateRoot](../interfaces/TevmStateManagerInterface.md#setstateroot)

#### Inherited from

DefaultStateManager.setStateRoot

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:306

___

### shallowCopy

▸ **shallowCopy**(`downlevelCaches`): [`NormalStateManager`](NormalStateManager.md)

Returns a new instance of the ForkStateManager with the same opts

#### Parameters

| Name | Type |
| :------ | :------ |
| `downlevelCaches` | `boolean` |

#### Returns

[`NormalStateManager`](NormalStateManager.md)

#### Implementation of

[TevmStateManagerInterface](../interfaces/TevmStateManagerInterface.md).[shallowCopy](../interfaces/TevmStateManagerInterface.md#shallowcopy)

#### Overrides

DefaultStateManager.shallowCopy

#### Defined in

[packages/state/src/NormalStateManager.ts:112](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/NormalStateManager.ts#L112)

___

### verifyProof

▸ **verifyProof**(`proof`): `Promise`\<`boolean`\>

Verify an EIP-1186 proof. Throws if proof is invalid, otherwise returns true.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proof` | `Proof` | the proof to prove |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

DefaultStateManager.verifyProof

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:291

___

### fromProof

▸ **fromProof**(`proof`, `safe?`, `opts?`): `Promise`\<`DefaultStateManager`\>

Create a StateManager and initialize this with proof(s) gotten previously from getProof
This generates a (partial) StateManager where one can retrieve all items from the proof

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `proof` | `Proof` \| `Proof`[] | Either a proof retrieved from `getProof`, or an array of those proofs |
| `safe?` | `boolean` | Wether or not to verify that the roots of the proof items match the reported roots |
| `opts?` | `DefaultStateManagerOpts` | - |

#### Returns

`Promise`\<`DefaultStateManager`\>

A new DefaultStateManager with elements from the given proof included in its backing state trie

#### Inherited from

DefaultStateManager.fromProof

#### Defined in

node_modules/.pnpm/@ethereumjs+statemanager@2.2.2/node_modules/@ethereumjs/statemanager/dist/esm/stateManager.d.ts:271
