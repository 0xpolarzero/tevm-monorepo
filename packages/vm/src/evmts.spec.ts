import { EVMts } from './evmts.js'
import { DaiContract } from './test/DaiContract.sol.js'
import { describe, expect, it } from 'vitest'

const contractAddress = '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1'

const forkConfig = {
	url: 'https://mainnet.optimism.io',
	blockTag: 111791332n,
}

describe('EVMts should create a local vm in JavaScript', () => {
	describe('EVMts.prototype.runScript', () => {
		it('should execute scripts based on their bytecode and return the result', async () => {
			const evmts = await EVMts.create()
			const res = await evmts.runScript(
				DaiContract.script.balanceOf(
					'0x00000000000000000000000000000000000000ff',
				),
			)
			expect(res.data).toBe(0n)
			expect(res.gasUsed).toBe(2447n)
			expect(res.logs).toEqual([])
		})
	})

	describe('EVMts.prototype.runContractCall', () => {
		it('should fork a network and then execute a contract call', async () => {
			const evmts = await EVMts.create({ fork: forkConfig })
			const res = await evmts.runContractCall(
				DaiContract.read.balanceOf(
					'0x00000000000000000000000000000000000000ff',
					{
						contractAddress,
					},
				),
			)
			expect(res.data).toBe(0n)
			expect(res.gasUsed).toBe(2447n)
			expect(res.logs).toEqual([])
		})
	})

	describe('EVMts.prototype.putAccount', () => {
		it('should insert a new account with eth into the state', async () => {
			const evmts = await EVMts.create({ fork: forkConfig })
			const balance = 0x11111111n
			const account = await evmts.putAccount({
				account: '0xff420000000000000000000000000000000000ff',
				balance,
			})
			expect(account.balance).toBe(balance)
		})
	})

	describe('EVMts.prototype.putContractCode', () => {
		it('should insert a new contract with bytecode', async () => {
			const evmts = await EVMts.create({ fork: forkConfig })
			const code = await evmts.putContractCode({
				bytecode: DaiContract.bytecode,
				contractAddress: '0xff420000000000000000000000000000000000ff',
			})
			expect(code).toHaveLength(4782)
		})
	})
})
