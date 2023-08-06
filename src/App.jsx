import "./App.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ParentComponents } from "./components/ParentComponents";
function App() {
  return (
    <>
      <Nav />
      <ParentComponents />
      <Footer />
    </>
  );
}

export default App;
