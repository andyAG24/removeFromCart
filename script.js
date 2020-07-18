'use strict';

const config = {
    siteUrl: '' // URL сайта
};

function removeItem(skuId) {
    var xhr = new XMLHttpRequest();
    var requestUrl = `${config.siteUrl}/.wf_graphql/apollo`;
    xhr.open('POST', requestUrl, false);
    var requestBody = ([
        {
            operationName: 'AddToCart',
            variables: {
                skuId: skuId,
                count: 0
            }
        }
    ]);
    xhr.send(requestBody);
}

var removeFromCartButton = $('.removefromcartbutton.w-button');
$(removeFromCartButton).each(() => {
    let skuId = $(this).parent().attr('data-commerce-sku-id');
    removeItem(skuId);
});