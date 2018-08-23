/* eslint-disable */

import ShopifyBuy from 'shopify-buy';
import 'whatwg-fetch';

const shopClient = ShopifyBuy.buildClient({
  accessToken: '970d48fc66da9fadba4c7eac07fb8845',
  domain: 'emmasofia.myshopify.com',
  appId: '6',
});

const initCart = () => {
  return shopClient.createCart()
    .then(newCart => {
      return newCart;
    })
    .catch(() => {
      console.log('Request failed');
    });
};

const getProductsByCollectionId = (id) => {
  return shopClient.fetchQueryProducts({collection_id: id})
    .then(products => {
      return products;
    })
    .catch(() => {
      console.log('Request failed');
    });
};

const getAllProducts = () => {
  return shopClient.fetchAllProducts()
    .then(products => {
      return products;
    })
    .catch(() => {
      console.log('Request failed');
    });
};

const queryProducts = (query) => {
  return shopClient.fetchQueryProducts(query)
    .then(products => {
      return products
    })
    .catch(() => {
      console.log('Request failed');
    });
};


const getProductById = (id) => {
  shopClient.fetchProduct(id)
    .then(function (product) {
      console.log(product);
    })
    .catch(() => {
      console.log('Request failed');
    });
};

export {
  initCart,
  getAllProducts,
  getProductById,
  queryProducts,
  getProductsByCollectionId
};
