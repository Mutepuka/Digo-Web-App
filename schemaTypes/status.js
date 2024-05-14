import { defineType, defineField } from "sanity";

export const status= defineType({
    name: 'status',
    type: 'document',
    title: 'Status',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Property Status'

        })
    ]
})