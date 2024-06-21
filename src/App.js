import "./App.css";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
