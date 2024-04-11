import { Container } from "./features/container/components/container";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query-client";
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { Error } from "./features/error/components/error";

const routes = createBrowserRouter([
  { path: "/", element: <Container />,errorElement: <Error />}
])

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes}/>
  </QueryClientProvider>
)

export default App;