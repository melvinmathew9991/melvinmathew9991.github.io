// Astro config for the portfolio.
// `site` must match the GitHub Pages address so canonical URLs and the sitemap are correct.
import fs from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// Is any blog post published (not `draft: true`)? If not, the empty /blog/ page stays out of the sitemap.
const postsDir = new URL('./src/content/posts/', import.meta.url);
const hasPublishedPosts =
  fs.existsSync(postsDir) &&
  fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .some((f) => !/^draft:\s*true\s*$/m.test(fs.readFileSync(new URL(f, postsDir), 'utf8')));

export default defineConfig({
  site: 'https://melvinmathew9991.github.io',
  // React powers the interactive project filter. Everything else is static HTML.
  integrations: [
    react(),
    sitemap({ filter: (page) => !page.includes('/404') && (hasPublishedPosts || !page.includes('/blog/')) }),
  ],
  build: {
    // Inline the (small) stylesheet into each page: one fewer request, faster first paint.
    inlineStylesheets: 'always',
  },
});
