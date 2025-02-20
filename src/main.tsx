import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import './styles.css';
import reportWebVitals from './reportWebVitals.ts';

import App from './App.tsx';
import PensionsPage from './pages/PensionsPage.tsx';
import { initMockAPI } from './mocks/index.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MonthlyInvestAmountInputPage from './pages/MonthlyInvestAmountInputPage.tsx';

initMockAPI();

const queryClient = new QueryClient();
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
});

const monthlyInvestAmountInputRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/monthly-invest-amount-input',
  component: () => <MonthlyInvestAmountInputPage />,
});

const simulationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/simulation',
  component: () => <div>Simulations</div>,
});

const pensionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pensions',
  component: () => <PensionsPage />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  monthlyInvestAmountInputRoute,
  simulationRoute,
  pensionsRoute,
]);

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
