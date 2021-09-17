// JavaScript source code

var token = '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'
var baseUrl = 'https://rasengan01.myshopify.com'

var productId = '';

if (document.getElementById('id')) {
    productId = document.getElementById('id').value;
    fetch(baseUrl + `/admin/api/2021-07/products/${productId}.json`, {
        headers: {
            'X-Shopify-Access-Token': token,
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));
}

