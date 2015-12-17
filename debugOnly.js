Meteor.startup(function () {
	if (Meteor.isServer) {
		global['debugOnly'] = true; 
	} 

	if (Meteor.isClient) { 
		window['debugOnly'] = true;
	}
});