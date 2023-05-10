import { Logger } from '../types'
import { FoundryToml } from '../types/FoundryToml'
import { glob, globSync } from 'glob'
import { basename, join } from 'path'

/**
 * Gets artifacts path
 * @see https://github.com/wagmi-dev/wagmi/blob/main/packages/cli/src/plugins/foundry.ts
 */
export const resolveArtifactPathsSync = (
  solFile: string,
  projectDir: string,
  { out = 'artifacts' }: FoundryToml,
  logger: Logger,
): string[] => {
  const fileName = basename(solFile)
  const artifactsDirectory = join(projectDir, out)
  const files = globSync([`${artifactsDirectory}/**/${fileName}/*.json`])

  if (files.length === 0) {
    logger.error(`No files found for ${solFile} in ${projectDir}`)
    throw new Error('No files found')
  }

  return files
}

export const resolveArtifactPaths = async (
  solFile: string,
  projectDir: string,
  { out = 'artifacts' }: FoundryToml,
  logger: Logger,
): Promise<string[]> => {
  const fileName = basename(solFile)
  const artifactsDirectory = join(projectDir, out)
  const files = await glob([`${artifactsDirectory}/**/${fileName}/*.json`])

  if (files.length === 0) {
    logger.error(`No files found for ${solFile} in ${projectDir}`)
    throw new Error('No files found')
  }

  return files
}
