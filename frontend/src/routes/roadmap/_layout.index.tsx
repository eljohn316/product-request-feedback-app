import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/roadmap/_layout/')({
  component: RouteComponent
});

function RouteComponent() {
  return <>Contents</>;
}
