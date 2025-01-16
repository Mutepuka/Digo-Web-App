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
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Agent Image'
        }),
        defineField({
            name: 'phone',
            type: 'string',
            title: 'Agent Phone'
        }),
        defineField({
            name: 'email',
            type: 'string',
            title: 'Agent Email'
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Agent Description'
        }),
        defineField({
            name: 'tagname',
            type: 'string',
            title: 'Tag Name'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Agent Slug',
            options:{
                source: 'tagname'
            }
        }),
        defineField({
            name: 'agentrating',
            type: 'reference',
            title: 'Agent Rating',
            to:[{type: 'agentrating'}]
        }),
        defineField({
            name: 'agentverifcation',
            type: 'reference',
            title: 'Agent Verification',
            to:[{type: 'agentverification'}]
        }),
        defineField({
            name: 'facebook',
            type: 'string',
            title: 'Facebook'
        }),
        defineField({
            name: 'twitter',
            type: 'string',
            title: 'Twitter'
        }),
        defineField({
            name: 'linkedin',
            type: 'string',
            title: 'Linkendin'
        }),
    ]
})