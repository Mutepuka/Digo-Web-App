import  ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.NEXT_SANITY_STUDIO_TOKEN,
    apiVersion: '2022-03-25',
    
});

//image builder 
const builder = ImageUrlBuilder(client);
export const urlFor =(source)=> builder.image(source)


