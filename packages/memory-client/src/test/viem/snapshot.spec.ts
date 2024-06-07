import { beforeEach, describe, expect, it } from 'bun:test'
import { SimpleContract } from '@tevm/contract'
import { type TestActions, testActions } from 'viem'
import type { MemoryClient } from '../../MemoryClient.js'
import { createMemoryClient } from '../../createMemoryClient.js'

let mc: MemoryClient & TestActions

beforeEach(async () => {
	mc = createMemoryClient().extend(testActions({ mode: 'anvil' }))
	const deployResult = await mc.tevmDeploy({
		bytecode: SimpleContract.bytecode,
		abi: SimpleContract.abi,
		args: [420n],
	})
	if (!deployResult.createdAddress) {
		throw new Error('contract never deployed')
	}
	if (!deployResult.txHash) {
		throw new Error('txHash not found')
	}
	await mc.tevmMine()
})

describe('snapshot', () => {
	it.todo('should work as expected', async () => {
		expect(await mc.snapshot()).toMatchSnapshot()
	})
})
