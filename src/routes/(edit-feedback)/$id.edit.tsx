import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(edit-feedback)/$id/edit')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Feedback ($id/edit) details edit route</div>;
}
