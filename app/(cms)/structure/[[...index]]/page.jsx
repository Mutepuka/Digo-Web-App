"use client";

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';
//import sanityConfig from '@digo-estate/sanity.config';

const Studio = ()=>{
    return <NextStudio config={config}/>
}
export default Studio;
