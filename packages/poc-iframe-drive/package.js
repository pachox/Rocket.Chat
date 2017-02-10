Package.describe({
	name: 'poc-iframe-drive',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.use('templating');
	api.use('session');
	api.use('less');
	api.use('spacebars');
	api.use('rocketchat:lib');
	api.use('kadira:flow-router', 'client');

	api.addFiles('server/settings.js', 'server'); 
	
	api.addFiles('route.js', 'client');	
	api.addFiles('client/addLink.js', 'client');	
	api.addFiles('client/css/styles.less', 'client');
	api.addFiles('client/iframeLink.html', 'client');
	api.addFiles('client/iframeArea.html', 'client');
	api.addFiles('client/helpers/templateHelper.js', 'client');
});

