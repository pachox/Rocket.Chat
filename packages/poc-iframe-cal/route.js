FlowRouter.route('/iframec', {
	name: 'iframec',
	action() {
		Session.set('openedRoom');
		$('.rocket-loader').remove();
		var mainNode = document.querySelector('.main-content');
		if (mainNode) {
			for (var i = 0, total = mainNode.children.length; i < total; i++) {
				mainNode.removeChild(mainNode.children[i]);
			}
		}
		BlazeLayout.render('main', { center: 'iframeCal'});
	}
});
