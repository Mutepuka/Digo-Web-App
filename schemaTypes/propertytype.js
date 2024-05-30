import { defineType, defineField } from "sanity";

export const propertytype= defineType({
    name: 'propertytype',
    type: 'document',
    title: 'Property Type',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Property Type'
        })
    ]
})