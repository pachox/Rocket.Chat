Meteor.startup(function() {
	RocketChat.settings.addGroup('MyHome 3', function() { 
		const enableQuery = {_id: 'HOME3_Enable', value: true};
		this.add('HOME3_Enable', false, { type: 'boolean', public: true });
		this.add('HOME3_OpenucUrl', '', { type: 'string', enableQuery: enableQuery });
	});
});