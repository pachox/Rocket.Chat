Meteor.startup(function() {
	RocketChat.settings.addGroup('Drive', function() {
		const enableQuery = {_id: 'Drive_Enable', value: true};
		this.add('HOME3_Enable', false, { type: 'boolean', public: true });
	});
});
