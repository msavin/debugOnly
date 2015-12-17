Package.describe({
	name: 'msavin:debugonly',
	summary: 'A debugOnly debugOnly package',
	version: '1000.0.1',
	git:     'https://github.com/msavin/debugOnly.git',
	documentation: 'README.md',
	debugOnly: true
});

Package.onUse(function(api) {
	api.addFiles(["debugOnly.js"],  ['client','server']);
	api.versionsFrom('1.0');
});