export const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'ui', label: 'UI' },
  { value: 'ux', label: 'UX' },
  { value: 'enhancement', label: 'Enhancement' },
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature' }
] as const;

export const CATEGORY_VALUES = [
  'all',
  'ui',
  'ux',
  'enhancement',
  'bug',
  'feature'
] as const;

export type CategoryValue = (typeof CATEGORY_VALUES)[number];

export const SORT_OPTIONS = [
  { value: 'most-upvotes', label: 'Most Upvotes' },
  { value: 'least-upvotes', label: 'Least Upvotes' },
  { value: 'most-comments', label: 'Most Comments' },
  { value: 'least-comments', label: 'Least Comments' }
] as const;

export const SORT_OPTION_VALUES = [
  'most-upvotes',
  'least-upvotes',
  'most-comments',
  'least-comments'
] as const;

export type SortOptionValue = (typeof SORT_OPTION_VALUES)[number];

export const DEFAULT_SEARCH_PARAMS = {
  category: 'all',
  sort: 'most-upvotes'
} as const;
