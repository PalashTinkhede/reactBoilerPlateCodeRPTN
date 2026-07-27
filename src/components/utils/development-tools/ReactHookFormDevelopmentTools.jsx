import React from "react";
import { isProduction } from "../../../common/utilities.js";

export const ReactHookFormDevelopmentTools = isProduction
	? () => null
	: React.lazy(() =>
			import("@hookform/devtools").then((result) => ({
				default: result.DevTool,
			}))
		);
