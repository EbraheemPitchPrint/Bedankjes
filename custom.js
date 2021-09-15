// JavaScript source code

    fetch('https://rasengan01.myshopify.com/admin/oauth/access_scopes.json', {
        headers: {
            'X-Shopify-Access-Token': 'e481375958f3313e5fb54e4090a4ba0b',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));