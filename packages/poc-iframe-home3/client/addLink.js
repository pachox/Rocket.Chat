RocketChat.roomTypes.add(null, 0, {
	template: 'iframe-home3',
	icon: 'icon-link',
	condition() {
		return RocketChat.settings.get('HOME3_Enable');
	} 
});
