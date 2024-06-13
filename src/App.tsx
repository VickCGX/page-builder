import Drawing from "@/app/Drawing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initState } from "./context/DrawingState";
import { DrawingProvider } from "./context/DrawingProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Drawing />,
  },
]);

function App() {
  return (
    <>
      <DrawingProvider initialState={initState}>
        <RouterProvider router={router} />
      </DrawingProvider>
    </>
  );
}

export default App;
