// JavaScript source code

var token = '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'
var baseUrl = 'https://rasengan01.myshopify.com'

function getProjectData(_e) {
    console.log(_e);
}
window.ppclient.on('project-saved', getProjectData);
fetch(baseUrl + `/admin/api/2021-07/metafields.json`, {
    headers: {
        'X-Shopify-Access-Token': token,
    },
})
    .then(response => response.json())
    .then(data => console.log(data));