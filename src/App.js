import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminRoutes } from "./routes";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AdminRoutes />
        <ToastContainer />
      </AuthContextProvider>
    </>
  );
}

export default App;
