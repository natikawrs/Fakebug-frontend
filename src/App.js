import "./App.css";
import Router from "./route/Router";
import { ToastContainer } from "react-toastify";
import { useLoading } from "./contexts/LoadingContext";
import Spinner from "./components/ui/Spinner";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { loading } = useLoading();
  // if (loading) {
  //   return <Spinner />;
  // }
  const { initialLoading } = useAuth();
  if (initialLoading) return <Spinner />;

  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="3000"
        theme="colored"
        position="bottom-center"
      />
    </>
  );
}

export default App;
