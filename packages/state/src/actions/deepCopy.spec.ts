import { describe, expect, it } from 'bun:test'
import { EthjsAccount, EthjsAddress, hexToBytes, keccak256 } from '@tevm/utils'
import { createBaseState } from '../createBaseState.js'
import { checkpoint } from './checkpoint.js'
import { commit } from './commit.js'
import { deepCopy } from './deepCopy.js'
import { getAccount } from './getAccount.js'
import { getContractCode } from './getContractCode.js'
import { putAccount } from './putAccount.js'
import { putContractCode } from './putContractCode.js'

const deployedBytecode =
	'0x608060405234801561001057600080fd5b50600436106101425760003560e01c806370a08231116100b8578063a457c2d71161007c578063a457c2d7146103b0578063a9059cbb146103dc578063bf353dbb14610408578063cd0d00961461042e578063d505accf14610436578063dd62ed3e1461048757610142565b806370a082311461030a5780637ecebe001461033057806395d89b41146103565780639c52a7f11461035e5780639dc29fac1461038457610142565b8063313ce5671161010a578063313ce5671461025c5780633644e5151461027a578063395093511461028257806340c10f19146102ae57806354fd4d50146102dc57806365fae35e146102e457610142565b806306fdde0314610147578063095ea7b3146101c457806318160ddd1461020457806323b872dd1461021e57806330adf81f14610254575b600080fd5b61014f6104b5565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610189578181015183820152602001610171565b50505050905090810190601f1680156101b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f0600480360360408110156101da57600080fd5b506001600160a01b0381351690602001356104df565b604080519115158252519081900360200190f35b61020c610534565b60408051918252519081900360200190f35b6101f06004803603606081101561023457600080fd5b506001600160a01b0381358116916020810135909116906040013561053a565b61020c610725565b610264610749565b6040805160ff9092168252519081900360200190f35b61020c61074e565b6101f06004803603604081101561029857600080fd5b506001600160a01b0381351690602001356107ae565b6102da600480360360408110156102c457600080fd5b506001600160a01b038135169060200135610835565b005b61014f610957565b6102da600480360360208110156102fa57600080fd5b50356001600160a01b0316610974565b61020c6004803603602081101561032057600080fd5b50356001600160a01b0316610a12565b61020c6004803603602081101561034657600080fd5b50356001600160a01b0316610a24565b61014f610a36565b6102da6004803603602081101561037457600080fd5b50356001600160a01b0316610a55565b6102da6004803603604081101561039a57600080fd5b506001600160a01b038135169060200135610af2565b6101f0600480360360408110156103c657600080fd5b506001600160a01b038135169060200135610c84565b6101f0600480360360408110156103f257600080fd5b506001600160a01b038135169060200135610d55565b61020c6004803603602081101561041e57600080fd5b50356001600160a01b0316610e7a565b61020c610e8c565b6102da600480360360e081101561044c57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610eb0565b61020c6004803603604081101561049d57600080fd5b506001600160a01b0381358116916020013516611134565b6040518060400160405280600e81526020016d2230b49029ba30b13632b1b7b4b760911b81525081565b3360008181526003602090815260408083206001600160a01b03871680855290835281842086905581518681529151939490939092600080516020611259833981519152928290030190a35060015b92915050565b60015481565b60006001600160a01b0383161580159061055d57506001600160a01b0383163014155b6105a4576040805162461bcd60e51b81526020600482015260136024820152724461692f696e76616c69642d6164647265737360681b604482015290519081900360640190fd5b6001600160a01b0384166000908152600260205260409020548281101561060d576040805162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015290519081900360640190fd5b6001600160a01b03851633146106c7576001600160a01b038516600090815260036020908152604080832033845290915290205460001981146106c5578381101561069c576040805162461bcd60e51b815260206004820152601a6024820152794461692f696e73756666696369656e742d616c6c6f77616e636560301b604482015290519081900360640190fd5b6001600160a01b0386166000908152600360209081526040808320338452909152902084820390555b505b6001600160a01b038086166000818152600260209081526040808320888703905593881680835291849020805488019055835187815293519193600080516020611239833981519152929081900390910190a3506001949350505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b6000467f000000000000000000000000000000000000000000000000000000000000000a81146107865761078181611151565b6107a8565b7fc7bbf40a5fb081e6759d5d0ce2447e84427793536887332b932877b94ce51bd65b91505090565b3360009081526003602090815260408083206001600160a01b038616845290915281205481906107de9084611228565b3360008181526003602090815260408083206001600160a01b038a16808552908352928190208590558051858152905194955091936000805160206112598339815191529281900390910190a35060019392505050565b3360009081526020819052604090205460011461088e576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b038216158015906108af57506001600160a01b0382163014155b6108f6576040805162461bcd60e51b81526020600482015260136024820152724461692f696e76616c69642d6164647265737360681b604482015290519081900360640190fd5b6001600160a01b03821660009081526002602052604090208054820190556001546109219082611228565b6001556040805182815290516001600160a01b038416916000916000805160206112398339815191529181900360200190a35050565b604051806040016040528060018152602001601960f91b81525081565b336000908152602081905260409020546001146109cd576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b03811660008181526020819052604080822060019055517fdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a609190a250565b60026020526000908152604090205481565b60046020526000908152604090205481565b6040518060400160405280600381526020016244414960e81b81525081565b33600090815260208190526040902054600114610aae576040805162461bcd60e51b815260206004820152601260248201527111185a4bdb9bdd0b585d5d1a1bdc9a5e995960721b604482015290519081900360640190fd5b6001600160a01b038116600081815260208190526040808220829055517f184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b9190a250565b6001600160a01b03821660009081526002602052604090205481811015610b5b576040805162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015290519081900360640190fd5b6001600160a01b0383163314801590610b84575033600090815260208190526040902054600114155b15610c33576001600160a01b03831660009081526003602090815260408083203384529091529020546000198114610c315782811015610c08576040805162461bcd60e51b815260206004820152601a6024820152794461692f696e73756666696369656e742d616c6c6f77616e636560301b604482015290519081900360640190fd5b6001600160a01b0384166000908152600360209081526040808320338452909152902083820390555b505b6001600160a01b0383166000818152600260209081526040808320868603905560018054879003905580518681529051929392600080516020611239833981519152929181900390910190a3505050565b3360009081526003602090815260408083206001600160a01b038616845290915281205482811015610cfa576040805162461bcd60e51b815260206004820152601a6024820152794461692f696e73756666696369656e742d616c6c6f77616e636560301b604482015290519081900360640190fd5b3360008181526003602090815260408083206001600160a01b03891680855290835292819020948790039485905580518581529051929392600080516020611259833981519152929181900390910190a35060019392505050565b60006001600160a01b03831615801590610d7857506001600160a01b0383163014155b610dbf576040805162461bcd60e51b81526020600482015260136024820152724461692f696e76616c69642d6164647265737360681b604482015290519081900360640190fd5b3360009081526002602052604090205482811015610e1f576040805162461bcd60e51b81526020600482015260186024820152774461692f696e73756666696369656e742d62616c616e636560401b604482015290519081900360640190fd5b33600081815260026020908152604080832087860390556001600160a01b0388168084529281902080548801905580518781529051929392600080516020611239833981519152929181900390910190a35060019392505050565b60006020819052908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000a81565b83421115610efa576040805162461bcd60e51b815260206004820152601260248201527111185a4bdc195c9b5a5d0b595e1c1a5c995960721b604482015290519081900360640190fd5b4660007f000000000000000000000000000000000000000000000000000000000000000a8214610f3257610f2d82611151565b610f54565b7fc7bbf40a5fb081e6759d5d0ce2447e84427793536887332b932877b94ce51bd65b6001600160a01b03808b1660008181526004602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981840152808401859052948e166060860152608085018d905260a085015260c08085018c90528251808603909101815260e08501835280519082012061190160f01b6101008601526101028501959095526101228085019590955281518085039095018552610142909301905282519290910191909120915015801590611098575060018186868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611079573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b0316145b6110de576040805162461bcd60e51b815260206004820152601260248201527111185a4bda5b9d985b1a590b5c195c9b5a5d60721b604482015290519081900360640190fd5b6001600160a01b03808a166000818152600360209081526040808320948d16808452948252918290208b905581518b815291516000805160206112598339815191529281900390910190a3505050505050505050565b600360209081526000928352604080842090915290825290205481565b604080518082018252600e81526d2230b49029ba30b13632b1b7b4b760911b6020918201528151808301835260018152601960f91b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f0b1461ddc0c1d5ded79a1db0f74dae949050a7c0b28728c724b24958c27a328b818401527fad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5606082015260808101939093523060a0808501919091528251808503909101815260c0909301909152815191012090565b8082018281101561052e57600080fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a26469706673582212204174ca7efe9461957e50debebcf436a7f5badaf0bd4b64389fd2735d2369a5b264736f6c63430007060033'

describe(deepCopy.name, () => {
	it('should create a copy of the state', async () => {
		const baseState = createBaseState({
			loggingLevel: 'warn',
		})

		const address = EthjsAddress.fromString(`0x${'01'.repeat(20)}`)

		const nonce = 2n
		const balance = 420n
		const account = new EthjsAccount(nonce, balance, undefined, hexToBytes(keccak256(deployedBytecode)))

		await putAccount(baseState)(address, account)

		await putContractCode(baseState)(address, hexToBytes(deployedBytecode))

		await checkpoint(baseState)()
		await commit(baseState)()

		expect(await getAccount(baseState)(address)).toEqual(account)
		expect(await getContractCode(baseState)(address)).toEqual(hexToBytes(deployedBytecode))

		const newState = await deepCopy(baseState)()

		expect(await getAccount(baseState)(address)).toEqual(account)
		expect(await getContractCode(baseState)(address)).toEqual(hexToBytes(deployedBytecode))
		expect(await getAccount(newState)(address)).toEqual(account)
		expect(await getContractCode(newState)(address)).toEqual(hexToBytes(deployedBytecode))
	})
})
