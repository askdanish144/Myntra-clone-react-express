import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";
import FetchItems from "../Components/FetchItems";
import "../App.css";

function App() {
  const spinner = useSelector((store) => store.spinner); // Ensure this is a boolean state (true/false)

  return (
    <>
      <Header />
      <FetchItems />
      {spinner ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;

