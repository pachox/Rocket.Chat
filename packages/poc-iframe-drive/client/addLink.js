RocketChat.roomTypes.add(null, 0, {
	template: 'iframeDriveLink',
	icon: 'icon-link',
	condition() {
		return RocketChat.settings.get('MyDrive_Enable');
	}
});
