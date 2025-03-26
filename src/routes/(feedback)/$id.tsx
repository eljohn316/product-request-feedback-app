import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(feedback)/$id')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Feedback ($id) details route</div>;
}
