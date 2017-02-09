Meteor.startup(function() {
	RocketChat.settings.addGroup('HOME3', function() {
		const enableQuery = {_id: 'HOME3_Enable', value: true};
		this.add('HOME3_Enable', false, { type: 'boolean', public: true });
	});
});