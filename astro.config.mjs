import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [starlight({
    title: 'Student Home',
    description: 'Community-maintained information for living together at Student Home in Gent.',
    favicon: '/favicon.svg',
    customCss: ['./src/styles/site.css'],
    sidebar: [
      { label: 'Home', slug: '' },
      { label: 'Living here', items: [{ label: 'Household regulations', slug: 'living-here/household-regulations' }] },
    ],
    tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
    pagination: false,
    lastUpdated: false,
    credits: false,
    head: [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }],
  })],
});
