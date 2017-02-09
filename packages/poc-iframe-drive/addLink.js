RocketChat.roomTypes.add(null, 0, {
	template: 'iframeLink',
	icon: 'icon-link'
	condition() {
		return RocketChat.settings.get('Drive_Enable');
	}
});
