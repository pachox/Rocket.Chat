Meteor.startup(function() {
	RocketChat.settings.addGroup('my Mail', function() {
		const enableQuery = {_id: 'Mail_Enable', value: true};
		this.add('Mail_Enable', false, { type: 'boolean', public: true });
	});
});
