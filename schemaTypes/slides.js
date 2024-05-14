import { defineType, defineField } from "sanity";

export const slides = defineType({
    name: 'slides',
    type: 'document',
    title: 'Slides',
    fields:[
        defineField({
            name: 'subtitle',
            type: 'string',
            title: 'Property Subtitle'

        }),
        defineField({
            name: 'code',
            type: 'string',
            title: 'Property Code'

        }),
        defineField({
            name: 'number',
            type: 'string',
            title: 'Property Number'

        }),
        defineField({
            name: 'lineone',
            type: 'string',
            title: 'Line One'

        }),
        defineField({
            name: 'linetwo',
            type: 'string',
            title: 'Line Two'

        }),
        defineField({
            name: 'status',
            type: 'reference',
            title: 'Property Status',
            to:[{type: 'status'}]

        }),
        defineField({
            name: 'bgImg',
            type: 'image',
            title: 'Slide Image'

        }),
        defineField({
            name: 'price',
            type: 'string',
            title: 'Price'

        }),

    ]
});