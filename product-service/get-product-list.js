'use strict';

import { productlist } from "./productlist.js";

export const getProductsList = async () => {
  const list = await retrieveProducts();
  return list
};
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
function retrieveProducts() {
  try {
    return productlist
  }
  catch(error) {
    return error;
  }
}

