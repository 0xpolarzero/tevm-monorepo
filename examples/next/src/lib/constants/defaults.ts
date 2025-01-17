import { extractChain } from 'viem';

import { CHAINS } from '@/lib/constants/providers';

/* ----------------------------- DEFAULT VALUES ----------------------------- */
// The initial chain to use
export const DEFAULT_CHAIN = extractChain({
  chains: CHAINS,
  id: Number(1),
});

// The default caller address (or when the user clears the input)
export const DEFAULT_CALLER = `0x${'1'.repeat(40)}` as const;

// The default API key for Alchemy in case it is not provided in .env.local
export const DEFAULT_ALCHEMY_API_KEY = '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC';

/* --------------------------------- EXAMPLE -------------------------------- */
// The default example contract address
export const EXAMPLE_VALUES = {
  chain: extractChain({
    chains: CHAINS,
    id: Number(11155111), // Ethereum Sepolia
  }),
  contract: '0x1823FbFF49f731061E8216ad2467112C0469cBFD' as const,
};
