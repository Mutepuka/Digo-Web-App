import { defineType, defineField } from "sanity";

export const agentverification= defineType({
    name: 'agentverification',
    type: 'document',
    title: 'Agent Verification',
    fields:[
        defineField({
            name: 'name',
            type: 'string',
            title: 'Agent Verification'

        })
    ]
})