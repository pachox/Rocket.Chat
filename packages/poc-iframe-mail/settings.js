Meteor.startup(function() {
	RocketChat.settings.addGroup('Mail', function() {
		const enableQuery = {_id: 'Mail_Enable', value: true};
		this.add('HOME3_Enable', false, { type: 'boolean', public: true });
	});
});
