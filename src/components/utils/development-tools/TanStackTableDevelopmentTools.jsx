import React from "react";
import { isProduction } from "../../../common/utilities.js";

export const TanStackTableDevelopmentTools = isProduction
	? () => null
	: React.lazy(() =>
			import("@tanstack/react-table-devtools").then((result) => ({
				default: result.ReactTableDevtools,
			}))
		);
