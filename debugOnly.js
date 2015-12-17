Meteor.startup(function () {
	if (Meteor.isServer) {
		global['debugOnly'] = true; 
	} else { 
		window['debugOnly'] = true;
	}
});