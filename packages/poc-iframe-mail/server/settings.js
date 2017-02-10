Meteor.startup(function() {
	RocketChat.settings.addGroup('my Mail', function() {
		const enableQuery = {_id: 'MyMail_Enable', value: true};
		this.add('MyMail_Enable', false, { type: 'boolean', public: true });
		this.add('MyMail_IframeUrl', 'https://sogo.fabbricadigitale.it/SOGo', { type: 'string', public: true, enableQuery: enableQuery });
	});
});
