import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Route } from "./app/routes/route";

function App() {
  return (
    <>
      <RouterProvider router={Route} />
    </>
  );
}

export default App;
