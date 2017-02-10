Meteor.startup(function() {
	RocketChat.settings.addGroup('my Home', function() { 
		const enableQuery = {_id: 'MyHome_Enable', value: true};
		this.add('MyHome_Enable', false, { type: 'boolean', public: true });
		this.add('MyHome_Openucapi', 'https://c4c.fabbricadigitale.it/openuc', { type: 'string', public: true, enableQuery: enableQuery });
	});
});
