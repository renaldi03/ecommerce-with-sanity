import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: 'xnn0tvpn',
    dataset: 'production',
    apiVersion: '01-05-2022',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);