import { Container } from "./features/container/components/container";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query-client";

const App = () => (
  <QueryClientProvider client={queryClient}>
      <Container/>
  </QueryClientProvider>
)

export default App;