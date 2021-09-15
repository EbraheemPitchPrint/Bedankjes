// JavaScript source code

    fetch('https://rasengan01.myshopify.com/admin/oauth/access_scopes.json', {
        headers: {
            'X-Shopify-Access-Token': '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',,
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));