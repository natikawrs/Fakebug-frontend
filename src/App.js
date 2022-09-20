import "./App.css";
import Router from "./route/Router";
import { ToastContainer } from "react-toastify";
import { useLoading } from "./contexts/LoadingContext";
import Spinner from "./components/ui/Spinner";

function App() {
  const { loading } = useLoading();
  // if (loading) {
  //   return <Spinner />;
  // }
  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer autoClose="3000" theme="colored" />
    </>
  );
}

export default App;
