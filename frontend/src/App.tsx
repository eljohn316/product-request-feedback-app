import { RouterProvider } from '@tanstack/react-router';
import { router } from '@/lib/router';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
