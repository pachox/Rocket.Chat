Package.describe({
	name: 'poc-iframe-home3',
	version: '0.0.1',
	summary: '',
	git: '',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.use('templating');
	api.use('session');
	api.use('less');
	api.use('rocketchat:lib');
	api.use('kadira:flow-router', 'client');
	api.use('jquery', 'client');
	api.use('kendo-ui-pro');
	api.use('benjaminrh:jquery-cookie', 'client');

	api.addFiles('route.js', 'client');
	api.addFiles('client/addLink.js', 'client');
	api.addFiles('client/css/styles.less', 'client');
	api.addFiles('client/css/style.css', 'client');
	api.addFiles('client/iframeLink.html', 'client');
	api.addFiles('client/iframeArea.html', 'client');
	api.addFiles('server/settings.js', 'server');
});
