// JavaScript source code

(function (global) {
	var token = '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'
	var baseUrl = 'https://rasengan01.myshopify.com/admin/api/2021-07/'


	if (window.location.pathname.indexOf('/products/') !== -1) {

		setTimeout(() => {
			function setProjectId(_e) {
				console.log(_e);
				//console.log(baseUrl + `/products/${ _e.data.source.product.id }/metafields.json`)
				//fetch(baseUrl + `products/${_e.data.source.product.id}/metafields.json`, {
				//	method: 'POST',
				//	headers: {
				//		'X-Shopify-Access-Token': token,
				//		'Accept': "application/json",
				//		"Content-Type": "application/json"
				//	},
				//	body: JSON.stringify({
				//		"metafield": {
				//			"namespace": "inventory",
				//			"key": "designImage",
				//			"value": `${_e.data.previews[0]}`,
				//			"type": "single_line_text_field"
				//		}
				//	})
				//})
				//	.then(response => response.json())
				//	.then(data => console.log(data));

				if (document.getElementById('_pitchprint')) {
					var pp = document.getElementById('_pitchprint').value;
					var design = document.getElementById('designurl');
					design.value = 'https://s3-eu-west-1.amazonaws.com/pitchprint.io/previews/' + pp + '_1.png';
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
				ppclient.on('lib-ready', setProjectId);
			}
			
		}, 2000)
	}
}(this))