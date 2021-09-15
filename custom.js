// JavaScript source code

    fetch('https://rasengan01.myshopify.com/admin/oauth/access_scopes.json', {
        headers: {
            'X-Shopify-Access-Token': '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',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));