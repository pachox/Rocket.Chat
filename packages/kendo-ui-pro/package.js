Package.describe({
	name: 'kendo-ui-pro',
	version: '2017.1.118',
	summary: '',
	git: '',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use('jquery', 'client');

	//js
  api.addFiles('telerik.kendoui.professional.2017.1.118.commercial/src/js/kendo.all.js', 'client');

  //css web and dataViz
  //api.addFiles('telerik.kendoui.professional.2017.1.118.commercial/styles/kendo.common.min.css', 'client');
  //api.addFiles('telerik.kendoui.professional.2017.1.118.commercial/styles/kendo.default.min.css', 'client');

  //mobile css
  api.addFiles('telerik.kendoui.professional.2017.1.118.commercial/src/styles/mobile/kendo.mobile.all.css', 'client');

  //global CSS fonts
  api.addAssets('telerik.kendoui.professional.2017.1.118.commercial/src/styles/mobile/images/kendoui.woff', 'client');
  api.addAssets('telerik.kendoui.professional.2017.1.118.commercial/src/styles/mobile/images/kendoui.ttf', 'client');
});

