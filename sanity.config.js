import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Digo Estate',

  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  basePath: '/structure',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
