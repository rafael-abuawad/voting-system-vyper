import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Web3Provider } from "@/components/web3-provider";
import { ThemeProvider } from "@/components/theme-provider";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider>
        <Web3Provider>
          <Outlet />
        </Web3Provider>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
