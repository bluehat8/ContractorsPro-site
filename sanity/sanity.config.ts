import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.PUBLIC_SANITY_PROJECT_ID ||
  'kisr0owh';

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.PUBLIC_SANITY_DATASET ||
  'production';

export default defineConfig({
  name: 'default',
  title: 'ContractorPro US Studio',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
