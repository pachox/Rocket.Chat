RocketChat.roomTypes.add(null, 0, {
	template: 'iframe-eMail',
	icon: 'icon-link',
	condition() {
		return RocketChat.settings.get('Mail_Enable');
	} 
});
