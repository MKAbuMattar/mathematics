import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { categories } from '@/lib/categories';
import { site } from '@/lib/site';

export const GET: APIRoute = async ({ site: astroSite }) => {
  const base = (astroSite?.toString() ?? site.url).replace(/\/$/, '');

  const catIndex = new Map(categories.map((c, i) => [c.slug, { order: i, title: c.title }]));
  const topicOrder = new Map<string, number>();
  for (const c of categories) {
    c.topics.forEach((t, i) => topicOrder.set(`${c.slug}/${t.slug}`, i));
  }

  const entries = await getCollection('formulas');
  const sorted = entries.sort((a, b) => {
    const [aCat, aTopic] = a.id.split('/');
    const [bCat, bTopic] = b.id.split('/');
    const aCi = catIndex.get(aCat)?.order ?? 999;
    const bCi = catIndex.get(bCat)?.order ?? 999;
    if (aCi !== bCi) return aCi - bCi;
    const aTi = topicOrder.get(`${aCat}/${aTopic}`) ?? 999;
    const bTi = topicOrder.get(`${bCat}/${bTopic}`) ?? 999;
    return aTi - bTi;
  });

  const lines: string[] = [];
  lines.push(`# ${site.name} — Full Content`);
  lines.push('');
  lines.push(`> ${site.description}`);
  lines.push('');
  lines.push(
    `Concatenated MDX body of every formula page, in canonical order. JSX shortcodes (<Math>, <Diagram>, <Notice>) are preserved as-is — LaTeX inside <Math math="..." /> is the inline LaTeX source.`,
  );
  lines.push('');
  lines.push('---');
  lines.push('');

  let currentCat = '';
  for (const entry of sorted) {
    const [catSlug, topicSlug] = entry.id.split('/');
    const catInfo = catIndex.get(catSlug);

    if (catSlug !== currentCat) {
      currentCat = catSlug;
      lines.push(`# ${catInfo?.title ?? catSlug}`);
      lines.push('');
    }

    const url = `${base}/${catSlug}/${topicSlug}`;
    lines.push(`## ${entry.data.title}`);
    lines.push('');
    lines.push(`URL: ${url}`);
    lines.push('');
    lines.push(entry.data.description);
    lines.push('');
    if (entry.body) {
      lines.push(entry.body.trim());
      lines.push('');
    }
    lines.push('---');
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
