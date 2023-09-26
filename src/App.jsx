import { NavBar } from "./components/layouts/NavBar/NavBar";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  let saludar = "hola como estas";

  return (
    <>
      <NavBar />
      <ItemListContainer saludar={saludar} />
    </>
  );
}

export default App;
