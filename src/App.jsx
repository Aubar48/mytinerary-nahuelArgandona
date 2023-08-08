import "./App.css";
import { Nav } from "./components/Nav";
import { Banner } from "./components/Banner";
import { ParentComponents } from "./components/ParentComponents";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <ParentComponents />
      <Footer />
    </>
  );
}

export default App;
