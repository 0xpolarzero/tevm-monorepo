import { LanguageServiceHost } from "typescript";
import type typescript from "typescript/lib/tsserverlibrary";
import { Logger } from "../factories";

export type Decorator = (
	createInfo: typescript.server.PluginCreateInfo,
	ts: typeof typescript,
	logger: Logger,
) => LanguageServiceHost;