export interface AfterCreateOptions {
	projectName: string;
	directoryPath: string;
	packageManager: string;
}

export const afterCreateHook = {
	applyHook(_templateName: string, options: AfterCreateOptions): void {
		console.log(`Project created: ${options.projectName}`);
	},
};
