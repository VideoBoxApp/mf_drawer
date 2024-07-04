import { Drawer } from "./components/drawer";
import "./global.scss";
import Videos from "./pages/Videos";

function App() {
  const main = document.createElement("div");
  main.appendChild(Drawer());
  document.body.appendChild(main);
  
}

App();
