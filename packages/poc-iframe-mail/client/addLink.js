RocketChat.roomTypes.add(null, 0, {
	template: 'iframeMailLink',
	icon: 'icon-link',
	condition() {
		return RocketChat.settings.get('MyMail_Enable');
	} 
});
