import type { ToolContext } from "@phake/mcp";
import { createMCPServer, defineTool } from "@phake/mcp";
import { z } from "zod";

const tools = [
	defineTool({
		name: "hello",
		description: "Say hello to the authenticated user",
		requiresAuth: true,
		inputSchema: z.object({
			name: z.string().describe("Name to greet"),
		}),
		handler: async (args, context: ToolContext<Env>) => {
			const _env = context.bindings as Env;

			const { data: token, error: tokenError } = context.getToken();
			if (tokenError || !token) {
				return {
					content: [
						{
							type: "text" as const,
							text: tokenError || "Not authenticated",
						},
					],
					isError: true,
				};
			}

			const { data, error } = await context.getUser();
			if (error || !data) {
				return {
					content: [
						{
							type: "text" as const,
							text: error || "Failed to fetch user info",
						},
					],
					isError: true,
				};
			}

			return {
				content: [
					{
						type: "text" as const,
						text: `Hello, ${args.name}!`,
					},
				],
			};
		},
	}),
];

const server = createMCPServer({ tools, adapter: "worker" });

export default server;
