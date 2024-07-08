import { defineType, defineField } from "sanity";

export const property = defineType({
    name: 'property',
    type: 'document',
    title: 'Property',
    fields:[
        defineField({
            name: 'area',
            type: 'string',
            title: 'Property Area'
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Product Images',
            of: [{type: 'image'}]
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Property Description'
        }),
        defineField({
            name: 'location',
            type: 'string',
            title: 'Property Location'
        }),
        defineField({
            name: 'addressOne',
            type: 'string',
            title: 'Address One'
        }),
        defineField({
            name: 'addressTwo',
            type: 'string',
            title: 'Address Two'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Product Slug',
            options:{
                source: 'area'
            }
        }),
        defineField({
            name: 'price',
            type: 'string',
            title: 'Property Price'
        }),
        defineField({
            name: 'beds',
            type: 'string',
            title: 'Beds'
        }),
        defineField({
            name: 'baths',
            type: 'string',
            title: 'Bathrooms'
        }),
        defineField({
            name: 'garages',
            type: 'string',
            title: 'Garages'
        }),
        defineField({
            name: 'status',
            type: 'reference',
            title: 'Property Status',
            to:[{type: 'status'}]
        }),
        defineField({
            name: 'propertytype',
            type: 'reference',
            title: 'Property Type Category',
            to:[{type: 'propertytype'}]
        }),
        defineField({
            name: 'agent',
            type: 'reference',
            title: 'Agent Name',
            to:[{type: 'agent'}]
        }),
        defineField({
            name: 'provincename',
            type: 'reference',
            title: 'Province Name',
            to:[{type: 'provincename'}]
        }),
        defineField({
            name: 'amenities',
            type: 'array',
            title: 'Amenities',
            of:[{type: 'string'}]
        }),
        defineField({
            name: 'videoUrl',
            type: 'url',
            title: 'Video Url',
        }),
    ]
})