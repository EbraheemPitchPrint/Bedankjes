// JavaScript source code

(function (global) {
	var token = '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'
	var baseUrl = 'https://rasengan01.myshopify.com/admin/api/2021-07/'


	if (window.location.pathname.indexOf('/products/') !== -1) {

		setTimeout(() => {
			function getProjectData(_e) {
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


			}
			if (window.ppclient) {
				window.ppclient.on('project-saved', getProjectData);
				ppclient.on('lib-ready', getProjectData);
			}
			
		}, 2000)
	}
}(this))