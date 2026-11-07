import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

export async function getProjects(lang: Lang) {
  const entries = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export function slugOf(id: string) {
  return id.split('/')[1];
}
