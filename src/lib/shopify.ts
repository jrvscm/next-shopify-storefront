// src/lib/shopify.ts
import axios from 'axios';

const SHOPIFY_API_URL = process.env.SHOPIFY_API_URL;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function fetchProducts() {
  try {
    const response = await axios({
      url: SHOPIFY_API_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      data: JSON.stringify({
        query: `
          {
            products(first: 30) {
              edges {
                node {
                  id
                  title
                  description
                  images(first: 1) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    return response.data.data.products.edges.map((edge: any) => edge.node);
  } catch (error: any) {
    console.error("Error in Axios request:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    }
    throw error;
  }
}
