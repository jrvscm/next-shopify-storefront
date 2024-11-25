import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export const contentfulClient = createClient({
    space: CONTENTFUL_SPACE_ID, 
    accessToken: CONTENTFUL_ACCESS_TOKEN, 
});

export const fetchFeatureFlags = async () => {
    const response = await contentfulClient.getEntries({
        content_type: 'featureFlag',
    });
  
    return response.items.map((item) => ({
        enabled: item.fields.featureJson.enabled,
        featureData: item.fields.featureJson.featureData
    }));
  };