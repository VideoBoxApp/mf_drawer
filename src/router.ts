import Videos from "./pages/Videos";
import Favorites from "./pages/Favorites";
import { hideDrawer, storeDrawer } from "./store/drawer.store";

declare global {
  interface Window {
    route: (route: string) => void;
  }
}

export const route = (route: string) => {
  window.history.pushState({}, "", route);
  handleLocation();
};

const routes: { [key: string]: HTMLElement } = {
  "/": Videos(),
  "/favorites": Favorites(),
};

const handleLocation = async () => {
  const path: string = window.location.pathname;
  const route = routes[path] || routes[""];

  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = "";
    root.appendChild(route);
  } else {
    const newRoot = document.createElement("main");
    newRoot.id = "root";
    newRoot.appendChild(route);
    document.body.appendChild(newRoot);
  }

  storeDrawer.dispatch(hideDrawer());
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
