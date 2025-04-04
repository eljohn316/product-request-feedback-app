export const STATUS = ['suggestion', 'planned', 'in-progress', 'live'] as const;

export const SORT_OPTIONS = [
  'most-upvotes',
  'least-upvotes',
  'most-comments',
  'least-comments'
] as const;

export const CATEGORIES = ['ui', 'ux', 'enhancement', 'bug', 'feature'] as const;

export type Status = (typeof STATUS)[number];

export type SortOptions = (typeof SORT_OPTIONS)[number];

export type Categories = (typeof CATEGORIES)[number];
