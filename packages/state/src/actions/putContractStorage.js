import { UnexpectedInternalServerError } from '@tevm/errors'
import { getAccount } from './getAccount.js'

/**
 * @param {Uint8Array} bytes
 * @returns {Uint8Array}
 */
const stripZeros = (bytes) => {
	if (!(bytes instanceof Uint8Array)) {
		throw new UnexpectedInternalServerError('Unexpected type')
	}
	return bytes.slice(bytes.findIndex(/** @param {number} entry*/ (entry) => entry !== 0))
}
/**
 * Adds value to the cache for the `account`
 * corresponding to `address` at the provided `key`.
 * Cannot be more than 32 bytes. Leading zeros are stripped.
 * If it is empty or filled with zeros, deletes the value.
 * @type {import("../state-types/index.js").StateAction<'putContractStorage'>}
 */
export const putContractStorage = (baseState) => async (address, key, value) => {
	if (key.length !== 32) {
		throw new UnexpectedInternalServerError(`Storage key must be 32 bytes long. Received ${key}`)
	}

	const account = await getAccount(baseState)(address)
	if (!account) {
		throw new UnexpectedInternalServerError(
			'cannot putContractStorage on non existing acccount! Consider checking if account exists first',
		)
	}
	baseState.caches.storage.put(address, key, stripZeros(value))
}
