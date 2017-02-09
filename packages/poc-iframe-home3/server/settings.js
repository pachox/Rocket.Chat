Meteor.startup(function() {
	RocketChat.settings.addGroup('my Home', function() { 
		const enableQuery = {_id: 'HOME3_Enable', value: true};
		this.add('HOME3_Enable', false, { type: 'boolean', public: true });
		this.add('HOME3_Openucapi', 'https://c4c.fabbricadigitale.it/openuc', { type: 'string', public: true, enableQuery: enableQuery });
	});
});
