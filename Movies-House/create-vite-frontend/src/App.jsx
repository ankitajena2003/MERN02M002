import Navbar from "./Components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
