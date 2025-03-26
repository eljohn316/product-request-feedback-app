import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(home)/_layout/')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Home suggestions route</div>;
}
