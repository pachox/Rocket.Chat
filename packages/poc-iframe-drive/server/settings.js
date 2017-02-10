Meteor.startup(function() {
	RocketChat.settings.addGroup('my Drive', function() {
		const enableQuery = {_id: 'MyDrive_Enable', value: true};
		this.add('MyDrive_Enable', false, { type: 'boolean', public: true });
		this.add('MyDrive_IframeUrl', 'https://drive.fabbricadigitale.it', { type: 'string', public: true, enableQuery: enableQuery });
	});
});
