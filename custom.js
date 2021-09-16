// JavaScript source code

var shop = 'rasengan01',
    client_id = 'e481375958f3313e5fb54e4090a4ba0b',
    scopes = 'read_customers, write_customers,read_inventory, read_orders, write_orders, write_inventory, read_merchant_managed_fulfillment_orders, write_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, write_assigned_fulfillment_orders',
    redirectUri = 'https://rasengan01.myshopify.com/admin/apps/bedankjes-custom-work-1',
    nonce = 2000,
    access_mode = 'value';

if (localStorage.getItem("_i") === null) {
    window.location.href = `https://${shop}.myshopify.com/admin/oauth/authorize?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirectUri}&state=${nonce}&grant_options[]=${access_mode}`;
    localStorage.setItem('_i', true);
} else {
    console.log(window.location.pathname);
}

    //fetch('https://rasengan01.myshopify.com/admin/oauth/access_scopes.json', {
    //    headers: {
    //        'X-Shopify-Access-Token': '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',
    //    },
    //})
    //.then(response => response.json())
    //.then(data => console.log(data));