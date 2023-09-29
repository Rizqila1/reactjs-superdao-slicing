import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <main className="app-main container-fluid px-10 mx-auto">
      <Outlet />
    </main>
  );
}

export default App;
