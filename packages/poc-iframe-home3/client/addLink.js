RocketChat.roomTypes.add(null, 0, {
	template: 'iframeHome3Link',
	icon: 'icon-link',
	condition() {
		return RocketChat.settings.get('MyHome_Enable');
	} 
});
