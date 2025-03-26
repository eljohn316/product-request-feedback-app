import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/roadmap/')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Roadmap route</div>;
}
