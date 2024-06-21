import "./App.css";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Card />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
