// JavaScript source code

var token = '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'
var baseUrl = 'https://rasengan01.myshopify.com'
   
setTimeout(() => {
    function getProjectData(_e) {
        console.log(_e);
        fetch(baseUrl + `/admin/api/2021-07/products/${_e.data.source.product.id}/metafields.json`, {
            method: 'POST',
            headers: {
                'X-Shopify-Access-Token': token,
                'Accept': "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "metafield": {
                    "namespace": "inventory",
                    "key": "designImage",
                    "value": `${_e.data.previews[0]}`,
                    "type": "single_line_text_field"
                }
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }
    window.ppclient.on('project-saved', getProjectData);
}, 2000)

var _cartEl = document.querySelector('.cart-item__quantity');

if (window.location.pathname.indexOf('/cart') > -1) {
    let btn = document.createElement("button");
    btn.innerHTML = "Customize";
    btn.name = "pp";
    for (var i = 0; i < _cartEl.length; i++) {
        _cartEl[i].appendChild(btn);
    }
}