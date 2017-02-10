Meteor.startup(function() {
	RocketChat.settings.addGroup('my Drive', function() {
		const enableQuery = {_id: 'Drive_Enable', value: true};
		this.add('Drive_Enable', false, { type: 'boolean', public: true });
	});
});
