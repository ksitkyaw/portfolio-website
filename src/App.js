import AllProjects from "./components/GithubProjects/AllProjects";
import ErrorPage from "./components/Routes/ErrorPage";
import Home from "./components/Routes/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "projects",
      element: <AllProjects />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
