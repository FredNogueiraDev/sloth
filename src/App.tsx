import { QueryClient } from "@tanstack/query-core";
import { Router } from "./Router";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

export function App() {
  return (
     <QueryClientProvider client={queryClient}>
      <Theme className="w-full h-full flex justify-center items-center">
          <Router />
          <Toaster />
      </Theme>
    </QueryClientProvider>
  );
}
