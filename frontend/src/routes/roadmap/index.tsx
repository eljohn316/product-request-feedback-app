import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/roadmap/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div>
      Roadmap route <br /> <Link to="/">Home</Link>
    </div>
  );
}
