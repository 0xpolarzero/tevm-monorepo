import type {
	CallHandler,
	ContractHandler,
	DumpStateHandler,
	// DebugTraceCallHandler,
	// DebugTraceTransactionHandler,
	EthBlockNumberHandler,
	EthCallHandler,
	// EthCallHandler,
	EthChainIdHandler,
	EthGasPriceHandler,
	EthGetBalanceHandler,
	EthGetCodeHandler,
	EthGetStorageAtHandler,
	GetAccountHandler,
	LoadStateHandler,
	ScriptHandler,
	SetAccountHandler,
} from '@tevm/actions-types'
import type { TevmJsonRpcRequestHandler } from '@tevm/procedures-types'

/**
 * A local EVM instance running in the browser, Bun, or Node.js. Akin to anvil or ganache. The TevmClient interface
 * is a unified interface that all Clients implement. This provides a consistent developer experience no matter how you are
 * using Tevm.
 *
 * @see {@link https://tevm.sh/learn/clients/ | TevmClient guide} for more documentation on clients
 *
 * #### JSON-RPC
 *
 * Tevm exposes a JSON-RPC interface for interacting with the EVM via the {@link TevmClient.request}
 *
 * @example
 * ```typescript
 * import {createMemoryClient, type Tevm} from 'tevm'
 *
 * const tevm: Tevm = createMemoryClient()
 *
 * await tevm.request({
 *   method: 'eth_blockNumber',
 *   params: [],
 *   id: 1,
 *   jsonrpc: '2.0',
 * }) // 0n
 * ```
 *
 * #### Actions
 *
 * TevmClient exposes a higher level `actions` based api similar to {@link https://viem.sh | viem} for interacting with TevmClient in a typesasafe
 * ergonomic way.
 *
 * @example
 * ```typescript
 * // same as eth_blockNumber example
 * const account = await tevm.account({address: `0x${'0'.repeat(40)}`})
 * console.log(account.balance) // 0n
 * ```
 *
 * #### Ethereum actions
 *
 * Ethereum actions are namespaced under {@link TevmClient.eth}
 *
 * @example
 * ```typescript
 * const blockNumber = await tevm.eth.blockNumber()
 * console.log(blockNumber) // 0n
 * ```
 *
 * #### Anvil hardhat and ganache compatibility
 *
 * Will have anvil_* ganache_* and hardhat_* JSON-RPC compatibility in future versions
 */
export type TevmClient = {
	/**
	 * Request handler for JSON-RPC requests. Most users will want to use the [`actions` api](https://tevm.sh/learn/actions/)
	 * instead of this method directly
	 * @example
	 * ```typescript
	 * const blockNumberResponse = await tevm.request({
	 *   method: 'eth_blockNumber',
	 *   params: []
	 *   id: 1
	 *   jsonrpc: '2.0'
	 * })
	 * const accountResponse = await tevm.request({
	 *   method: 'tevm_getAccount',
	 *   params: [{address: '0x123...'}],
	 *   id: 1,
	 *   jsonrpc: '2.0',
	 * })
	 * ```
	 */
	request: TevmJsonRpcRequestHandler
	// Tevm Handlers
	/**
	 * Executes scripts against the Tevm EVM. By default the script is sandboxed
	 * and the state is reset after each execution unless the `persist` option is set
	 * to true.
	 * @example
	 * ```typescript
	 * const res = tevm.script({
	 *   deployedBytecode: '0x6080604...',
	 *   abi: [...],
	 *   function: 'run',
	 *   args: ['hello world']
	 * })
	 * ```
	 * Contract handlers provide a more ergonomic way to execute scripts
	 * @example
	 * ```typescript
	 * ipmort {MyScript} from './MyScript.s.sol'
	 *
	 * const res = tevm.script(
	 *    MyScript.read.run('hello world')
	 * )
	 * ```
	 */
	script: ScriptHandler
	/**
	 * Sets the state of a specific ethereum address
	 * @example
	 * import {parseEther} from 'tevm'
	 *
	 * await tevm.setAccount({
	 *  address: '0x123...',
	 *  deployedBytecode: '0x6080604...',
	 *  balance: parseEther('1.0')
	 * })
	 */
	setAccount: SetAccountHandler
	/**
	 * Gets the state of a specific ethereum address
	 * @example
	 * const res = tevm.getAccount({address: '0x123...'})
	 * console.log(res.deployedBytecode)
	 * console.log(res.nonce)
	 * console.log(res.balance)
	 */
	getAccount: GetAccountHandler
	/**
	 * Executes a call against the VM. It is similar to `eth_call` but has more
	 * options for controlling the execution environment
	 *
	 * By default it does not modify the state after the call is complete but this can be configured.
	 * @example
	 * const res = tevm.call({
	 *   to: '0x123...',
	 *   data: '0x123...',
	 *   from: '0x123...',
	 *   gas: 1000000,
	 *   gasPrice: 1n,
	 *   skipBalance: true,
	 * }
	 *
	 */
	call: CallHandler
	/**
	 * Executes a contract call against the VM. It is similar to `eth_call` but has more
	 * options for controlling the execution environment along with a typesafe API
	 * for creating the call via the contract abi.
	 *
	 * The contract must already be deployed. Otherwise see `script` which executes calls
	 * against undeployed contracts
	 *
	 * @example
	 * const res = await tevm.contract({
	 *   to: '0x123...',
	 *   abi: [...],
	 *   function: 'run',
	 *   args: ['world']
	 *   from: '0x123...',
	 *   gas: 1000000,
	 *   gasPrice: 1n,
	 *   skipBalance: true,
	 * }
	 * console.log(res.data) // "hello"
	 */
	contract: ContractHandler
	/**
	 * Dumps the current state of the VM into a JSON-seralizable object
	 *
	 * State can be dumped as follows
	 * @example
	 * ```typescript
	 * const {state} = await tevm.dumpState()
	 * fs.writeFileSync('state.json', JSON.stringify(state))
	 * ```
	 *
	 * And then loaded as follows
	 * @example
	 * ```typescript
	 * const state = JSON.parse(fs.readFileSync('state.json'))
	 * await tevm.loadState({state})
	 * ```
	 */
	dumpState: DumpStateHandler
	/**
	 * Loads a previously dumped state into the VM
	 *
	 * State can be dumped as follows
	 * @example
	 * ```typescript
	 * const {state} = await tevm.dumpState()
	 * fs.writeFileSync('state.json', JSON.stringify(state))
	 * ```
	 *
	 * And then loaded as follows
	 * @example
	 * ```typescript
	 * const state = JSON.parse(fs.readFileSync('state.json'))
	 * await tevm.loadState({state})
	 * ```
	 */
	loadState: LoadStateHandler
	/**
	 * Standard JSON-RPC methods for interacting with the VM
	 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
	 */
	eth: {
		/**
		 * Returns the current block number
		 * Set the `tag` to a block number or block hash to get the balance at that block
		 * Block tag defaults to 'pending' tag which is the optimistic state of the VM
		 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
		 * @example
		 * const blockNumber = await tevm.eth.blockNumber()
		 * console.log(blockNumber) // 0n
		 */
		blockNumber: EthBlockNumberHandler
		/**
		 * Executes a call without modifying the state
		 * Set the `tag` to a block number or block hash to get the balance at that block
		 * Block tag defaults to 'pending' tag which is the optimistic state of the VM
		 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
		 * @example
		 * const res = await tevm.eth.call({to: '0x123...', data: '0x123...'})
		 * console.log(res) // "0x..."
		 */
		call: EthCallHandler
		/**
		 * Returns the current chain id
		 * Set the `tag` to a block number or block hash to get the balance at that block
		 * Block tag defaults to 'pending' tag which is the optimistic state of the VM
		 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
		 * @example
		 * const chainId = await tevm.eth.chainId()
		 * console.log(chainId) // 10n
		 */
		chainId: EthChainIdHandler
		/**
		 * Returns code at a given address
		 * Set the `tag` to a block number or block hash to get the balance at that block
		 * Block tag defaults to 'pending' tag which is the optimistic state of the VM
		 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
		 * @example
		 * const code = await tevm.eth.getCode({address: '0x123...'})
		 */
		getCode: EthGetCodeHandler
		/**
		 * Returns storage at a given address and slot
		 * Set the `tag` to a block number or block hash to get the balance at that block
		 * Block tag defaults to 'pending' tag which is the optimistic state of the VM
		 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
		 * @example
		 * const storageValue = await tevm.eth.getStorageAt({address: '0x123...', position: 0})
		 */
		getStorageAt: EthGetStorageAtHandler
		/**
		 * Returns the current gas price
		 * Set the `tag` to a block number or block hash to get the balance at that block
		 * Block tag defaults to 'pending' tag which is the optimistic state of the VM
		 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
		 * @example
		 * const gasPrice = await tevm.eth.gasPrice()
		 * console.log(gasPrice) // 0n
		 */
		gasPrice: EthGasPriceHandler
		/**
		 * Returns the balance of a given address
		 * Set the `tag` to a block number or block hash to get the balance at that block
		 * Block tag defaults to 'pending' tag which is the optimistic state of the VM
		 * @see {@link https://ethereum.github.io/execution-apis/api-documentation/ | JSON-RPC}
		 * @example
		 * const balance = await tevm.eth.getBalance({address: '0x123...', tag: 'pending'})
		 * console.log(gasPrice) // 0n
		 */
		getBalance: EthGetBalanceHandler
	}
}