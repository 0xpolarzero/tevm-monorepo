import { describe, expect, it } from 'vitest'
import { getMetadataPath } from './getMetadataPath.js'

describe('getMetadataPath', () => {
	const cwd = '/mock/cwd'
	const cacheDir = '.tevm'

	it('should generate correct metadata path', () => {
		const entryModuleId = 'contracts/MyContract.sol'

		const result = getMetadataPath(entryModuleId, cwd, cacheDir)

		expect(result.dir).toBe('/mock/cwd/.tevm/contracts/MyContract.sol')
		expect(result.path).toBe('/mock/cwd/.tevm/contracts/MyContract.sol/metadata.json')
	})

	it('should handle absolute paths in entryModuleId', () => {
		const entryModuleId = '/mock/cwd/contracts/MyContract.sol'

		const result = getMetadataPath(entryModuleId, cwd, cacheDir)

		expect(result.dir).toBe('/mock/cwd/.tevm/contracts/MyContract.sol')
		expect(result.path).toBe('/mock/cwd/.tevm/contracts/MyContract.sol/metadata.json')
	})

	it('should work with nested contract paths', () => {
		const entryModuleId = 'contracts/nested/deep/MyContract.sol'

		const result = getMetadataPath(entryModuleId, cwd, cacheDir)

		expect(result.dir).toBe('/mock/cwd/.tevm/contracts/nested/deep/MyContract.sol')
		expect(result.path).toBe('/mock/cwd/.tevm/contracts/nested/deep/MyContract.sol/metadata.json')
	})
})
