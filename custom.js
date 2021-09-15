// JavaScript source code

    fetch('https://rasengan01.myshopify.com/admin/oauth/access_scopes.json', {
        headers: {
            'X-Shopify-Access-Token': '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',
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));