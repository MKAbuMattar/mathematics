import type { APIRoute } from 'astro';
import { categories } from '@/lib/categories';
import { site } from '@/lib/site';

export const GET: APIRoute = ({ site: astroSite }) => {
  const base = (astroSite?.toString() ?? site.url).replace(/\/$/, '');

  const lines: string[] = [];
  lines.push(`# ${site.name}`);
  lines.push('');
  lines.push(`> ${site.description}`);
  lines.push('');
  lines.push(
    'Static reference site. Every formula page lives at `/<category>/<topic>` and renders LaTeX with KaTeX. Source code: ' +
      site.repo +
      '.',
  );
  lines.push('');

  for (const cat of categories) {
    lines.push(`## ${cat.title}`);
    lines.push('');
    lines.push(cat.description);
    lines.push('');
    for (const topic of cat.topics) {
      const url = `${base}/${cat.slug}/${topic.slug}`;
      lines.push(`- [${topic.title}](${url}): ${topic.description}`);
    }
    lines.push('');
  }

  lines.push('## Optional');
  lines.push('');
  lines.push(`- [About](${base}/about): Stack, motivation, scope.`);
  lines.push(
    `- [Privacy Policy](${base}/privacy-policy): No tracking, no cookies, no profiling.`,
  );
  lines.push(
    `- [llms-full.txt](${base}/llms-full.txt): Concatenated MDX body of every formula page.`,
  );
  lines.push(`- [Repository](${site.repo}): Source on GitHub.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
