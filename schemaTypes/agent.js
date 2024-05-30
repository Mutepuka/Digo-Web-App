import { defineType, defineField } from "sanity";

export const agent = defineType({
    name: 'agent',
    type: 'document',
    title: 'Agent',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Agent Name'
        })
    ]
})