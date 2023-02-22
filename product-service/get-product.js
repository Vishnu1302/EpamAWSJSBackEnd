'use strict';

import { productlist } from "./productlist.js";

export const getProductsById = async (event) => {
  const id = event.pathParameters.productId
  const response = await retrieveProduct(id);
  return response;
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

function retrieveProduct(id) {
  try {
    const prod = productlist.filter(x => x.id === id);
    if (prod.length > 0) {
      return {
        body :{
          message:'Product found',
          product: prod[0]
        }
      }
    }
    else {
      return {
        body :{
          message:'Product not found',
          product: prod
        }
      }
    }
  }
  catch(error) {
    return error;
  }
}