Template.iframeMail.helpers({
  getIframeUri: function () {
    return RocketChat.settings.get('MyMail_IframeUrl');
  }
});