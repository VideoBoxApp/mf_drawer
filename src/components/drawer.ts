import { hideDrawer, storeDrawer } from "@/store/drawer.store";
import "./styles/drawer";
import { route } from "@/router";

export function Drawer() {
  const drawerBackground = document.createElement("div");
  drawerBackground.classList.add("drawerBackground");
  drawerBackground.id = "drawerBackground";

  const drawer = document.createElement("div");
  drawer.id = "drawer";
  drawer.classList.add("drawer");
  drawerBackground.appendChild(drawer);

  const closeIcon = document.createElement("i");
  closeIcon.classList.add("closeIcon");
  drawer.appendChild(closeIcon);
  closeIcon.addEventListener("click", () => storeDrawer.dispatch(hideDrawer()));

  const brandLogo = document.createElement("div");
  brandLogo.classList.add("brandLogo");
  drawer.appendChild(brandLogo);

  const menuOptions = document.createElement("div");
  menuOptions.classList.add("menuOptions");
  drawer.appendChild(menuOptions);

  const menuVideosOptionBox = document.createElement("div");
  menuVideosOptionBox.classList.add("menuOptionBox");
  menuOptions.appendChild(menuVideosOptionBox);
  menuVideosOptionBox.addEventListener("click", () => {
    route("/");
  });

  const videoIcon = document.createElement("i");
  videoIcon.classList.add("videoIcon");
  menuVideosOptionBox.appendChild(videoIcon);

  const videoMenuOption = document.createElement("span");
  videoMenuOption.classList.add("menuOption");
  videoMenuOption.innerText = "VIDEOS";
  menuVideosOptionBox.appendChild(videoMenuOption);

  const menuFavoritesOptionBox = document.createElement("div");
  menuFavoritesOptionBox.classList.add("menuOptionBox");
  menuOptions.appendChild(menuFavoritesOptionBox);
  menuFavoritesOptionBox.addEventListener("click", () => {
    route("/favorites");
  });

  const hearthIcon = document.createElement("i");
  hearthIcon.classList.add("hearthIcon");
  menuFavoritesOptionBox.appendChild(hearthIcon);

  const hearthMenuOption = document.createElement("span");
  hearthMenuOption.classList.add("menuOption");
  hearthMenuOption.innerText = "FAVORITOS";
  menuFavoritesOptionBox.appendChild(hearthMenuOption);

  return drawerBackground;
}
