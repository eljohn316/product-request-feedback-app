import { createRouter } from '@tanstack/react-router';
import { routeTree } from '@/routeTree.gen';
import { queryClient } from '@/lib/query-client';

export const router = createRouter({
  routeTree,
  context: {
    queryClient
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true
});
