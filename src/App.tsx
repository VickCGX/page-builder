import Drawing from "@/app/Drawing";
import { initState } from "./context/DrawingState";
import { DrawingProvider } from "./context/DrawingProvider";

function App() {
  return (
    <>
      <DrawingProvider initialState={initState}>
        <Drawing />
      </DrawingProvider>
    </>
  );
}

export default App;
