import { defineType, defineField } from "sanity";

export const agentrating= defineType({
    name: 'agentrating',
    type: 'document',
    title: 'Agent Rating',
    fields:[
        defineField({
            name: 'name',
            type: 'number',
            title: 'Agent Rating'

        })
    ]
})