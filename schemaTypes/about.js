import { defineType, defineField } from 'sanity';

export const about = defineType({
    name: 'about',
    type: 'document',
    title: 'About Us',
    fields:[
        defineField({
            name: 'image',
            type: 'image',
            title: 'Program Image'
        }),
        defineField({
            name: 'name',
            type: 'string',
            title: 'Program Title'
        }),
        defineField({
            name: 'fheading',
            type: 'string',
            title: 'Frist Heading'
        }),
        defineField({
            name: 'sheading',
            type: 'string',
            title: 'Second Heading'
        }),
        defineField({
            name: 'theading',
            type: 'string',
            title: 'Third Heading'
        }),
        defineField({
            name: 'fparagraph',
            type: 'text',
            title: 'Frist Paragraph'
        }),
        defineField({
            name: 'sparagraph',
            type: 'text',
            title: 'Second Paragraph'
        }),
        defineField({
            name: 'tparagraph',
            type: 'text',
            title: 'Third Paragraph'
        }),
    ]
})