import "./App.css";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
// import Webcam from "react-webcam";

function App() {
  return (
    <div className="wrapper">
      {/* <Webcam /> */}
      <Header />
      <Card />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
