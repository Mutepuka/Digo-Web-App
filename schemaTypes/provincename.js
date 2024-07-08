import { defineType, defineField } from "sanity";

export const provincename= defineType({
    name: 'provincename',
    type: 'document',
    title: 'Province Name',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Province Name'
        })
    ]
})