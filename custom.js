// JavaScript source code

(function (global) {
	var token = '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'
	var baseUrl = 'https://rasengan01.myshopify.com/admin/api/2021-07/'


	if (window.location.pathname.indexOf('/products/') !== -1) {

		setTimeout(() => {
			function setProjectId(_e) {
				console.log(_e);
				if (document.getElementById('_pitchprint')) {
					var pp = document.getElementById('_pitchprint').value;
					var design = document.getElementById('designurl');
					design.value = 'https://s3.eu-west-1.amazonaws.com/pdf.pitchprint/' + pp + '.png';
				}
			}
			//function setProjectId2(_e) {
			//	console.log(_e);

			//	if (document.getElementById('designurl')) {
			//		var design = document.getElementById('designurl');
			//		design.value = _e.data.previews[0];
			//	}
			//}
			if (window.ppclient) {
				window.ppclient.on('project-saved', setProjectId);
				window.ppclient.on('lib-ready', setProjectId);
			}
			
		}, 2000)
	}
}(this))